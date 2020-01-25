<template>
    <v-navigation-drawer
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      min-height="100%"
      permanent
      
      clipped
      fixed
      width="15%"
    >
      <v-list>
        <v-list-item v-for="([icon, text,toGo], i) in items" :to="toGo" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
  data: () => ({
    items: [
      ["mdi-home", "Complexity","/complex"],
      ["mdi-home", "Home","/home"],
      ["mdi-home", "testing","/testing"],
      ["mdi-account", "Profile","/profile"],
      ["mdi-email", "Messages","/chat"],
      ["mdi-account-multiple-check", "Friends","/friends"],
      ["mdi-folder", "Cadeiras","/dummy"],
      ["mdi-account-group", "Utilizadores", "/users"]
    ],
  })
};
</script>