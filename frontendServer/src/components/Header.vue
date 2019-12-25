<template>
  <div>
    <v-app-bar app src="../assets/background-header.jpg" color="deep-purple accent-4">
      <router-link to="/">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>
      <router-link class="toolbar-title" to="/">
        <v-toolbar-title style="font-size:2em">ClassBin</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn @click="submit">
        <span>Sign In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>


export default {
  name: "Header",
  methods: {
    submit() {
      
    }
  }
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>