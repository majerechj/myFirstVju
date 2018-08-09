<template>
    <div class="pmobil-container md-layout-column">
        <app-admin-menu class="menu"></app-admin-menu>
        <md-content class="my-bac md-layout md-alignment-top-center">
            <div class="md-layout-item md-size-45 md-small-size-100 ">

                <md-card class="">


                    <div class="md-layout md-alignment-top-center">
                        <!--Nadpis-->
                        <div class="viewport md-layout-item md-size-100 ">
                            <md-card class="md-primary">
                                <v-flex>
                                    <h4 class="myHeader display-1">
                                        <b>Administrácia športovísk</b>
                                    </h4>
                                </v-flex>
                            </md-card>
                        </div>
                        <!--Nadpis ends-->



                        <md-table md-card class="md-layout-item md-size-100 ">
                            <md-table-row>
                                <md-table-cell>
                                    <b>Názov</b>
                                </md-table-cell>
                                <md-table-cell>
                                    <b>Rezervácie</b>
                                </md-table-cell>
                                <md-table-cell>
                                    <b>Úprava</b>
                                </md-table-cell>
                                <md-table-cell>
                                        <b>Odstrániť</b>
                                    </md-table-cell>

                            </md-table-row>

                            <md-table-row v-for="item in centers" :key="item.id">
                                <md-table-cell>{{item.name}}</md-table-cell>
                                <md-table-cell>
                                    <md-button class="md-icon-button md-raised md-primary">
                                        <md-icon>event</md-icon>
                                    </md-button>
                                </md-table-cell>
                                <md-table-cell>
                                    <md-button class="md-icon-button md-raised yellow">
                                        <md-icon>edit</md-icon>
                                    </md-button>
                                </md-table-cell>
                                <md-table-cell>
                                    <md-button class="md-icon-button md-raised md-accent" @click="confirmDeleteSportActive = true;  sportToDelete = item">
                                        <md-icon>delete_forever</md-icon>
                                    </md-button>
                                </md-table-cell>


                            </md-table-row>

                        </md-table>
                        
                    

                    </div>
                    <md-card-actions class = "myPadding">
                        <md-button class="md-raised green">
                            <md-icon>add</md-icon> nové
                        </md-button>
                      </md-card-actions>
                </md-card>

            </div>
        </md-content>
    </div>
</template>

<script>
    import Admin_Menu from "./Menu_administration.vue";


    export default {
        name: 'Register',

        data: () => ({
            centers: [
            {
                    id: 1,
                    name: "Sportova adf niekde na klokocine",
                },
                {
                    id: 2,
                    name: "asdf hala niekde na klokocine",
                },
                {
                    id: 3,
                    name: "eeee hala niekde na klokocine",
                },
                {
                    id: 4,
                    name: "Sportova hala errrrr na klokocine",
                },

            ]
        }),

        methods: {

        },


        components: {
            "app-admin-menu": Admin_Menu
        }
    };
</script>

<style lang="scss" scoped>
    .pmobil-container {
        min-height: 700px;
        overflow-x: hidden;
        position: relative;
        border: 0px solid rgba(#000, 0.12);
    }

    .md-content {
        padding: 16px;
    }

    .my-bac {
        background-image: url('../../static/nro.png');
        /* background-repeat: no-repeat;
    background-position: center top;
    background-attachment: initial;
    background-position-y: -5%;
    background-size: 80%;

  -webkit-background-attachment:initial;
  -moz-background-attachment: initial;
  -o-background-attachment:initial;
  -webkit-background-size: 80%;
  -moz-background-size: 80%;
  -o-background-size: 80%;
  background-size: 80%;*/
        background-repeat: repeat;
        background-size: 1%;
        padding-top: 70px;

    }

    .myPadding{
        padding: 15px;
    }

    .myItem{
        padding-bottom: 15px;
    }
</style>