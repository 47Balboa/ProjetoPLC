<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="3">
        <NavigationDrawer />
      </v-col>
      <v-col cols="5">
        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">Rally de LEI</v-list-item-title>
                <v-list-item-subtitle>Wed, 10:00 PM</v-list-item-subtitle>
                <div></div>
                <v-list-item-subtitle>Universidade do Minho</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

            <v-card-text>Aqui vai estar a descricao do evento</v-card-text>

            <v-card-actions>
              <v-btn to="/criarEvento" text color="deep-purple accent-4" link>Vou</v-btn>
              <v-btn text color="deep-purple accent-4">Com interesse</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "./../components/NavigationDrawer";

export default {
  components: {
    NavigationDrawer
  },
  data: () => ({
    arrayEvents: null,
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10)
  })
};
</script>


<style s>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.pause {
  border-left: 4px solid orangered;
}
.project.ondoing {
  border-left: 4px solid chartreuse;
}
</style>