<template>
  <div>
    <v-app-bar app src="../assets/background-header.jpg" color="deep-purple accent-4">
      <router-link to="/">
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
      <v-menu
        :close-on-content-click="false"
        :absolute="absolute"
        :open-on-hover="openOnHover"
        :offset-x="offsetX"
        :offset-y="offsetY"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">

            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            
            <v-list-item-content>
              <v-list-item-title v-text="item.nome"></v-list-item-title>
            </v-list-item-content>

            <v-btn x-small @click="getRequests()">Adicionar</v-btn>
            <h6 @click="reject()" class="ma-1 text--primary" text-color="blue">Rejeitar</h6>

          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn to="/login">
        <span>Sign In</span>
        <v-icon>mdi-login</v-icon>
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
    getRequests() {
      const url = "http://localhost:3061/users";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.get(url, config).then(res => {
        this.var1 = res.data;
      });
    }
  },
  name: "Header",
  data: () => ({
    number: 0,
    var1: [],
    items: [
      {
        title: "John    dssdsss Mike",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      }
    ]
  })
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>