
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
                      <v-list-item-title class="headline">{{nome}}</v-list-item-title>
                    </v-list-item>

                    <div class="pa-1">
                      <v-icon>mdi-home</v-icon>
                      <span>Morada</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-account-card-details</v-icon>
                      <span>{{id}}</span>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-email</v-icon>
                      <span>{{email}}</span>
                    </div>

                    <div class="pa-1">
                      <v-btn
                        fab
                        text
                        small
                        class="pl-11"
                        @click.stop="modal_cadeiras =!modal_cadeiras"
                      >
                        <v-icon>mdi-notebook-multiple</v-icon>
                        <span>Cadeiras</span>
                      </v-btn>
                      <v-dialog v-model="modal_cadeiras" max-width="290">
                        <v-card>
                          <v-card-title class="headline">Cadeiras</v-card-title>

                          <v-list>
                            <v-list-item v-for="(item, i) in items" :key="i">
                              <v-list-item-content>
                                <v-list-item-title v-text="item.uc"></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-dialog>
                    </div>

                    <div>
                      <v-btn fab text small class="pl-11" @click.stop="modal_grupos =!modal_grupos">
                        <v-icon>mdi-account-group</v-icon>
                        <span>Grupos</span>
                      </v-btn>
                      <v-dialog v-model="modal_grupos" max-width="290">
                        <v-card>
                          <v-card-title class="headline">Grupos</v-card-title>

                          <v-list>
                            <v-list-item v-for="(item, i) in itemss" :key="i">
                              <v-list-item-content>
                                <v-list-item-title v-text="item.grupo"></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-dialog>
                    </div>

                    <div class="pa-1">
                      <v-icon>mdi-comment-text-outline</v-icon>

                      <span>Bio</span>
                      <v-card-text flat class="text-xs-center ma-3">
                        <div>Sou..., nasci...., nos tempos livres facço... e gosto muito de ...</div>
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
      modal_cadeiras: false,
      modal_grupos: false,
      itemss: [
        { uc: "PRI", grupo: "MIEI 4ºano" },
        { uc: "GCS", grupo: "Engenheria Informática" },
        { uc: "AA", grupo: "Bestas MIEI" }
      ],
      items:[],
      email: "",
      nome: "",
      id: "",
      user: null,
      show: false,
      links: [
        { icon: "share", text: "Share" },
        { icon: "report", text: "Report" },
        { icon: "save", text: "Save" }
      ]
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
      this.id = res.data.user.id;
      this.user = res.data.user
      this.email = res.data.user.email;
      this.src =
        "http://217.69.12.70:3061/uploads/" +
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
        i.nome +
        "/avatar/" +
        i.avatar
      );
  }
  }
};
</script>

