<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="8">
            <div v-for="i in items" :key="i">
              <Post :post="i" />
            </div>
          </v-col>
          <v-col cols="4">
            <v-card v-if="this.flag===0" class="mx-auto" max-width="600" tile>
              <v-img class="pa-4" height="100%" src="/capa2.png">
                <v-row align="center" class="fill-height">
                  <v-col align-content="center" class="pa-0" cols="12">
                    <v-avatar class="profile align-center" color="grey" size="150" roundtile>
                      <v-img v-if="hasAvatar(user)" :src="auxiliar(user)"></v-img>
                      <v-img v-else src="../assets/default_avatar.jpg" to="/profile" link></v-img>
                    </v-avatar>
                  </v-col>
                  <v-card flat class="text-xs-center ma-3">
                    <v-list-item>
                      <v-list-item-title class="headline">{{nome}} {{apelido}}</v-list-item-title>
                    </v-list-item>

                    <div class="pa-1">
                      <v-icon>mdi-home</v-icon>
                      <span> {{morada}}</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-calendar</v-icon>
                      <span> {{dataNasc}}</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-account-card-details</v-icon>
                      <span> {{this.user.id}}</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-email</v-icon>
                      <span> {{email}}</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-school</v-icon>
                      <span> {{curso}}</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-comment-text-outline</v-icon>
                      <span>Biografia</span>
                      <v-card-text flat class="text-xs-center ma-3">
                        <span> {{bio}}</span>
                      </v-card-text>
                      <div align="center">
                        <v-btn color="primary" @click="editarPerfil()">Editar Perfil</v-btn>

                        <v-btn
                          color="success"
                          @click="chooseFile()"
                          class="font-weight-light"
                        >Upload Avatar</v-btn>
                        <input
                          class="mx-0 font-weight-light"
                          type="file"
                          accept="image/*"
                          @change="uploadImage($event)"
                          id="fileUpload"
                          hidden
                        />
                      </div>
                    </div>
                  </v-card>
                </v-row>
              </v-img>
            </v-card>
            <v-card v-else class="mx-auto" max-width="600" tile>
              <v-img class="pa-4" height="100%" src="/capa2.png">
                <v-row align="center" class="fill-height">
                  <v-col align-content="center" class="pa-0" cols="12">
                    <v-avatar class="profile align-center" color="grey" size="150" roundtile>
                      <v-img v-if="hasAvatar(user)" :src="auxiliar(user)"></v-img>
                      <v-img v-else src="../assets/default_avatar.jpg" to="/profile" link></v-img>
                    </v-avatar>
                  </v-col>
                  <v-card flat class="text-xs-center ma-3">
                    <v-text-field
                      v-model="nome"
                      id="nome"
                      label="Nome"
                      name="nome"
                      prepend-icon="mdi-account"
                      type="text"
                    />
                    <v-text-field
                      v-model="apelido"
                      id="apelido"
                      label="Apelido"
                      name="apelido"
                      prepend-icon="mdi-account"
                      type="text"
                    />
                    <v-text-field
                      v-model="morada"
                      id="morada"
                      label="Morada"
                      name="morada"
                      prepend-icon="mdi-home"
                      type="text"
                    />
                    <v-text-field
                      v-model="dataNasc"
                      id="dataNas"
                      label="Data Nascimento(DD-MM-YYYY)"
                      name="dataNasc"
                      prepend-icon="mdi-calendar"
                      type="text"
                    />
                    <v-text-field
                      v-model="email"
                      id="email"
                      label="Email"
                      name="email"
                      prepend-icon="mdi-email"
                      type="text"
                    />
                    <v-text-field
                      v-model="curso"
                      id="curso"
                      label="Curso"
                      name="curso"
                      prepend-icon="mdi-school"
                      type="text"
                    />
                    <v-text-field
                      v-model="bio"
                      id="bio"
                      label="Biografia"
                      name="bio"
                      prepend-icon="mdi-comment-text-outline"
                      type="text"
                    />

                    <div class="pa-1">
                      <div align="center">
                        <v-btn color="primary" @click="guardar()">Guardar</v-btn>
                      </div>
                    </div>
                    
                  </v-card>
                </v-row>
              </v-img>
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
import Post from "./../components/Post";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  computed: mapGetters(["getToken"]),
  data: () => ({
    name: "",
    apelido: "",
    bio: "Olá!",
    id: "",
    email: "",
    morada: "",
    dataNasc: "",
    curso: "",
    flag: 0,
    date: moment(),
    items: []
  }),
  components: {
    Post,
    NavigationDrawer
  },
  mounted: function() {
    const url = "https://api.manuelmariamoreno.pt/users/user";

    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.nome = res.data.user.nome;
      this.apelido = res.data.user.apelido;
      this.dataNasc = res.data.user.dataNasc;
      this.email = res.data.user.email;
      this.morada = res.data.user.morada;
      this.curso = res.data.user.curso;
      this.bio = res.data.user.bio;
      this.user = res.data.user;
      this.src =
        "https://api.manuelmariamoreno.pt/uploads/" +
        res.data.user.nome +
        "/avatar/" +
        res.data.user.avatar;
      const url1 =
        "https://api.manuelmariamoreno.pt/posts/user/" + this.user.id;
      axios.get(url1, config).then(dados => {
        this.items = dados.data;
      });
    });
  },
  methods: {
    guardar() {
      const url = "http://localhost:3061/users/" + this.user.id;
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.put(url, {
          _id: this.user._id,
          id: this.user.id,
          nome: this.nome,
          apelido: this.apelido,
          email: this.email,
          password: this.user.password,
          curso: this.curso,
          avatar: this.user.avatar,
          groups: this.user.groups,
          dataNasc: this.dataNasc,
          morada: this.morada,
          sentFriendRequests: this.user.sentFriendRequests,
          friendRequests: this.user.friendRequests,
          friends: this.user.friends,
          comments: this.user.comments,
          likes: this.user.likes,
          bio: this.bio
        }, config)
      .then(dados =>{
        if(dados.status == 200)
          this.$router.push("/profile");
      })
      this.flag = 0;
    },
    editarPerfil() {
      this.flag = 1;
    },
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "https://api.manuelmariamoreno.pt/uploads/" +
        i.nome +
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