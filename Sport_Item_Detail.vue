<template>
  <div>
    <app-menu :searchable="false"></app-menu>
    <md-content class="content md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-50 md-small-size-100 ">
        <md-card class="">


          <div class="md-layout md-gutter md-alignment-top-center">
            <!--Nadpis-->
            <div class="myItem viewport md-layout-item md-size-100 ">
              <md-card class="md-primary">
                <v-flex>
                  <h3 class="myHeader display-2">
                    <b>Sportova hala na kokocine akoze</b>
                  </h3>
                </v-flex>
              </md-card>
            </div>
            <!--Nadpis ends-->
            <!--Kontakt-->
            <div class="myItem viewport md-layout-item md-size-45  md-medium-size-50 md-small-size-50 md-xsmall-size-95">
              <md-card>
                <md-toolbar :md-elevation="1">
                  <span class="md-title">Kontakt</span>
                </md-toolbar>

                <md-list class="md-double-line">

                  <md-list-item>
                    <md-icon class="md-primary">phone</md-icon>

                    <div class="md-list-item-text">
                      <span>(650) 555-1234</span>
                      <span>Mobil</span>
                    </div>
                  </md-list-item>


                  <md-divider></md-divider>


                  <md-list-item>
                    <md-icon class="md-primary">email</md-icon>

                    <div class="md-list-item-text">
                      <span>aliconnors@example.com</span>
                      <span>Email</span>
                    </div>
                  </md-list-item>

                  <md-divider></md-divider>
                  <md-list-item>
                    <md-icon class="md-primary">home</md-icon>

                    <div class="md-list-item-text">
                      <span>Murániho 22
                        <br>94911 Nitra</span>
                      <span>Adresa</span>

                    </div>
                  </md-list-item>

                  <md-divider></md-divider>
                  <md-list-item>
                    <md-icon class="md-primary">access_time</md-icon>

                    <div class="md-list-item-text">
                      <span v-html="hodiny"></span>
                      <span>Otváracie hodiny</span>

                    </div>
                  </md-list-item>


                </md-list>
              </md-card>
            </div>
            <!--Kontakt ends-->

            <!--Popis-->
            <div class="myItem viewport md-layout-item md-size-45  md-medium-size-50 md-small-size-50 md-xsmall-size-95">
              <md-card>
                <md-toolbar :md-elevation="1">
                  <span class="md-title">Popis</span>
                </md-toolbar>

                <md-list class="md-double-line">
                  <p class="myDescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper facilisis. Pellentesque
                    placerat elit a nunc. Nullam tortor odio, rutrum quis, egestas ut, posuere sed, felis. Vestibulum placerat
                    feugiat nisl. Suspendisse lacinia, odio non feugiat vestibulum, sem erat blandit metus, ac nonummy magna
                    odio pharetra felis. Vivamus vehicula velit non metus faucibus auctor. Nam sed augue. Donec orci. Cras
                    eget diam et dolor dapibus sollicitudin. In lacinia, tellus vitae laoreet ultrices, lectus ligula dictum
                    dui, eget condimentum velit dui vitae ante. Nulla nonummy augue nec pede. Pellentesque ut nulla. Donec
                    at libero. Pellentesque at nisl ac nisi fermentum viverra. Praesent odio. Phasellus tincidunt diam ut
                    ipsum. Donec eget est.
                  </p>
                </md-list>
              </md-card>
            </div>
            <!--Popis ends-->


            <div class="myItem md-layout-item md-size-90 md-medium-size-95 md-small-size-95 md-xsmall-size-95">
              <md-card>
                <md-toolbar :md-elevation="1">
                  <span class="md-title">Ihriská</span>
                </md-toolbar>

                <md-list class="md-double-line">
                  <md-list-item>
                    <span class="md-list-item-text">
                      <b>Futbalové ihrisko</b>
                    </span>
                    <router-link to="/Reservation">
                      <md-button class="md-raised md-accent md-list-action">Rezervovať</md-button>
                    </router-link>
                  </md-list-item>

                </md-list>
              </md-card>
            </div>



            <div class="myItem md-layout-item md-size-90 md-medium-size-95 md-small-size-95 md-xsmall-size-95">
              <md-card>
                <md-toolbar :md-elevation="1">
                  <span class="md-title">Fotky</span>
                </md-toolbar>
                <v-carousel dark>
                  <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
              </md-card>
            </div>


          </div>
          <!--Layout ends-->
        </md-card>
      </div>
    </md-content>

  </div>
</template>

<script>
  import Menu from "./Menu.vue";

  export default {
    name: "Sport_Item",

    data: () => ({
      isThisSearchable: true,
      img: "../../static/orange.png",
      niecoo: "<p>ahoj</p>",
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      hodiny:
        "Po: 10:00 - 20:00<br>Ut: 10:00 - 20:00<br>Str: 10:00 - 20:00<br>Štv: 10:00 - 20:00<br>Pia: 10:00 - 20:00<br>So: 10:00 - 20:00<br>Ne: Zatvorené<br>"
    }),

    props: {
      name: String,
      description: String,
      urlImage: String
    },

    components: {
      "app-menu": Menu
    }
  };
</script>

<style>
  .content {
    padding-top: 70px;
    background-image: url("../../static/nro.png");
    background-repeat: repeat;
    background-size: 1%;
  }

  .myItem {
    padding: 5px;
  }

  .myHeader{
    padding: 15px;
  }

  .myDescription{
    padding: 15px;
  }
</style>