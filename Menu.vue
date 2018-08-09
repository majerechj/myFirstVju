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


        <!--<v-speed-dial
  
      :direction="'left'"
    > <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn></v-speed-dial>-->

        <!--<md-speed-dial md-event="click" md-direction="left">


          <md-button class="md-fab md-dense">
            <md-icon>search</md-icon>
          </md-button>

          <md-speed-dial-content>
            
          </md-speed-dial-content>
        </md-speed-dial>-->
        <!--<v-speed-dial  :direction="direction">
          <v-btn slot="activator"  color="blue" fab small v-click="fab = !fab">
            <v-icon>search</v-icon>
            <v-icon>close</v-icon>
          </v-btn>

          <md-field v-show="fab">
            <label></label>
            <md-input v-model="noError"></md-input>
          </md-field>
        </v-speed-dial>-->
          

        <md-button class="md-primary md-raised md-icon-button" v-if="searchable" v-on:click="openSearch">
          <md-icon>search</md-icon>
        </md-button>
        <md-button class="md-primary md-raised  md-icon-button" @click="rightDrawer = !rightDrawer">
          <md-icon>person</md-icon>
        </md-button>

      </div>
    </md-toolbar>

    <!--search dialog-->
    <md-dialog :md-active.sync="showSearch">
      <md-content>
        <md-field>
          <label>Hľadaj</label>
          <md-input v-model="searchValue" ref='searchInput'></md-input>
          <md-button class="md-primary md-raised md-icon-button" @click="find(searchValue)">
            <md-icon>search</md-icon>
          </md-button>
        </md-field>
      </md-content>
    </md-dialog>

    <!--lave menu-->
    <!--<md-drawer :md-active.sync="showNavigation" style="position: fixed;" >
      <md-toolbar class="md-primary" md-elevation="0">
        <span class="md-title">iNitra</span>
      </md-toolbar>

      <md-divider></md-divider>

      <md-list>
        <router-link to="/">
          <md-list-item @click="showNavigation = false">
            <md-icon class="md-raised md-primary">directions_bike</md-icon>
            <span class="md-list-item-text">Šport</span>
          </md-list-item>
        </router-link>
        <router-link to="/">
          <md-list-item @click="showNavigation = false">
            <md-icon class="md-raised md-primary">date_range</md-icon>
            <span class="md-list-item-text">Kultúra</span>
          </md-list-item>
        </router-link>
      </md-list>
    </md-drawer>-->
    <v-navigation-drawer class="white lighten" v-model="leftDrawer" absolute temporary style="position: fixed;">
      <md-toolbar class="md-primary" md-elevation="0">
        <span class="md-title">iNitra</span>
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
      </md-list>
    </v-navigation-drawer>

    <!--prave menu-->
    <!--<md-drawer class="md-right" :md-active.sync="showSidepanel" style="position: fixed;">
      <md-toolbar class="md-primary" md-elevation="0">
        <span class="md-title">Administrácia</span>
      </md-toolbar>

      <md-divider></md-divider>

      <md-list>
        <router-link to="/Login">
          <md-list-item @click="showSidepanel = false">
            <span class="md-list-item-text">Prihlásenie</span>
            <md-icon class="md-raised md-primary">lock</md-icon>
          </md-list-item>
        </router-link>
        <router-link to="/Register">
          <md-list-item @click="showSidepanel = false">
            <span class="md-list-item-text">Registrácia</span>
            <md-icon class="md-raised md-primary">person</md-icon>
          </md-list-item>
        </router-link>
      </md-list>
    </md-drawer>-->
    <v-navigation-drawer class="white lighten" v-model="rightDrawer" absolute temporary style="position: fixed;" right>
      <md-toolbar class="md-primary" md-elevation="0">
        <span class="md-title">Administrácia</span>
      </md-toolbar>

      <md-divider></md-divider>

      <md-list>
        <router-link to="/Login">
          <md-list-item @click="rightDrawer = !rightDrawer">
            <span class="md-list-item-text">Prihlásenie</span>
            <md-icon class="md-raised md-primary">lock</md-icon>
          </md-list-item>
        </router-link>
        <router-link to="/Register">
          <md-list-item @click="rightDrawer = !rightDrawer">
            <span class="md-list-item-text">Registrácia</span>
            <md-icon class="md-raised md-primary">person</md-icon>
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
      showSearch: false,
      showNavigation: false,
      showSidepanel: false,
      searchValue: '',

      leftDrawer: null,
      rightDrawer: null,
      
      mini: false,
      right: null,

      direction: 'left',
      fab: false,
    }),

    methods: {
      openSearch() {
        this.showSearch = true
        this.$refs.searchInput.focus()
      },

      find() {
        this.showSearch = false;
        this.$emit('FindEvent', this.searchValue);
        this.searchValue = '';
      }
    },

    props: {
      searchable: Boolean
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