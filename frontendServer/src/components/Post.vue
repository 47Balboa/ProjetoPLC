<template>
 <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <NavigationDrawer />
      </v-col>
      <v-col>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-row dense>
        <v-col cols="12">
          <v-card flat class="text-xs-center ma-3">
            <v-list-item>
              <v-list-item-avatar>
                <img src="/Saitama.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Saitama</v-list-item-title>
                <v-list-item-subtitle>Wed, 10:15 AM</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-col>
                  <v-btn text small>
                    <v-icon>mdi-play</v-icon>
                    <span>Group</span>
                  </v-btn>
                </v-col>
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn fab text small v-on="on">
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="link  in links" :key="link.text">
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>

            <v-textarea background-color="white" color="black" label="Post" auto-grow outlined></v-textarea>
            <v-card-actions>
              <v-btn fab text small>
                <v-icon color="pink">mdi-heart</v-icon>
              </v-btn>
              <v-span>Like</v-span>
              <v-btn fab text small @click="show = !show">
                <v-icon color="grey">mdi-comment</v-icon>
              </v-btn>
              <v-span>Comment</v-span>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  <div class="px-4">
                    <v-text-field
                      class="questrial"
                      height="45px"
                      background-color="grey lighten-3"
                      append-icon="mdi-camera "
                      placeholder="Write a comment..."
                      rounded
                    ></v-text-field>
                  </div>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-card flat class="text-xs-center ma-3">
            <v-list-item>
              <v-list-item-avatar>
                <img src="/Saitama.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Saitama</v-list-item-title>
                <v-list-item-subtitle>Mon, 12:30 PM</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-textarea
              background-color="white"
              color="black"
              auto-grow
              outlined
              placeholder="Post"
            ></v-textarea>
            <v-card-actions>
              <template>
                <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="File input"
                  multiple
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  outlined
                  :show-size="1000"
                >
                  <template v-slot:selection="{ index, text }">
                    <v-chip
                      v-if="index < 2"
                      color="deep-purple accent-4"
                      dark
                      label
                      small
                    >{{ text }}</v-chip>

                    <span
                      v-else-if="index === 2"
                      class="overline grey--text text--darken-3 mx-2"
                    >+{{ files.length - 2 }} File(s)</span>
                  </template>
                </v-file-input>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
      </v-col>
    </v-row>
 </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      links: [
        { icon: "share", text: "Share" },
        { icon: "report", text: "Report" },
        { icon: "save", text: "Save" }
      ]
    };
  }
};
</script>
