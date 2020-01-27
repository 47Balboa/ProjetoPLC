<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <v-row :key="chunk" v-for="chunk in productChunks">
          <v-card
            raised
            width="250px"
            height="250px"
            class="ma-3 pa-3 text-align-center text-center"
            :key="i"
            v-for="i in items"
          >
            <v-col cols="12">
              <h2 @click="goToProfile(i)" align="center">{{i.nome}}</h2>
              <v-avatar @click="goToProfile(i)" class="ma-4 outline" size="100">
                <v-img v-if="hasAvatar(i)" :src="auxiliar(i)"></v-img>
                <v-img v-else src="../assets/default_avatar.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-btn color="primary" >Remover</v-btn>
            
            
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import NavigationDrawer from "./../components/NavigationDrawer";
import divider from "lodash";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    productChunks() {
      return divider.chunk(Object.values(this.items), 3);
    },
    ...mapGetters(["getToken"])
  },
  data: () => ({
    items: []
  }),
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
    },
    goToProfile(i) {
      this.$router.push({ name: "testing", params: i });
    }
  },
  components: {
    NavigationDrawer
  },
  mounted: function() {
    const url = "https://api.manuelmariamoreno.pt/users/friends";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.items = res.data;
    });
  }
};
</script>
