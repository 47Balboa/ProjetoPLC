<template>
  <div>
    <v-app-bar app src="../assets/background-header.jpg" color="deep-purple accent-4">
      <router-link to="/home">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>
      <router-link class="toolbar-title" to="/">
        <v-toolbar-title style="font-size:2em">ClassBin</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="user.length===0" />
      <v-menu
        v-else
        :close-on-content-click="false"
        :absolute="absolute"
        :open-on-hover="openOnHover"
        :offset-x="offsetX"
        :offset-y="offsetY"
      >
        <template v-slot:activator="{ on }">
          <v-btn @click="getFriendsRequests" color="primary" dark v-on="on">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-avatar>
              <v-img v-if="hasAvatar(item)" :src="auxiliar(item)"></v-img>
              <v-img v-else src="../assets/default_avatar.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.nome"></v-list-item-title>
            </v-list-item-content>

            <v-divider class="ma-3" :inset="inset" vertical></v-divider>

            <v-btn x-small @click="acceptRequest(item,index)">Adicionar</v-btn>
            <h5 @click="reject()" class="ma-1 text--primary" text-color="blue">Rejeitar</h5>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-if="user.length===0" to="/login">
        <span>Sign In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-avatar class="ma-2" v-else size="40" to="/profile" link>
        <v-img v-if="hasAvatar(user[0])" :src="auxiliar(user[0])"></v-img>
        <v-img v-else src="../assets/default_avatar.jpg" to="/profile" link></v-img>
      </v-avatar>
      <h2 class="newsl" to="/profile" link v-if="user.length!==0">{{user[0].nome}}</h2>
      <v-btn class="ma-2" v-if="user.length!==0" to="/login">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getToken"])
  },

  methods: {
    getFriendsRequests() {
      const url = "http://217.69.12.70:3061/users/getFriendsRequests";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.get(url, config).then(res => {
        return (this.items = res.data);
      });
    },
    acceptRequest(i, index) {
      const url = "http://217.69.12.70:3061/users/acceptRequest";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url, { friendid: i }, config).then(() => {
        this.$delete(this.items, index);
      });
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
  mounted: function() {
    this.$root.$on("entered", () => {
      const url = "http://217.69.12.70:3061/users/user";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.get(url, config).then(res => {
        this.user.push(res.data.user);
        // eslint-disable-next-line no-console
        console.log("asdfasdf   " + JSON.stringify(res.data));
      });
    });
    const url = "http://217.69.12.70:3061/users/getFriendsRequests";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.items = res.data.filter(function(item) {
        return item.id !== res.data;
      });
      // eslint-disable-next-line no-console
    });
  },
  name: "Header",
  data: () => ({
    number: 0,
    var1: [],
    items: [],
    user: []
  })
};
</script>

<style scoped>
.newsl {
  color: whitesmoke;
}
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>