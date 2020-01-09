<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card class="elevation-12">
          <v-toolbar color="purple" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
            <v-tooltip bottom>
              <template v-slot:activator="{ on }"></template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/pMvGQO"
                  target="_blank"
                  v-on="on"
                >
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
                v-model="password"
                id="password"
                label="Password"
                name="password"
                type="password"
                prepend-icon="mdi-lock"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit()" color="purple">Login</v-btn>
            <v-spacer />
            <v-btn to="/register">Sign Up</v-btn>
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
      password: ""
    };
  },
  methods: {
    ...mapMutations(["setToken"]),
    submit() {
      Socket.send("mensagem");
      axios
        .post("http://localhost:3061/users/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          switch (response.status) {
            case 200:
              this.setToken(response.data.token);
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