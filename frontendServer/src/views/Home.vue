<template>
  <div class="home">
    <v-row class="mb-0">
      <v-col class="pa-0" cols="4" lg="2">
        <NavigationDrawer/>
      </v-col>
      <v-col>
        <Dashboard/>
      </v-col>
        
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationDrawer from "./../components/NavigationDrawer";
import Dashboard from "./../components/DashBoard";

export default {
  name: "home",
  components: {
    NavigationDrawer,
    Dashboard
  }
};
</script>

<style scoped>

</style>