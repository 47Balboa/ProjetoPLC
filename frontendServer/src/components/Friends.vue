<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
 <v-row no-gutters>
   <v-col cols="2">
     <NavigationDrawer/>
   </v-col>
   <v-col>
        
        <v-row :key="chunk" v-for="chunk in productChunks">
          <v-card width="200px" height="200px" class="ma-3 text-center" :key="i" v-for="i in items">
            <v-card-title class="headline">{{i.nome}}</v-card-title>
            <v-avatar size="100" >
              <v-img :src="auxiliar(i)"></v-img>
            </v-avatar>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  
</template>


<script>
import NavigationDrawer from "./../components/NavigationDrawer";
import divider from "lodash";
import axios from 'axios';
import { mapGetters } from "vuex";

export default {
  computed: {
    productChunks() {
      return divider.chunk(Object.values(this.items), 3);
    },
    ...mapGetters(["getToken"]),
  },
  data: () => ({
    items: []
  }),methods:{
    auxiliar(i){
      return "http://217.69.12.70:3061/uploads/" + i.nome + '/avatar/' + i.avatar
    }
  },
  components: {
    NavigationDrawer
  },
  mounted: function() {
     const url = "http://217.69.12.70:3061/users/friends";
     let config = {
        headers: {
          Authorization:
            "Bearer " +
            this.getToken
            }
     }
     axios.get(url,config).then(res => {
      this.items = res.data
     })

  },
};
</script>
