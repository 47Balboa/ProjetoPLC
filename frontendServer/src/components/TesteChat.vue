<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <Chat
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer";
import { Chat } from "vue-quick-chat";
import 'vue-quick-chat/dist/vue-quick-chat.css';

export default {
  components: {
    NavigationDrawer,
    Chat
  },
  data() {
    return {
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
      chatTitle: "My chat title",
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