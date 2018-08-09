<template>
    <div>

        <md-card class="md-primary green" md-with-hover>
            <div class="md-layout md-gutter md-alignment-center-center" @click.stop="showDialog = true">
                <h3 class="md-layout-item md-size-45 md-xsmall-size-90" md-with-hover>
                    <b>{{this.timeFrom}} - {{this.timeTo}}</b>
                </h3>
                <h4 class="md-layout-item md-size-45 md-xsmall-size-90">
                    <b>REZERVOVAŤ</b>
                </h4>
            </div>
        </md-card>

        <!--
<v-dialog v-model="showDialog" max-width="500px"  class="">
    <div class="">
      <md-button class="md-primary white">Primary</md-button>
      <div class="">
   
    <v-time-picker v-model="time" ></v-time-picker>
  </div>
</div>
    </v-dialog>
-->



        <md-dialog :md-active.sync="showDialog" to="r">

            <md-toolbar class="md-primary">
                <h3 class="md-title">Rezervácia</h3>
            </md-toolbar>

            <div class="my_padding">
                <md-content class="myContent md-scrollbar">
                <div class="md-layout">
                    <md-field class="md-layout-item" :class="getValidationClass('time')">
                        <md-button v-if="!timepicker" @click="clickTime1" class="md-layout-item md-raised">
                            <div v-if="!form.time">ZAČIATOK</div>
                            <div v-if="form.time">{{form.time}}</div>
                        </md-button>
                        <md-button v-if="timepicker" @click="clickTime1" class="md-layout-item">
                            <div v-if="!form.time">
                                <b>ZAČIATOK</b>
                            </div>
                            <div v-if="form.time">
                                <b>{{form.time}}</b>
                            </div>
                        </md-button>
                        <span class="md-error" v-if="!$v.form.time.required">Čas je povinný</span>
                    </md-field>

                    <md-icon class="md-layout-item ">remove</md-icon>

                    <md-field class="md-layout-item" :class="getValidationClass('time2')">
                        <md-button v-if="!form.time" disabled class="md-layout-item md-raised">
                            <div>KONIEC</div>
                        </md-button>

                        <md-button v-else-if="!timepicker2" @click="clickTime2" class="md-layout-item md-raised">
                            <div v-if="!form.time2">KONIEC</div>
                            <div v-if="form.time2">{{form.time2}}</div>
                        </md-button>
                        <md-button v-else-if="timepicker2" @click="clickTime2" class="md-layout-item">
                            <b>
                                <div v-if="!form.time2">
                                    <b>KONIEC</b>
                                </div>
                                <div v-if="form.time2">
                                    <b>{{form.time2}}</b>
                                </div>
                            </b>
                        </md-button>
                        <span class="md-error" v-if="!$v.form.time2.required">Čas je povinný</span>
                    </md-field>
                </div>


                <div class="md-layout md-alignment-top-center">
                    <transition name="fade">
                        <v-time-picker v-if="timepicker" v-model="form.time" color="blue " format="24hr" :max="timeFromStrat" :min="timeFrom" dark
                            @change="timepicker = false"></v-time-picker>
                    </transition>

                    <transition name="fade">
                        <v-time-picker v-if="timepicker2" v-model="form.time2" color="blue " format="24hr" :max="timeTo" :min="timeFromEnd" dark
                            @change="timepicker2 = false"></v-time-picker>
                    </transition>
                </div>

                <form novalidate class="myform md-layout md-alignment-top-center" @submit.prevent="validateUser">
                    <md-field :class="getValidationClass('lastName')">
                        <label for="last-name">Priezvisko</label>
                        <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.lastName.required">Priezvisko je povinné</span>
                    </md-field>



                    <md-field :class="getValidationClass('mobil')">
                        <label for="mobil">Mobil</label>
                        <md-input id="mobil" name="mobil" autocomplete="mobil" v-model="form.mobil" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.mobil.required">Mobil je povinný</span>
                        <span class="md-error" v-else-if="!$v.form.mobil.minlength">Neplatné číslo</span>
                    </md-field>



                    <md-field :class="getValidationClass('email')">
                        <label for="email">Email</label>
                        <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.email.required">Email je povinný</span>
                        <span class="md-error" v-else-if="!$v.form.email.email">Neplatný email</span>
                    </md-field>


                    <!--<md-tabs md-active-tab="ziadna" md-alignment="centered">
      <md-tab id="tab-start" md-label="ZAČIATOK" @click="clickTime1">
        <v-time-picker v-if="timepicker" lazy v-model="time" color="blue " format="24hr" max="22:15" min="9:30" dark  @change="timepicker = false"></v-time-picker>
      </md-tab>
     <md-tab md-disabled id="tab-middle" md-label="-"></md-tab>

 <md-tab id="tab-end" md-label="KONIEC">
        <v-time-picker v-if="timepicker" lazy v-model="time" color="blue " format="24hr" max="22:15" min="9:30" dark  @change="timepicker = false"></v-time-picker>
      </md-tab>
 </md-tabs>-->



                    <md-progress-bar md-mode="indeterminate" v-if="sending" />

                    <md-dialog-actions>
                        <md-button type="submit" class="md-primary" :disabled="sending">Rezervovať</md-button>
                    </md-dialog-actions>
                </form>
                </md-content>
            </div>
        </md-dialog>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "../../node_modules/vuelidate/lib/validators";

export default {
  name: "Reservation_create",
  mixins: [validationMixin],
  data: () => ({
    showDialog: false,
    timepicker: false,
    timepicker2: false,
    dialog: false,
    timeFromEnd: this.timeFrom,
    timeFromStrat: this.timeTo,
    sending: false,

    form: {
      lastName: null,
      mobil: null,
      email: null,
      time: null,
      time2: null
    }
  }),


  
  
  validations: {
    form: {
      lastName: {
        required
      },
      mobil: {
        required,
        minLength: minLength(10)
      },

      email: {
        required,
        email
      },
      time: {
        required
      },
      time2: {
        required
      }
    }
  },

  props: {
    functionParent: Function,
    timeFrom: String,
    timeTo: String,
    dialog: Boolean
  },

  watch: {
    showDialog: function (val) {
      this.showDialog = val;
      this.functionParent(val);       
    },

    dialog: function(val){
        this.showDialog = val;
        this.dialog = val;
    }
  },

  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clickTime1() {
      if (this.form.time2) this.timeFromStrat = this.form.time2;
      this.timepicker2 = false;
      this.timepicker = !this.timepicker;
    },

    clickTime2() {
      if (this.form.time) this.timeFromEnd = this.form.time;
      this.timepicker = false;
      this.timepicker2 = !this.timepicker2;
    },

    clearForm() {
      this.$v.$reset();
      this.form.lastName = null;
      this.form.mobil = null;
      this.form.email = null;
    },
    saveUser() {
      this.sending = true;
      console.log("tu som2");
      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();
      console.log("tu som");
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style>
.md-dialog {
  max-width: 768px;
}

.my_padding {
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
}

.myContent {
  max-width: 768px;
  max-height: 700px;
  overflow: auto;
}

.picker {
  max-height: 700px;
}
</style>