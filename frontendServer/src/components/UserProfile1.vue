
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
              <Post :post="i"/>
            </div>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="600" tile>
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
                      <span> {{id}}</span>
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
                        <v-btn text class="grey">
                          <v-icon>mdi-account-edit</v-icon>
                          <span>Adicionar</span>
                        </v-btn>
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
import NavigationDrawer from './NavigationDrawer'
import Post from './Post'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(["getToken"])
  },
  components: {
    NavigationDrawer,
    Post
  },
  data() {
    return {
      items:[],
      email: "",
      nome: "",
      id: "",
      user: null
    };
  },
  mounted: function() {

    const url = "https://api.manuelmariamoreno.pt/users/user/"+this.$route.params.id;
    const url1 = "https://api.manuelmariamoreno.pt/posts/user/"+this.$route.params.id;
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          this.getToken
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
      this.id = res.data.user.id;

      this.src =
        "https://api.manuelmariamoreno.pt/uploads/" +
        res.data.user.nome +
        "/avatar/" +
        res.data.user.avatar;
    });
 
     axios.get(url1,config).then(dados => {
       this.items = dados.data
       
       
     })
    
  },
  methods: {
     hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "https://api.manuelmariamoreno.pt/uploads/" +
        i.id +
        "/avatar/" +
        i.avatar
      );
  }
  }
};
</script>

