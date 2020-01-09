<template>
  <v-row min-height="100%" class="mb-0">
    <v-col class="pa-0" cols="8" lg="2">
      <NavigationDrawer />
    </v-col>
    <v-col>
      <v-layout justify-center class="pa-10">
      <v-flex justify-center xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="200">
            <img :src="src" />
          </v-avatar>
          <v-card-text class="text-center">
            <h5 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h5>
            <h1 class="card-title font-weight-bold ma-3">{{name}}</h1>
            <p
              class="card-description font-weight-light"
            >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn color="success" @click="chooseFile()" class="font-weight-light">UploadIMa</v-btn>
             <input
                    class="mx-0 font-weight-light"
                    type="file"
                    accept="image/*"
                    @change= "uploadImage($event)"
                    id="fileUpload"
                    hidden
                  >
          </v-card-text>
        </material-card>
      </v-flex>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import NavigationDrawer from "./../components/NavigationDrawer";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getToken"]),
  data:()=>({
    name: "",
    idA: "",
    curso: "",
    src: "scene"
  }),
  components: {
    NavigationDrawer
  },
  mounted: function() {
     const url = "http://localhost:3061/users/user";
     
     let config = {
        headers: {
          Authorization:
            "Bearer " +
            this.getToken
            }
     }
     axios.get(url,config).then(res => {
       this.name = res.data.user.nome;
       this.idA = res.data.user.id;
       this.curso = res.data.user.curso;
       this.src = "http://localhost:3061/uploads/" + res.data.user.nome + '/avatar/' + res.data.user.avatar 
     })
    

  },
  methods: {
    chooseFile(){
      document.getElementById("fileUpload").click()
    },
    uploadImage(event) {
      const url = "http://localhost:3061/users/image";
      let data = new FormData();
      data.append("image", event.target.files[0]);
      let config = {
        headers: {
          "Content-Type": "image/png",
          Authorization:
            "Bearer " +
            this.getToken
            }
      };
      axios.post(url, data, config);
    }
  }
};
</script>