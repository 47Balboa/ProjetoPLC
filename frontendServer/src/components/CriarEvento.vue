<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="3">
        <NavigationDrawer />
      </v-col>
      <v-col>
        <div>
          <v-card max-width="344" class="mx-auto">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  <v-text-field placeholder=" Nome do Evento"></v-text-field>
                </v-list-item-title>
                <v-text-field placeholder=" Local do Evento"></v-text-field>
                <v-list-item-subtitle>
                  <v-menu
                    ref="startMenu"
                    v-model="startMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="start"
                    transition="scale-transition"
                    min-width="290px"
                    offset-y
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="start"
                        class="mt-3"
                        label="Data do Evento"
                        prepend-icon="mdi-calendar"
                        dense
                        readonly
                        outlined
                        hide-details
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="start" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="startMenu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.startMenu.save(start)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <div>
              <v-btn color="primary" text>
                <v-icon>mdi-account-edit</v-icon>
                <span>Upload Foto</span>
              </v-btn>
            </div>

            <v-textarea
              background-color="white"
              color="black"
              auto-grow
              outlined
              placeholder="Descrição"
            ></v-textarea>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationDrawer from "./../components/NavigationDrawer";

import { mapGetters } from "vuex";

export default {
  data: () => ({
    arrayEvents: null,
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10)
  }),
  computed: { ...mapGetters(["getToken"]) },
  components: {
    NavigationDrawer
  }
};
</script>