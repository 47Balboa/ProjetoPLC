
<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="600" tile>
          <v-img class="pa-4" height="100%" src="/capa2.png">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="150" roundtile>
                  <v-img height="100%" src="/Saitama.png"></v-img>
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
                  <v-btn fab text small class="pl-11" @click.stop="modal_cadeiras =!modal_cadeiras">
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
                        <v-list-item v-for="(item, i) in items" :key="i">
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
                      <span>Editar Perfil</span>
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-row>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="8">
      
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      modal_cadeiras: false,
      modal_grupos: false,
      items: [
        { uc: "PRI", grupo: "MIEI 4ºano" },
        { uc: "GCS", grupo: "Engenheria Informática" },
        { uc: "AA", grupo: "Bestas MIEI" }
      ],

      email: "",
      nome: "",
      id: "",
      show: false,
      links: [
        { icon: "share", text: "Share" },
        { icon: "report", text: "Report" },
        { icon: "save", text: "Save" }
      ]
    };
  },
  mounted: function() {
    const url = "http://api.manuelmariamoreno.pt/users/user";

    let config = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBvc3RzIjpbXSwic2VudEZyaWVuZFJlcXVlc3RzIjpbXSwiZnJpZW5kcyI6WyIxMTExIiwiT2xhIl0sImZyaWVuZHNSZXF1ZXN0cyI6W10sImNvbW1lbnRzIjpbXSwiX2lkIjoiNWUyNWMwNWMzMWZkNmI2MjA1MDdiZTNmIiwiaWQiOiIxMjEiLCJub21lIjoiTWlndWVsIiwiZW1haWwiOiJNaWd1ZWwiLCJwYXNzd29yZCI6IiQyYSQwNiRPS0REMVIycnouM2NmbUs3RVVSeHBlM0VkeVhUYnk3LjVzN000WThQajRhLjRKNW1zN2RkbSIsIl9fdiI6NCwiYXZhdGFyIjoiTWlndWVsNWIzNDhjNmYtNTBhNC00YWM3LWIwM2EtN2QwYmY3ZWJjNzFiLnBuZyJ9LCJpYXQiOjE1Nzk3MTQ2MTIsImV4cCI6MTU3OTcyMTgxMn0.GPXARnmKZ8S5KjXutwRnjrGGRovXJjSFgIcjIOYkDB7xVMRSbRfbgKzebo-Vs3h0jhkYgraai6jRXNmhBRQbfQ"
      }
    };
    axios.get(url, config).then(res => {
      this.nome = res.data.user.nome;
      this.id = res.data.user.id;
      this.email = res.data.user.email;
      this.src =
        "http://217.69.12.70:3061/uploads/" +
        res.data.user.nome +
        "/avatar/" +
        res.data.user.avatar;
    });
  }
};
</script>

