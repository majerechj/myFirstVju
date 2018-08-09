<template>

  <md-card class="md-elevation-13 md-layout md-gutter  md-alignment-center-center">



    <div class="md-layout-item md-size-30 md-xsmall-size-50">
      <md-card-media md-medium class=" media ">

        <v-carousel hide-controls hide-delimiters class="carousel ">
          <router-link to="/SportDetail">
            <v-carousel-item class="imag" :src="urlImage"></v-carousel-item>
          </router-link>
        </v-carousel>

      </md-card-media>
    </div>

    <div class="md-layout-item md-size-70 md-xsmall-size-100">
      <md-card-header>
        <div class="md-title">
          <b> {{name}}</b>
        </div>
        <div class="md-subhead">
          <b>{{mobil}}</b>
        </div>
        <div class="md-subhead ">
          <b>{{email}}</b>
        </div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions class="md-alignment-space-between md-layout">
          

          <div>
            <router-link to="/SportDetail">
              <md-button class="md-raised md-primary">Zobraziť podrobnosti</md-button>
            </router-link>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button md-raised md-primary">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>

        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            {{description}}
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>


    </div>



  </md-card>


</template>

<script>

  export default {
    name: 'Sport_Item',

    data: () => ({
      isThisSearchable: true,
      img: '../../static/logo.png',
      niecoo: '<p>ahoj</p>'
    }),

    props: {
      name: String,
      mobil: String,
      email: String,
      description: String,
      urlImage: String
    },

    computed: {
      editedDescription: function () {
        if (this.description.length > 150) {
          return this.description.substring(0, 150) + '...'
        }
        else return this.description
      }
    }
  }
</script>

<style>
  .carousel {
    height: 170px;
  }

  .media {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .card {
    max-height: 200px;
  }
</style>