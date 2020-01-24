<template>
<v-container>
  <v-row>
    <v-col cols="4" md="4" lg="4">
      <NavigationDrawer/>
    </v-col>
    <v-col>
  <v-container>
    <v-row>
      <v-col col="12" md="10" lg="10">
        <v-card>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-textarea outlined name="input-7-4" label="Description" value="Write here WELELELE"></v-textarea>
            <v-btn color="success" @click="chooseFile()" class="font-weight-light">UploadIMa</v-btn>
            <input
              type="file"
              accept="audio/*,video/*,image/*,media_type"
              @change="uploadFile"
              id="fileUpload"
              hidden
              multiple
            />
            <v-list>
              <v-list-item v-for="i in files" :key="i">
                <v-list-item-subtitle>{{files}} </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import NavigationDrawer from './NavigationDrawer'

export default {
  components: {
    NavigationDrawer
  },
  methods:{
    chooseFile(){
      document.getElementById("fileUpload").click()
    },
    uploadFile(event){
      
      
      if(this.files == null){
        var list = event.target.files
        this.files = list
      }
      else this.files.push(event.target.files)
    }
  },
  data() {
    return {
      count: 0,
      files: ["uma string", "duas"],
    };
  }
};
</script>