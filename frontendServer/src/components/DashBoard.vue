<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <div class="newC">
            <v-card-title class="headline">Unlimited music now</v-card-title>
          </div>

          <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>Adicionar Post</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
               <v-avatar  class="ma-3 left" size="125" tile>
              <v-img  :src="item.src"></v-img>
            </v-avatar> 

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

           
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "utilizador",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "asdfsdf",
        artist: "Professor "
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ]
  })
};
</script>
<style scoped>
.newC{
  height: 30%;
  background-color: red;
}
</style>