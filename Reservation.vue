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
                                    <h4 class="myHeader display-1">
                                        <b>Sportova hala na kokocine akoze</b>
                                    </h4>
                                    <h4 class="mySubHeader display-0">
                                        <b>Futbalové ihrisko</b>
                                    </h4>
                                </v-flex>
                            </md-card>
                        </div>
                        <!--Nadpis ends-->

                        <div class="myItem viewport md-layout-item md-size-90  md-medium-size-95 md-small-size-95 md-xsmall-size-95">
                            <md-card>

                                <md-toolbar class="md-raised md-primary" :md-elevation="1">
                                    <md-button class=" md-icon-button md-primary md-raised" v-on:click="decrementOffset()">
                                        <md-icon>chevron_left</md-icon>
                                    </md-button>

                                    <span class="md-title md-layout md-alignment-center-center ">
                                        <b>{{date}}</b>
                                    </span>

                                    <md-button class="md-icon-button md-primary md-raised" v-on:click="incrementOffset()">
                                        <md-icon>chevron_right</md-icon>
                                    </md-button>

                                </md-toolbar>

                                
            <!--<v-card color="yellow darken-2" class="white--text md-layout md-alignment-left-center">
              <v-card-title primary-title>
                <div class="headline md-layout-item md-size-30">8:00 - 12:00</div>
                <div class="md-layout-item md-size-20"></div>
                 <v-btn color="white" disabled class=" blue--text md-layout-item md-size-45"><b>Vytváraná rezervácia</b></v-btn>
              </v-card-title>
            </v-card>              
            <v-card color="green darken-0" class="white--text md-layout md-alignment-left-center">
              <v-card-title primary-title>
                <div class="headline md-layout-item md-size-30">12:00 - 15:00</div>
                <div class="md-layout-item md-size-40"></div>
                 <v-btn color="white" class=" blue--text md-layout-item md-size-25"><b>Rezervovať</b></v-btn>
              </v-card-title>
            </v-card>
            <v-card color="red darken-0" class="white--text md-layout md-alignment-left-center">
              <v-card-title primary-title>
                <div class="headline md-layout-item md-size-30">15:00 - 20:00</div>
                <div class="md-layout-item md-size-40"></div>
                 <v-btn color="white" disabled class=" blue--text md-layout-item md-size-25"><b>Rezervované</b></v-btn>
              </v-card-title>
            </v-card>-->

<pending :time-from="'12:00'" :time-to="'20:00'"></pending>
<create :time-from="'9:00'" :time-to="'20:00'"  :functionParent="updateDialogValue" :dialog="this.dialog" ></create>
<confirmed :time-from="'12:00'" :time-to="'20:00'"></confirmed>

<md-button @click="nieco = '10:00'">klik</md-button>
                            </md-card>
                        </div>
                        <!--<v-date-picker v-model="picker" locale="sk" color="blue"></v-date-picker>
                        <h1>{{date}}</h1>-->

                    </div>
                    <!--Layout ends-->
                </md-card>
            </div>
        </md-content>

    </div>
</template>

<script>
import Menu from "./Menu.vue";
import Res_create from "./Reservation_create.vue";
import Res_confirmed from "./Reservation_confirmed.vue";
import Res_pending from "./Reservation_pending.vue";

export default {
  name: "Sport_Item",

  data: () => ({
    isThisSearchable: false,
    picker: null,
    date: "",
    dayOffset: 0,
    nieco: "15:00",
    dialog: false
  }),


  beforeRouteLeave(to,from,next){
      if(this.dialog){
        next(false);
        this.dialog = false;
      }
      else next()
  },

  methods: {
    incrementOffset() {
      this.dayOffset++;
      this.generateDateString(this.dayOffset);
    },

    decrementOffset() {
      this.dayOffset--;
      this.generateDateString(this.dayOffset);
    },

    generateDateString(dayOffset) {
      var currentDate = new Date();

      currentDate.setDate(currentDate.getDate() + dayOffset);
      /*var day, month;
                if (currentDate.getMonth() + 1 < 10)
                  month = "-0" + (currentDate.getMonth() + 1).toString();
                else month = "-" + (currentDate.getMonth() + 1).toString();
                if (currentDate.getDate() < 10)
                  day = "-0" + currentDate.getDate().toString();
                else day = "-" + currentDate.getDate().toString();
          
                this.picker = currentDate.getFullYear().toString() + month + day;*/

      var days = [
        "Nedeľa",
        "Pondelok",
        "Utorok",
        "Streda",
        "Štvrtok",
        "Piatok",
        "Sobota"
      ];
      var months = [
        "Január",
        "Február",
        "Marec",
        "Apríl",
        "Máj",
        "Jún",
        "Júl",
        "August",
        "September",
        "Október",
        "November",
        "December"
      ];

      this.date =
        days[currentDate.getDay()] +
        " " +
        currentDate.getDate().toString() +
        ". " +
        (currentDate.getMonth() + 1).toString() +
        ". " +
        currentDate.getFullYear().toString();
    },

    formatDateString(date) {
      var dateArray = date.toString().split("-");
    },

    updateDialogValue(value) {
      console.log("zavolané");
      this.dialog = value;
    }
  },

  created() {
    this.generateDateString(0);
  },

  components: {
    "app-menu": Menu,
    "pending": Res_pending,
    "confirmed": Res_confirmed,
    "create": Res_create
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

.myHeader {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}

.mySubHeader {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
}

.myDescription {
  padding: 15px;
}


</style>