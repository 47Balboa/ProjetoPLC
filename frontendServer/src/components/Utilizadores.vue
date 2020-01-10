<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <v-row>
          <v-card
            raised
            width="250px"
            height="250px"
            class="ma-3 pa-3 text-align-center text-center"
            :key="i"
            v-for="i in items"
          >
            <v-col cols="12">
              <h2 align="center">{{i.nome}}</h2>
              <v-avatar class="ma-4 outline" size="100">
                <v-img v-if="hasAvatar(i)" :src="auxiliar(i)"></v-img>
                <v-img v-else src="../assets/default_avatar.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-btn v-if="hasSent(i.id)" color="success" @click="sendRequest(i)">Adicionar</v-btn>
            <v-btn v-else disabled color="grey"> Adicionado </v-btn>
            
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import NavigationDrawer from "./../components/NavigationDrawer";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getToken"]),
    ...mapGetters(["getId"])
  },
  data: () => ({
    items: [],
    sentRequests: []
  }),
  methods: {
    hasSent(friendid){
      if(this.sentRequests.length == 0){
        return true
      }
      else {
        for(var i = 0; i<this.sentRequests.length;i++)
          if(this.sentRequests[i] === friendid)
            return false
        
        return true
      }
    },
    sendRequest(i) {
      const url = "http://localhost:3061/users/sendRequest";

      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url,{friendid: i},config)
      this.$forceUpdate
    },
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return "http://localhost:3061/uploads/" + i.nome + "/avatar/" + i.avatar;
    }
  },
  components: {
    NavigationDrawer
  },
  mounted: function() {
    const url = "http://localhost:3061/users";

    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.items = res.data.data.filter(function(item){
        return item.id !== res.data.user.id
      })
      if(res.data.user.sentFriendRequests.length !==0)
        this.sentRequests = res.data.user.sentFriendRequests
    });
  }
};
</script>

<style scoped>
.v-avatar.outline {
  border: 1px;
  border-radius: 50%;
}
</style>
