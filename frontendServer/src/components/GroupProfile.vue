<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
     <v-row>
       <v-col />
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

                  <v-card
                    flat
                    class="text-xs-center ma-3"
                  >{{descricao}}</v-card>

                  <div class="pa-1">
                    <v-btn fab text small class="pl-11">
                      <v-icon>mdi-earth</v-icon>
                      <span>{{this.private}}</span>
                    </v-btn>
                  </div>

                  <div align="center">
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
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-btn text small>
                  <v-icon>mdi-police-badge</v-icon>
                  <span>Admin</span>
                </v-btn>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list-item>
                  <v-list-item-avatar>
                    <img src="/Saitama.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">Saitama</v-list-item-title>
                  </v-list-item-content>
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
                <v-list-item>
                  <v-list-item-avatar>
                    <img src="/Saitama.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">Saitama</v-list-item-title>
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
import { mapGetters } from "vuex";

export default {
  components: {NavigationDrawer},
  computed: {
    ...mapGetters(["getToken"])
  },
  mounted: function() {
  const url = "http://localhost:3061/groups/"+this.$route.params.id;
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          this.getToken
      }
    };
    axios.get(url,config).then(dados=>{
      this.id = dados.data.id
      this.avatar = dados.data.avatar
      this.members = dados.data.members
      this.descricao = dados.data.descricao
      this.admins = dados.data.admins
      this.nome = dados.data.nome
      this.private = dados.data.private
      this.group = dados.data
      
    })
  },
  data: () => ({
    group: {},
    flag: 0,
    id: "",
    nome: "",
    descricao: "",
    members: [],
    avatar: "",
    private: "",
    admins: [],

  }),
  methods: {
    guardar() {
      this.flag = 0;
    },
    editarPerfil() {
      this.flag = 1;
    },
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined || i.avatar === "") return false;
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