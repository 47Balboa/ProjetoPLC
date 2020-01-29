<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-row>
              <h1 class="subheading grey--text">Cadeiras</h1>
            </v-row>
            <v-row>
              <v-card
                raised
                width="250px"
                height="250px"
                class="ma-3 pa-3 text-align-center text-center"
                :key="i"
                v-for="i in cadeiras"
              >
                <v-col cols="12">
                  <h2 @click="goToProfile(i)" align="center">{{i.nome}}</h2>
                  <v-avatar @click="goToProfile(i)" class="ma-4 outline" size="100">
                    <v-img v-if="hasAvatar(i)" :src="auxiliar(i)"></v-img>
                    <v-img v-else src="../assets/default_group.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <h1 class="subheading grey--text">Grupos</h1>
              <v-btn color="primary" @click="createGroup()">Criar grupo</v-btn>
            </v-row>
            <v-row>
              <v-card
                raised
                width="300px"
                height="300px"
                class="ma-3 pa-3 text-align-center text-center"
                :key="j"
                v-for="j in groups"
              >
                <v-col cols="12">
                  <h2 @click="goToProfile(j)" align="center">{{j.nome}}</h2>
                  <v-avatar @click="goToProfile(j)" class="ma-4 outline" size="100">
                    <v-img v-if="hasAvatar(j)" :src="auxiliar(j)"></v-img>
                    <v-img v-else src="../assets/default_group.png"></v-img>
                  </v-avatar>
                  <h5 @click="goToProfile(j)" align="center">Private: {{j.private}}</h5>
                </v-col>
                <div v-if="j.private === 'true'">
                  <v-btn
                    v-if="!j.requests.includes(user.id)"
                    color="success"
                    @click="sendRequest(j)"
                  >Enviar Pedido</v-btn>
                  <v-btn v-else disabled color="grey">Pedido enviado</v-btn>
                </div>
                <div v-else>
                  <v-btn
                    v-if="!j.members.includes(user.id) && !j.admins.includes(user.id)"
                    color="success"
                    @click="addGroup(j)"
                  >Adicionar</v-btn>
                  <v-btn v-else disabled color="grey">Adicionado</v-btn>
                </div>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

          <script>
import NavigationDrawer from "./../components/NavigationDrawer";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getToken"])
  },
  data: () => ({
    groups: [],
    cadeiras: [],
    sentRequests: [],
    user: null
  }),
  methods: {
    createGroup() {
      this.$router.push("/createGroup");
    },
    goToProfile(i){
      this.$router.push({name: "groupprofile",params: i})
    },

    sendRequest(i) {
      const url = "http://localhost:3061/groups/sendRequest";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url, { groupid: i.id }, config).then(() => {
        this.sentRequests.push(i.id);
      });
    },
    addGroup(i) {
      const url = "http://localhost:3061/groups/publicRequest";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url, {groupid: i.id}, config).then(() => {
        this.sentRequests.push(i.id);
      });
    },
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined || i.avatar === "")
        return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "https://api.manuelmariamoreno.pt/uploads/" +
        i.nome +
        "/avatar/" +
        i.avatar
      );
    }
  },
  components: {
    NavigationDrawer
  },
  mounted: function() {
    const url = "http://localhost:3061/users";
    const url1 = "http://localhost:3061/groups";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };

    axios.get(url, config).then(res => {
      this.user = res.data.user;
    });
    axios.get(url1, config).then(res => {
      this.cadeiras = res.data.filter(function(item) {
        if (item.isDiscipline === "true") return true;
        else return false;
      });
      this.groups = res.data.filter(function(item) {
        if (item.isDiscipline !== "true") return true;
        else return false;
      });
    });
  }
};
</script>

<style scoped>
.v-avatar.outline {
  border: 1px;
  border-radius: 50%;
}
</style>
