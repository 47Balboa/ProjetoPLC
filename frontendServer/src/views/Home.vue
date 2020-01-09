<template>
 <v-container class="grey lighten-5 pa-0"  grid-list-md fluid>
 <v-row no-gutters>
   <v-col cols="2">
     <NavigationDrawer/>
   </v-col>
   <v-col class="ma-4">
     <Dashboard/>
   </v-col>
 </v-row>
 </v-container>
</template>

<script>
// @ is an alias to /src
import NavigationDrawer from './../components/NavigationDrawer'
import Dashboard from './../components/DashBoard'

export default {
  name: "home",
  components: {
    Dashboard,
    NavigationDrawer
  }
};
</script>

<style scoped>
.colored {
  background-color: aqua;
}
.home {
  background-color: red;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>