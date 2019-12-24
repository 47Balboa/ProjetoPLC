<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
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
                id="email"
                label="Email"
                name="email"
                prepend-icon="person"
                type="text"
              />

              <v-text-field id="password" label="Password" name="password" type="password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="testing()" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setToken"]),
    submit() {
      axios
        .post("http://localhost:3061/users/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          switch (response.data.status) {
            case 200:
              this.setToken(response.data.token);
              this.$router.push("/home");
              break;
            default:
              this.$router.push("login");
          }
        });
    },
    testing() {
        axios.get("http://localhost:3061/users").then(response => {
          switch (response.data.status) {
            case 200:
              this.$router.push("/home");
              break;
            default:
              this.$router.push("login");
          }
        });
    }
  }
};
</script>