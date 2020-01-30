<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card v-if="this.flag==0">
          <v-select
            :items="classifiers"
            v-model="classifierSelected"
            label="Classificador"
            outlined
            single
            return-object
          ></v-select>
          <v-btn color="success" @click="filtra()" class="font-weight-light">Filtrar</v-btn>
          <div v-for="i in items" :key="i">
            <Post :post="i" />
          </div>
        </v-card>
        <v-card v-else>
          <v-select
            :items="classifiers"
            v-model="classifierSelected"
            label="Classificador"
            outlined
            single
            return-object
          ></v-select>
        <v-card-actions>
          <v-btn color="success" @click="filtra()" class="font-weight-light">Filtrar</v-btn>
          <v-spacer />
          <v-btn color="primary" @click="exit()" class="font-weight-light">Back</v-btn>
        </v-card-actions>
          <div v-for="i in itemsFiltered" :key="i">
            <Post :post="i" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from "./Post.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(["getToken"])
  },
  components: {
    Post
  },
  data: () => ({
    classifierSelected: "",
    classifiers: ["Slides","Testes/Exames","Desporto","Apontamentos", "None"],
    items: [],
    itemsFiltered: [],
    flag: 0
  }),
  mounted: function() {
    const url = "https://api.manuelmariamoreno.pt/posts";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(dados => {
      this.items = dados.data;
    });
  },
  methods: {
    filtra() {
      if(this.classifierSelected != "" ){
        this.items.forEach(element => {
          if(this.classifierSelected === "None"){
            if(element.classificador === undefined || element.classificador === "")
              this.itemsFiltered.push(element)
          }
          else {
            if(element.classificador === this.classifierSelected)
            this.itemsFiltered.push(element)
          }
        })
      }
      this.flag = 1;
    },
    exit() {
      this.itemsFiltered = [],
      this.classifierSelected = "",
      this.flag = 0
    }
  }
};
</script>
<style scoped>
.newC {
  height: 30%;
  background-color: red;
}
</style>