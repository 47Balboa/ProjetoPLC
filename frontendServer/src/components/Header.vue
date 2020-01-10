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
            
             <v-divider
          class="ma-3"
          :inset="inset"
          vertical
        ></v-divider>

            <v-btn x-small @click="acceptRequest(item)">Adicionar</v-btn>
            <h5 @click="reject()" class="ma-1 text--primary" text-color="blue">Rejeitar</h5>

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
    getFriendsRequests(){
      const url = "http://localhost:3061/users/getFriendsRequests";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res =>{
      this.items = res.data
      
    })},
    acceptRequest(i) {
      const url = "http://localhost:3061/users/acceptRequest";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url,{friendid: i}, config).then(()=> {
        this.getFriendsRequests();
      });
    },  hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return "http://localhost:3061/uploads/" + i.nome + "/avatar/" + i.avatar;
    }
  },
  mounted: function(){
    const url = "http://localhost:3061/users/getFriendsRequests";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res =>{
      this.items = res.data.filter(function(item){
        return item.id !== res.data
      })
    })
  },
  name: "Header",
  data: () => ({
    number: 0,
    var1: [],
    items: []
  })
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>