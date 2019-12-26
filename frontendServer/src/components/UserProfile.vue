<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="green" title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="Company (disabled)" disabled />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="User Name" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Email Address" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="First Name" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Last Name" class="purple-input" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Adress" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="City" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Country" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="Postal Code" type="number" />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <input
                    class="mx-0 font-weight-light"
                    type="file"
                    accept="image/*"
                    @change= "uploadImage($event)"
                    id="file-input"
                  >
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg" />
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <p
              class="card-description font-weight-light"
            >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn color="success" round class="font-weight-light">Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    uploadImage(event) {
      const url = "http://localhost:3061/users/image";
      let data = new FormData();
      data.append("image", event.target.files[0]);
      let config = {
        headers: {
          "Content-Type": "image/png",
          'Authorization':
            "Bearer " +
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBvc3RzIjpbXSwiZnJpZW5kcyI6W10sImZyaWVuZHNSZXF1ZXN0cyI6WyIxMTExMSJdLCJjb21tZW50cyI6W10sIl9pZCI6IjVlMDEzZWIzZjE3Nzg4MGVhYzJmZjk2OSIsImVtYWlsIjoiZW1haWxUZXN0ZSIsInBhc3N3b3JkIjoiJDJhJDA2JC5lMlMuNFFoTFYzTzJxRE5tanpkQU9yNHFSVkNXVlVaNHZOL2Qudm9VR044YzByN0d6a3NLIiwibm9tZSI6IlRhbGlHIiwiaWQiOiI2NzcxMyIsIl9fdiI6MX0sImlhdCI6MTU3NzMzMTE1NiwiZXhwIjoxNTc3MzM4MzU2fQ.Alhqu76SjDRaKlM0F9XDAJYpE0YJo_UKxjViNqeDcPTm5bNLrZsBMSPrVVkV5QXVOEEhgBlXmiDrxUvkCZ1bcg"
        }
      };
      axios.post(url, data, config)
    }
  }
};
</script>