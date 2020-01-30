<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <div v-for="i in posts" :key="i">
              <Posts :post="i" />
            </div>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto" max-height="100%" max-width="600" tile>
              <v-img class="pa-4" height="auto" src="../assets/capa2.jpg">
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile align-center" color="grey" size="150" roundtile>
                      <v-img v-if="hasAvatar(group)" :src="auxiliar(group)"></v-img>
                      <v-img v-else src="../assets/default_avatar.jpg" to="/profile" link></v-img>
                    </v-avatar>
                  </v-col>

                  <v-col cols="12">
                    <v-card flat class="text-xs-center ma-3">
                      <v-list-item>
                        <v-list-item-title class="headline">{{this.nome}}</v-list-item-title>
                      </v-list-item>

                      <v-card flat class="text-xs-center ma-3">{{descricao}}</v-card>

                      <div class="pa-1">
                        <v-btn fab text small class="pl-11">
                          <v-icon>mdi-earth</v-icon>
                          <span>{{this.private}}</span>
                        </v-btn>
                      </div>

                      <div v-if="group.admins.includes(user.id)" align="center">
                        <v-btn color="primary" @click="editarPerfil()" text>
                          <v-icon>mdi-account-edit</v-icon>
                          <span>Editar Grupo</span>
                        </v-btn>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>

            <v-card class="mx-auto ma-2" max-width="600" tile>
              <v-expansion-panels>
                <v-expansion-panel >
                  <v-expansion-panel-header>
                    <v-btn text small>
                      <v-icon>mdi-police-badge</v-icon>
                      <span>Admin</span>
                    </v-btn>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item v-for="other in otherAdmins" :key="other">
                      <v-list-item-avatar>
                        <v-img v-if="hasAvatar(other)" :src="auxiliar(other)"></v-img>
                        <v-img v-else src="../assets/default_group.png" to="/profile" link></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="headline">{{other.nome}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel v-if="this.admins.includes(user.id)">
                  <v-expansion-panel-header>
                    <v-btn text small>
                      <v-icon>mdi-wrench</v-icon>
                      <span>Manage</span>
                    </v-btn>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item v-for="req in requests" :key="req">
                      <v-list-item-avatar>
                        <v-img v-if="hasAvatar(req)" :src="auxiliar(req)"></v-img>
                        <v-img v-else src="../assets/default_group.png" to="/profile" link></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="headline">{{req.nome}}</v-list-item-title>
                      </v-list-item-content>
                      <v-btn small @click="acceptRequest(req)">Adicionar</v-btn>
                      <h5 @click="reject()" class="ma-2 text--primary" text-color="blue">Rejeitar</h5>
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-btn text small>
                      <v-icon>mdi-account-multiple</v-icon>
                      <span>Membros</span>
                    </v-btn>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list-item v-for="member in members" :key="member">
                      <v-list-item-avatar>
                        <v-img v-if="hasAvatar(member)" :src="auxiliar(member)"></v-img>
                        <v-img v-else src="../assets/default_group.png" to="/profile" link></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="headline">{{member.nome}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

    


            
 <script>
import axios from "axios";
import NavigationDrawer from "./../components/NavigationDrawer";
import Posts from './../components/Post'
import { mapGetters } from "vuex";

export default {
  components: { NavigationDrawer,Posts },
  computed: {
    ...mapGetters(["getToken"])
  },
  mounted: function() {
    const url =
      "https://api.manuelmariamoreno.pt/groups/" + this.$route.params.id;
    const url1 = "https://api.manuelmariamoreno.pt/users/user/";
    const url2 = "https://api.manuelmariamoreno.pt/users/user/";
    const url3 = "https://api.manuelmariamoreno.pt/posts/groupPosts/";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };

    axios.get(url1, config).then(dados => {
      this.user = dados.data.user;
    });
    axios.get(url, config).then(dados => {
      this.id = dados.data.id;
      this.avatar = dados.data.avatar;

      this.descricao = dados.data.descricao;
      this.admins = dados.data.admins;
      this.nome = dados.data.nome;
      axios.get(url3+this.nome, config).then(dados => {
        this.posts = dados.data;
      });
      this.private = dados.data.private;
      this.group = dados.data;
      for (var aux = 0; aux < dados.data.members.length; aux++) {
        axios.get(url1 + dados.data.members[aux], config).then(dados1 => {
          this.members.push(dados1.data.user);
        });
      }
      for (var aux1 = 0; aux1 < dados.data.requests.length; aux1++) {
        axios.get(url2 + dados.data.requests[aux1], config).then(dados2 => {
          this.requests.push(dados2.data.user);
        });
      }
      for (var aux3 = 0; aux3 < dados.data.admins.length; aux3++) {
        axios.get(url2 + dados.data.admins[aux3], config).then(dados3 => {
          this.otherAdmins.push(dados3.data.user);
        });
      }
    });
  },
  data: () => ({
    posts: [],
    group: {},
    flag: 0,
    id: "",
    nome: "",
    descricao: "",
    requests: [],
    members: [],
    avatar: "",
    private: "",
    admins: [],
    user: {},
    otherAdmins: []
  }),
  methods: {
    acceptRequest(req) {
      const url = "https://api.manuelmariamoreno.pt/groups/acceptRequest";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios
        .post(url, { groupid: this.id, memberid: req.id }, config)
        .then(() => {
          var hel = this.requests.indexOf(req);
          this.$delete(this.requests, hel);
          this.members.push(req);
        });
    },
    guardar() {
      this.flag = 0;
    },
    editarPerfil() {
      this.flag = 1;
    },
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined || i.avatar === "")
        return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "https://api.manuelmariamoreno.pt/uploads/" +
        i.id +
        "/avatar/" +
        i.avatar
      );
    },
    chooseFile() {
      document.getElementById("fileUpload").click();
    },
    uploadImage(event) {
      const url = "https://api.manuelmariamoreno.pt/users/image";
      let data = new FormData();
      data.append("image", event.target.files[0]);
      let config = {
        headers: {
          "Content-Type": "image/png",
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url, data, config);
    }
  }
};
</script>

<style>
</style>