<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <div class="team">
          <h1 class="subheading grey--text ma-2">Create a Post</h1>
          <v-container class="my-5">
            <v-row dense>
              <v-col cols="12">
                <v-card elevation="12" flat class="text-xs-center ma-3">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-list-item>
                      <v-list-item-content>
                        <v-col>
                          <v-select
                            :items="tipos"
                            v-model="typeSelected"
                            label="Tipo"
                            outlined
                            return-object
                          ></v-select>
                          <v-select
                            :items="groups"
                            v-model="itemSelected"
                            label="Grupo"
                            outlined
                            return-object
                          ></v-select>
                          <v-select
                            :items="classificadores"
                            v-model="classificadorSelected"
                            label="Classificador"
                            outlined
                            return-object
                          ></v-select>
                        </v-col>
                      </v-list-item-content>

                    </v-list-item>

                    <v-textarea
                      v-model="textSent"
                      background-color="white"
                      color="black"
                      label="Post"
                      auto-grow
                      outlined
                      class="ma-2"
                    ></v-textarea>
                    <v-card-actions>
                      <v-file-input
                        v-if="typeSelected==='Simples'"
                        v-model="files"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                          >{{ text }}</v-chip>

                          <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                          >+{{ files.length - 2 }} File(s)</span>
                        </template>
                      </v-file-input>
                      <v-file-input
                        v-if="typeSelected==='Album'"
                        v-model="files"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-image-multiple"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                          >{{ text }}</v-chip>

                          <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                          >+{{ files.length - 2 }} File(s)</span>
                        </template>
                      </v-file-input>
                      <v-file-input
                        v-if="typeSelected==='Foto'"
                        v-model="files"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        
                        placeholder="Select your files"
                        prepend-icon="mdi-image"
                        outlined
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                          >{{ text }}</v-chip>

                          <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                          >+{{ files.length - 2 }} File(s)</span>
                        </template>
                      </v-file-input>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="success"
                        @click="submitToServer"
                        class="font-weight-light"
                      >Submit</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer";
import axios from "axios";
import moment from "moment";
import uuid from "uuid";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getToken"]),
  methods: {
    submitToServer() {
      const url = "http://localhost:3061/posts/addPost";
      const url2 = "http://localhost:3061/posts/addPostFiles";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      let config2 = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.getToken
        }
      };
      let onlyOne = new FormData();
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files", file);
      }
      var genId = uuid();
      onlyOne.append("file", this.files[0]);
      formData.append("id", genId);
      formData.append("author", genId);

      let post = {
        id: genId,
        grupo: this.itemSelected,
        date: moment(),
        text: this.textSent,
        classificador: this.classificadorSelected,
        contentType: this.typeSelected
      };
      axios.post(url, post, config).then(() => {
        axios.post(url2, formData, config2).then(res => {
          if (res.status === 200) {
            this.$router.push("/home");
          }
        });
      });
    }
  },
  components: {
    NavigationDrawer
  },
  mounted: function() {
    const url = "http://localhost:3061/users/user";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(dados => {
      this.groups = dados.data.user.groups
      
    });
  },
  data() {
    return {
      files: [],
      typeSelected: "Simples",
      tipos: ["Evento", "Simples", "Album", "Foto"],
      textSent: "",
      classificadorSelected: "",
      classificadores:  ["Slides","Testes/Exames","Desporto","Apontamentos"],
      itemSelected: "",
      groups: [],
      show: false,
      links: [
        { icon: "share", text: "Share" },
        { icon: "report", text: "Report" },
        { icon: "save", text: "Save" }
      ]
    };
  }
};
</script>
