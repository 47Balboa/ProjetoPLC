<template>
  <v-app class="theme">
    <v-content class="colored">
      <Header/>
        <router-view/>
    </v-content>
  
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>
.theme {
  line-height: 1.4;
  background: #477e76;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
