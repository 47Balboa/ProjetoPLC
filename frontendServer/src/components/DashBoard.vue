<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
      <div v-for="i in items" :key="i">
       <Post :post="i"/>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from './Post.vue'
import {mapGetters} from 'vuex'
import axios from 'axios'

export default {

  computed: {
    ...mapGetters(['getToken'])
  },
  components: {
    Post
  },
  data: () => ({
    items: [
    ]
  }),
  mounted: function() {
    const url = "http://localhost:3061/posts";
    let config = {
        headers: {
          Authorization:
            "Bearer " +
            this.getToken
            }
     }
     axios.get(url,config).then(dados => {
       this.items = dados.data
       
     })

  },
};
</script>
<style scoped>
.newC{
  height: 30%;
  background-color: red;
}
</style>