<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <v-row>
          <v-col class="pa-0">
            <Chat
              v-if="flag"
              :participants="participants"
              :myself="myself"
              :messages="messages"
              :on-type="onType"
              :on-message-submit="onMessageSubmit"
              :chat-title="chatTitle"
              :placeholder="placeholder"
              :colors="colors"
              :border-style="borderStyle"
              :hide-close-button="hideCloseButton"
              :close-button-icon-size="closeButtonIconSize"
              :on-close="onClose"
              :submit-icon-size="submitIconSize"
              :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
              :async-mode="asyncMode"
              :scroll-bottom="scrollBottom"
            />
            <v-card v-else>
              <h1>Choose a conversation</h1>
            </v-card>
          </v-col>
          <v-col cols="3" class="ma-0 pa-0">
            <v-row>
              <v-col>
                <v-list>
                  <v-list-item v-for="u in users" :key="u">
                    <v-card @click="change(u)" class="mx-auto" max-width="344" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-4">{{Offline}}</div>
                          <v-list-item-title class="headline mb-1">{{u.nome}}</v-list-item-title>
                          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-avatar size="80">
                          <v-img v-if="hasAvatar(u)" :src="auxiliar(u)"></v-img>
                          <v-img v-else src="../assets/default_avatar.jpg" to="/profile" link></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                    </v-card>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer";
import { Chat } from "vue-quick-chat";
import { mapGetters } from "vuex";
import axios from "axios";
import "vue-quick-chat/dist/vue-quick-chat.css";

export default {
  components: {
    NavigationDrawer,
    Chat
  },
  mounted: function() {
    const url = "http://217.69.12.70:3061/users/friends";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.users = res.data;
    });
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  methods: {
        hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "http://217.69.12.70:3061/uploads/" + i.nome + "/avatar/" + i.avatar
      );
    },
    change(u){
      const url = "http://217.69.12.70:3061/users/getMessage";
      let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.post(url,{friendid: u.id},config).then(dados => {
      this.participants = [{
        name: u.nome,
        id: u.id,
      }]
      this.myself = {
        name: dados.data.usr.nome,
        id: dados.data.usr.id
      }
      this.user = u
      this.messages = dados.data.messages
      this.chatTitle = u.name
      this.flag = 1
    })
    }
  },
  data() {
    return {
      onMessageSubmit: message => {

        const url = "http://217.69.12.70:3061/users/sendMessage";
        let config = {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
        };

        axios.post(url,{message: message,pid: this.user.id}, config);
      },
      onType: e => {
        // eslint-disable-next-line no-console
        console.log("message " + e);
      },
      user: null,
      flag: false,
      visible: true,
      participants: [
        {
          name: "Arnaldo",
          id: 1
        },
        {
          name: "José",
          id: 2
        }
      ],
      myself: {
        name: "Matheus S.",
        id: 3
      },
      messages: [
        {
          content: "received messages",
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2019,
            month: 3,
            day: 5,
            hour: 20,
            minute: 10,
            second: 3,
            millisecond: 123
          }
        },
        {
          content: "sent messages",
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2019,
            month: 4,
            day: 5,
            hour: 19,
            minute: 10,
            second: 3,
            millisecond: 123
          }
        },
        {
          content: "other received messages",
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2019,
            month: 5,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123
          }
        }
      ],
      chatTitle: "",
      placeholder: "send your message",
      colors: {
        header: {
          bg: "#d30303",
          text: "#fff"
        },
        message: {
          myself: {
            bg: "#fff",
            text: "#bdb8b8"
          },
          others: {
            bg: "#fb4141",
            text: "#fff"
          },
          messagesDisplay: {
            bg: "#f7f3f3"
          }
        },
        submitIcon: "#b91010"
      },
      borderStyle: {
        topLeft: "10px",
        topRight: "10px",
        bottomLeft: "10px",
        bottomRight: "10px"
      },
      hideCloseButton: false,
      submitIconSize: "30px",
      closeButtonIconSize: "20px",
      asyncMode: false,
      users: [],
      toLoad: [
        {
          content: "Hey, John Doe! How are you today?",
          myself: false,
          participantId: 2,
          timestamp: {
            year: 2011,
            month: 3,
            day: 5,
            hour: 10,
            minute: 10,
            second: 3,
            millisecond: 123
          },
          uploaded: true,
          viewed: true
        },
        {
          content: "Hey, Adam! I'm feeling really fine this evening.",
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2010,
            month: 0,
            day: 5,
            hour: 19,
            minute: 10,
            second: 3,
            millisecond: 123
          },
          uploaded: true,
          viewed: true
        }
      ],
      scrollBottom: {
        messageSent: true,
        messageReceived: false
      }
    };
  }
};
</script>