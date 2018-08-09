<template>
  <div>
    <md-toolbar class="md-primary" style="position: fixed;">
      <md-button class="md-icon-button" @click="leftDrawer = !leftDrawer">
        <md-icon>menu</md-icon>
      </md-button>
      <router-link to="/">
        <span class="md-title ">iNitra</span>
      </router-link>
      <div class="md-toolbar-section-end">  
      </div>
    </md-toolbar>




    <v-navigation-drawer class="white lighten" v-model="leftDrawer" absolute temporary style="position: fixed;">
      <md-toolbar class="md-primary" md-elevation="0">
        <span class="md-title">Administrácia</span>
      </md-toolbar>
      <md-divider></md-divider>

      <md-list>
        <router-link to="/">
          <md-list-item @click="leftDrawer = !leftDrawer">
            <md-icon class="md-raised md-primary">directions_bike</md-icon>
            <span class="md-list-item-text">Šport</span>
          </md-list-item>
        </router-link>
        <router-link to="/">
          <md-list-item @click="leftDrawer = !leftDrawer">
            <md-icon class="md-raised md-primary">date_range</md-icon>
            <span class="md-list-item-text">Kultúra</span>
          </md-list-item>
        </router-link>
        <md-divider></md-divider>
        <router-link to="/Login">
          <md-list-item @click="leftDrawer = !leftDrawer">
            <md-icon class="md-raised md-primary">person</md-icon>
            <span class="md-list-item-text">Profil</span>
          </md-list-item>
        </router-link>
        <router-link to="/Register">
          <md-list-item @click="leftDrawer = !leftDrawer">
            <md-icon class="md-raised md-primary">person_outline</md-icon>
            <span class="md-list-item-text">Odhlásenie</span>
          </md-list-item>
        </router-link>
      </md-list>
    </v-navigation-drawer>

  
    

  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data: () => ({
     
      leftDrawer: null,

    }),

    methods: {
    },

    props: {
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 50px;
    max-height: 100px;
    padding: 15px
  }
</style>