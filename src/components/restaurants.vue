<template>
  <v-card>
    <v-card-title class="justify-center">
      RESTAURANTE {{defaultItem.name.toUpperCase()}}
    </v-card-title>
    <div class="d-flex flex-column justify-space-between align-center">
    <v-img
        src="https://image.freepik.com/vector-gratis/fachada-restaurante-estilo-plano_23-2147537370.jpg"
        height="25%"
        width="25%"
    ></v-img>
    </div>
    <v-card-text>
      Dirección: {{defaultItem.address}}
    </v-card-text>
    <v-card-text>
      Número telefónico: {{defaultItem.cellPhoneNumber}}
    </v-card-text>
    <v-col class="justify-center">
      <v-btn color="#1bd698" dark class="mb-2" v-bind="attrs" v-on="on" @click="navigateToEditRestaurant(defaultItem.id)">
        <v-icon>
          mdi-pencil
        </v-icon>
        Editar Información
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
import RestaurantService from '../services/restaurants-service';

export default {
  name: "restaurants",
  data() {
    return {
      dialog: false,
      defaultItem: {
        id: 0,
        name: '',
        address: '',
        cellPhoneNumber: 0,
        ownerId: 0
      }
    }
  },
  computed: { },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  methods: {
    retrieveRestaurant(id) {
      RestaurantService.get(id)
          .then(response => {
            this.defaultItem = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    save() {
      RestaurantService.update(this.defaultItem.id, this.defaultItem)
          .then(() => {
            this.retrieveRestaurant(this.defaultItem.id);
          })
          .catch(e => {
            console.log(e);
          });
    },
    editItem(item) {
      console.log(item);
      this.dialog = true;
    },
    close() {
      this.dialog = false
    },
    navigateToEditRestaurant(id) {
      this.$router.push({name: 'edit-restaurant', params: { id: id}});
    }
  },
  created() {
    this.retrieveRestaurant(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
