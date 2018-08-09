<template>
  <md-card class="md-elevation-13">

    <md-card-header class="md-layout md-glutter ">
      <md-card-media class="md-layout-item">
        <img :src="urlImage" alt="img">
      </md-card-media>

      <md-card-header-text class="md-layout-item">
        <div class="md-title ">
          <b>{{name}}</b>
        </div>
        <div class="md-subhead md-xsmall-hide">+421 910 842 403</div>
        <div class="md-subhead md-xsmall-hide">jurajko.majerech@example.com</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-expand>
      <md-card-actions md-alignment="space-between">
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