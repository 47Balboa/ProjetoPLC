<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar color="purple" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
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
                v-model="email"
                id="email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="text"
              />
              <v-text-field
                v-model="nome"
                id="nome"
                label="Nome"
                name="nome"
                prepend-icon="mdi-account"
                type="text"
              />
              <v-text-field
                v-model="id"
                id="id"
                label="Numero aluno"
                name="id"
                prepend-icon="mdi-email"
                type="text"
              />
              <v-select
                :items="items"
                v-model="itemsSelected"
                label="Grupos"
                outlined
                multiple
                return-object
              ></v-select>
              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                type="password"
                prepend-icon="mdi-lock"
              />
            </v-form>
          </v-card-text>
          <div align="center">
            
          </div>
          <v-card-actions>
            
            <v-spacer />
            <v-btn @click="submit()">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import Socket from "../store/modules/socket";

export default {
  data() {
    return {
      email: "",
      password: "",
      nome: "",
      id: "",
      itemsSelected: [],
      items: ["PRI", "GCS"]
    };
  },
  methods: {
    chooseFile() {
      document.getElementById("fileUpload").click();
    },
    uploadImage(event) {
      const url = "https://api.manuelmariamoreno.pt/users/registerFile";
      let data = new FormData();
      data.append("file", event.target.files[0]);
      let config = {
        headers: {
          "Content-Type": "multipart/formdata"
        }
      };
      axios.post(url, data, config).then(res => {
        if (res.status === 200) {
          this.$router.push("/");
        } else {
          this.$router.push("/register");
        }
      });
    },
    ...mapMutations(["setToken"]),
    submit() {
      Socket.send("mensagem");
      axios
        .post("https://api.manuelmariamoreno.pt/users/register", {
          id: this.id,
          nome: this.nome,
          email: this.email,
          password: this.password,
          groups: this.itemsSelected
        })
        .then(response => {
          switch (response.status) {
            case 200:
              this.setToken(response.data.token);
              this.$root.$emit("entered");
              this.$router.push("/home");
              break;
            default:
              this.$router.push("/");
          }
        });
    }
  }
};
</script>
