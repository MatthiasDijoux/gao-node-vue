<template>
  <v-row>
    <v-dialog v-model="dialog" width="500px">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" icon v-on="on"
          ><v-icon>mdi-plus-outline</v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Ajout d'un utilisateur
        </v-card-title>

        <v-card-text>
          <v-row class="mr-5 ml-5">
            <v-autocomplete
              v-model="select"
              :loading="loading"
              :items="listClients"
              item-text="name"
              item-value="id"
              cache-items
              :search-input.sync="search"
              return-object
              :hide-no-data='!no_data'
              hide-selected
              hide-details
              label="Client"
            >
              <template>
                <v-btn icon color="success" :disabled="listClients.length == 0">
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
              </template>
            </v-autocomplete>

            <!-- <addUser @addClient="addClient($event)" /> -->
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" text @click="ajoutClient()"> Valider </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      :color="colorSnack"
      outlined
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <v-btn :color="colorSnack" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-row>
</template>

<script src='./addAttribution.js' />