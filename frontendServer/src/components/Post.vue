<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col>
        <v-container class="my-5">
          <v-row dense>
            <v-col cols="12">
              <v-card flat class="text-xs-center ma-3">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      v-if="hasAvatar(this.user)"
                      :src="auxiliar(this.user)"
                    ></v-img>
                    <v-img v-else src="../assets/default_avatar.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{
                      user.nome
                    }}</v-list-item-title>
                    <v-list-item-subtitle>{{ this.date }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-col>
                      <v-btn text small>
                        <v-icon>mdi-play</v-icon>
                        <span>{{ post.grupo }}</span>
                      </v-btn>
                    </v-col>
                  </v-list-item-content>

                  <v-spacer></v-spacer>

                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn fab text small v-on="on">
                        <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item v-for="link in links" :key="link.text">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item>

                <v-textarea
                  background-color="white"
                  color="black"
                  def
                  v-model="this.post.text"
                  disabled
                  auto-grow
                  outlined
                ></v-textarea>
                <v-card-actions>
                  <h4 class="ma-0">{{ this.post.likes }}</h4>
                  <v-btn @click="addLike(i)" fab text small>
                    <v-icon color="pink">mdi-heart</v-icon>
                  </v-btn>
                  <v-span>Like</v-span>
                  <v-btn fab text small @click="show = !show">
                    <v-icon color="grey">mdi-comment</v-icon>
                  </v-btn>
                  <v-span>Comment</v-span>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                      <div class="px-4">
                        <v-text-field
                          class="questrial"
                          height="45px"
                          background-color="grey lighten-3"
                          append-icon="mdi-camera "
                          placeholder="Write a comment..."
                          rounded
                        ></v-text-field>
                      </div>
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapGetters(["getToken"])
  },
  mounted: function() {
    const url = "http://localhost:3061/users/user/" + this.post.author;
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(dados => {
      this.user = dados.data.user;
      moment.locale();
    
      this.date = moment(this.post.date).format("MMM D , h:mm a");
    });
  },
  methods: {
    addLike(i) {
      if (!this.userLikes.includes(i.id)) {
        const url = "http://localhost:3061/users/user/" + this.post.author;
        let config = {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
        };
        
        axios.post(url, config).then(() => {
          this.userLikes.push(i.id)
        });

        
      }
    },
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "http://217.69.12.70:3061/uploads/" + i.nome + "/avatar/" + i.avatar
      );
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userLikes: [],
      user: {},
      date: "",
      show: false,
      links: [
        { icon: "share", text: "Share" },
        { icon: "report", text: "Report" },
        { icon: "save", text: "Save" }
      ]
    };
  }
};
</script>
