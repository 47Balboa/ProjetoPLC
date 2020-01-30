<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar color="purple" dark flat>
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>
          <v-card-text font="arial">
            <div>Welcome to ClassBin!</div>
            <div>To register just submit a file with the following structure:</div>
            <div>[----------- not included]</div>
            <div>--------------------------------------------------------------------------------</div>
            <div>[YourStudentID]</div>
            <div>Nome: "YourFirstName"</div>
            <div>Apelido: "YourLastName"</div>
            <div>DataNascimento: DD-MM-YYYY</div>
            <div>Morada: "YourAddress"</div>
            <div>Email: "YourEmail"</div>
            <div>Curso: "YourCourse"</div>
            <div>Cadeiras: "Class1Initials"[;"Class2Initials";...].</div>
            <div>Password: "YourPassword"</div>
            <div>--------------------------------------------------------------------------------</div>
            <div>It is required to disclose at least one class, preferably insert all of them. Every field is required.</div>
            
          </v-card-text>
          <div align="center">
            <v-btn color="success" @click="chooseFile()" class="font-weight-light">Upload File</v-btn>
            <input
              class="mx-0 font-weight-light"
              type="file"
              @change="uploadFile($event)"
              id="fileUpload"
              hidden
            />
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
    uploadFile(event) {
      const url = "http://localhost:3061/users/registerFile";
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
