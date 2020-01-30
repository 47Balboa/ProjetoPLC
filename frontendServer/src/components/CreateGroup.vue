<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col cols="10">
           <v-card class="elevation-12 ma-10">
          <v-toolbar color="purple" dark flat>
            <v-toolbar-title>Create Group</v-toolbar-title>
            <v-spacer />
            <v-tooltip bottom>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large target="_blank" v-on="on">
                  <v-icon>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="nome"
                id="nome"
                label="Nome"
                name="nome"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                v-model="descricao"
                id="descricao"
                label="Descricao"
                name="Descricao"
                prepend-icon="mdi-comment-text-outline"
                type="text"
              />
             <v-switch
        :success="success"
        :color="color"
        :label="`${pvt.toString()}`"
        v-model="pvt"
      ></v-switch>
            </v-form>
          </v-card-text>
        
          <v-card-actions>
            <v-spacer />
            <v-btn class="ma-6" @click="createGroup()">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row></v-container>
          </template>
<script>
import NavigationDrawer from "./../components/NavigationDrawer";
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {computed: {
    ...mapGetters(["getToken"])
},
    methods: {
        createGroup(){
            const url = "https://api.manuelmariamoreno.pt/groups/createGroup";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      let body = {
        nome: this.nome,
        descricao: this.descricao,
        private: this.pvt.toString()
      }
      axios.post(url, body, config).then(() => {
        this.$router.push('/groups')
      });
        }
    },
    components: {
        NavigationDrawer
    },
    data: () => ({
        pvt: false,
        nome: "",
        descricao: "",

    })
}
</script>