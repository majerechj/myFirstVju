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
                    <b>Pridávanie športového centra</b>
                  </h4>
                </v-flex>
              </md-card>
            </div>
            <!--Nadpis ends-->

            <md-steppers class="myItem md-layout-item md-size-95 md-medium-size-95 md-small-size-95 md-xsmall-size-95" md-alternative
              :md-active-step.sync="active" md-linear>
              <md-step id="first" md-label="Informácie" :md-done.sync="first">

                <form novalidate class="" @submit.prevent="validateCentre">

                  <md-toolbar md-elevation="0" class="md-dense">
                    <h3 class="md-title">Základné údaje</h3>
                  </md-toolbar>

                  <md-field :class="getValidationClass('name')">
                    <label for="name">Názov</label>
                    <md-input name="name" id="name" v-model="form.name" required/>
                    <span class="md-error" v-if="!$v.form.name.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.name.minlength">Minimálne 3 znaky</span>
                  </md-field>

                  <md-field :class="getValidationClass('description')">
                    <label>Popis</label>
                    <md-textarea name="description" id="description" v-model="form.description" required></md-textarea>
                    <span class="md-error" v-if="!$v.form.description.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.description.minlength">Minimálne 20 znakov</span>
                  </md-field>


                  <md-toolbar md-elevation="0" class="md-dense">
                    <h3 class="md-title">Kontakt</h3>
                  </md-toolbar>

                  <md-field :class="getValidationClass('mobil')">
                    <label for="mobil">Mobil</label>
                    <md-input name="mobil" id="mobil" v-model="form.mobil" required/>
                    <span class="md-error" v-if="!$v.form.mobil.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.mobil.minlength">Minimálne 6 znakov</span>
                  </md-field>

                  <md-field :class="getValidationClass('email')">
                    <label for="email">Email</label>
                    <md-input name="email" id="email" v-model="form.email" required/>
                    <span class="md-error" v-if="!$v.form.email.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Neplatný email</span>
                  </md-field>

                  <md-toolbar md-elevation="0" class="md-dense">
                    <h3 class="md-title">Adresa</h3>
                  </md-toolbar>

                  <md-field :class="getValidationClassAddress('street')">
                    <label for="street">Ulica</label>
                    <md-input name="street" id="street" v-model="form.address.street" required/>
                    <span class="md-error" v-if="!$v.form.address.street.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.address.street.minlength">Minimálne 3 znaky</span>
                  </md-field>

                  <md-field :class="getValidationClassAddress('street_number')">
                    <label for="street_number">Číslo</label>
                    <md-input name="street_number" id="street_number" v-model="form.address.street_number" required/>
                    <span class="md-error" v-if="!$v.form.address.street_number.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.address.street_number.numeric">Nesprávne znaky</span>
                  </md-field>

                  <md-field :class="getValidationClassAddress('city')">
                    <label for="city">Mesto</label>
                    <md-input name="city" id="city" v-model="form.address.city" required/>
                    <span class="md-error" v-if="!$v.form.address.city.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.address.city.minlength">Minimálne 3 znaky</span>
                  </md-field>

                  <md-field :class="getValidationClassAddress('zip')">
                    <label for="zip">Poštové smerovacie číslo</label>
                    <md-input name="zip" id="zip" v-model="form.address.zip" required/>
                    <span class="md-error" v-if="!$v.form.address.zip.required">Položka je povinná</span>
                    <span class="md-error" v-else-if="!$v.form.address.zip.numeric">Nesprávne znaky</span>
                    <span class="md-error" v-else-if="!$v.form.address.zip.minlength">Položka musi obsahovať 5 znakov</span>
                    <span class="md-error" v-else-if="!$v.form.address.zip.maxlength">Položka musi obsahovať 5 znakov</span>
                  </md-field>

                  <md-toolbar md-elevation="0" class="md-dense">
                    <h3 class="md-title">Otváracie hodiny</h3>
                  </md-toolbar>

                  <!--<div class="md-layout md-gutter">
                                        <md-field :class="getValidationClass('name')">
                                            <label for="name">Názov</label>
                                            <md-input name="name" id="name" v-model="form.name"/>
                                            <span class="md-error" v-if="!$v.form.name.required">Položka je povinná</span>
                                            <span class="md-error" v-else-if="!$v.form.name.minlength">Minimálne 3 znaky</span>
                                        </md-field>
                                    </div>-->

                  <md-table md-card>


                    <md-table-row>

                      <md-table-cell>
                        <b>Deň</b>
                      </md-table-cell>
                      <md-table-cell>
                        <b>Začiatok</b>
                      </md-table-cell>
                      <md-table-cell>
                        <b>Koniec</b>
                      </md-table-cell>
                    </md-table-row>

                    <md-table-row v-for="(day, index) in form.days" :key="day.name, index">
                      <md-table-cell>{{day.name}}</md-table-cell>
                      <md-table-cell>
                        <md-field :class="getValidationClassHours($v.form.days.$each[index].start)" class="mobile">
                          <label>With label</label>
                          <md-input name="day" id="day" v-model="day.start" placeholder="Zatvorené"></md-input>
                          <span class="md-error" v-if="!$v.form.days.$each[index].start.hodina">Povinný formát: HH:MM</span>
                        </md-field>
                      </md-table-cell>
                      <md-table-cell>
                        <md-field :class="getValidationClassHours($v.form.days.$each[index].end)" class="mobile">
                          <label>With label</label>
                          <md-input v-model="day.end" placeholder="Zatvorené"></md-input>
                          <span class="md-error" v-if="!$v.form.days.$each[index].end.hodina">Povinný formát: HH:MM</span>
                        </md-field>
                      </md-table-cell>

                    </md-table-row>

                  </md-table>


                  <md-button type="submit" class="md-primary">Create user</md-button>

                  <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Pokračovať</md-button>

                </form>

              </md-step>

              <md-step id="second" md-label="Ihriská" :md-done.sync="second">
                <md-toolbar md-elevation="0" class="md-dense">
                  <h3 class="md-title">Ihriská</h3>
                </md-toolbar>

                <md-table md-card>

                  <md-table-row>

                    <md-table-cell>
                      <b>Názov</b>
                    </md-table-cell>
                    <md-table-cell>
                      <b>Rezervácie</b>
                    </md-table-cell>
                    <md-table-cell>
                      <md-button @click="sportDialog = true" class="md-icon-button md-raised green">
                        <md-icon>add</md-icon>
                      </md-button>
                    </md-table-cell>
                  </md-table-row>

                  <md-table-row v-for="item in sports" :key="item.name">
                    <md-table-cell>{{item.name}}</md-table-cell>
                    <md-table-cell>{{item.reservation}}</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-icon-button md-raised md-accent" @click="confirmDeleteSportActive = true;  sportToDelete = item">
                        <md-icon>delete_forever</md-icon>
                      </md-button>
                    </md-table-cell>
                  
                    
                  </md-table-row>

                </md-table>
                
                <md-dialog-confirm :md-active.sync="confirmDeleteSportActive" md-title="Naozaj vymazať?" md-content="Potvrdením vymažete ihrisko natrvalo."
                  md-confirm-text="Vymazať" md-cancel-text="Zrušiť" @md-cancel="confirmDeleteSportActive = false" @md-confirm="deleteSport(sportToDelete)"
                />


                <md-dialog :md-active.sync="sportDialog">
                  <md-dialog-title>Pridávanie ihriska</md-dialog-title>

                  <form novalidate @submit.prevent="validateSport" class="myHeader">
                    <md-field :class="getValidationClassSport()">
                      <label for="nameSport">Názov</label>
                      <md-input name="nameSport" id="nameSport" v-model="sportItem.name" required/>
                      <span class="md-error" v-if="!$v.sportItem.name.required">Položka je povinná</span>
                    </md-field>

                    <div class="title">Prajete si spravovať rezervácie?</div>
                    <md-radio v-model="sportItem.reservation" value="áno" class="md-primary">Áno, v systéme iNitra</md-radio>
                    <md-radio v-model="sportItem.reservation" value="nie" class="md-primary">Nie</md-radio>
                    <md-radio v-model="sportItem.reservation" value="vlastné" class="md-primary">Vlastné rezervácie vo vlastnom systéme</md-radio>

                    <md-field v-if="sportItem.reservation == 'vlastné'">
                      <label for="url">Url adresa</label>
                      <md-input name="url" id="url" v-model="sportItem.url" />
                    </md-field>



                    <md-dialog-actions>
                      <md-button type="submit" class="md-primary">Uložiť</md-button>
                      <md-button class="md-primary" @click="sportDialog = false">Close</md-button>
                      <md-button class="md-primary" @click="sportDialog = false">Save</md-button>
                    </md-dialog-actions>
                  </form>
                </md-dialog>
                <br>
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Pokračovať</md-button>
              </md-step>


              <!-- treti krok-->
              <md-step id="third" md-label="Fotky" :md-done.sync="third">


                <md-card>
                  <md-card-header>
                    <div class="md-title">Pridanie obrázkov</div>
                  </md-card-header>
                  <div class="myHeader">
                    <md-field>
                      <label>Vyberte obrázky</label>
                      <md-file v-model="imagesSelected" accept="image/*" multiple />
                    </md-field>
                    <md-table md-card>
                      <md-table-row v-for="img in images" :key="img">
                        <md-table-cell>{{img}}</md-table-cell>
                      </md-table-row>
                    </md-table>

                    <md-card-actions v-if="imagesSelected">
                      <md-button class=" md-accent" @click="imagesSelected = null">Zrušiť</md-button>
                      <md-button class="md-raised md-primary">Uložiť</md-button>

                    </md-card-actions>
                  </div>
                </md-card>

                <br>


                <div class="md-layout md-gutter md-alignment-center">

                  <v-card v-for="card in cards" :key="card.title" class="myHeader md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                    <v-card-media :src="card.src" height="200px">
                      <v-container fill-height fluid pa-2>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red" icon @click="confirmDeleteImageActive = true">
                        <v-icon>delete_forever</v-icon>
                      </v-btn>

                    </v-card-actions>
                  </v-card>
                </div>

                <!--confirm dialog - vymazanie obrazka-->
                <md-dialog-confirm :md-active.sync="confirmDeleteImageActive" md-title="Naozaj vymazať?" md-content="Potvrdením vymažete obrázok natrvalo."
                  md-confirm-text="Vymazať" md-cancel-text="Zrušiť" @md-cancel="confirmDeleteImageActive = false" @md-confirm="confirmDeleteImageActive = false"
                />




              </md-step>
            </md-steppers>



          </div>
          <!--Layout ends-->
        </md-card>
      </div>
    </md-content>

  </div>
</template>

<script>
  import Menu from "./Menu.vue";
  import { validationMixin } from "vuelidate";
  import {
    required,
    email,
    minLength,
    maxLength,
    numeric,
    helpers
  } from "vuelidate/lib/validators";
  const hodina = value => {
    if (typeof value === "undefined" || value === null || value === "") {
      return true;
    }
    return /[0-9]+:[0-9][0-9]/.test(value);
  };

  export default {
    name: "Create_centre",


    mixins: [validationMixin],
    data: () => ({
      confirmDeleteSportActive: false,
      sportToDelete: null,
      imagesSelected: null,
      images: [],
      confirmDeleteImageActive: false,
      cards: [
        { title: 'Pre-fab homes', src: '../../static/logo.png', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ],

      sportItem: {
        name: null,
        reservation: "áno",
        url: null
      },
      form: {
        name: null,
        description: null,
        mobil: null,
        email: null,
        address: {
          street: null,
          street_number: null,
          city: null,
          zip: null
        },
        days: [
          {
            name: "Po:",
            start: null,
            end: null
          },
          {
            name: "Ut:",
            start: null,
            end: null
          },
          {
            name: "St:",
            start: null,
            end: null
          },
          {
            name: "Št:",
            start: null,
            end: null
          },
          {
            name: "Pi:",
            start: null,
            end: null
          },
          {
            name: "So:",
            start: null,
            end: null
          },
          {
            name: "Ne:",
            start: null,
            end: null
          }
        ]
      },

      active: "first",
      first: false,
      second: false,
      third: false,

      sports: [],

      sportDialog: false
    }),
    validations: {
      sportItem: {
        name: {
          required
        }
      },
      form: {
        name: {
          required,
          minLength: minLength(3)
        },
        description: {
          required,
          minLength: minLength(20)
        },
        mobil: {
          required,
          minLength: minLength(6)
        },
        email: {
          required,
          email
        },
        address: {
          street: {
            required,
            minLength: minLength(3)
          },
          street_number: {
            required,
            numeric
          },
          city: {
            required,
            minLength: minLength(3)
          },
          zip: {
            required,
            numeric,
            minLength: minLength(5),
            maxLength: maxLength(5)
          }
        },
        hours: {
          required, // array cannot be left empty
          minLength: minLength(7), // "values" array has to have at least 6 elements
          $each: {
            minLength: minLength(4) // each field of "values" array has to have at least 4 characters (or be an array of at least 4 elements)
          }
        },
        days: {
          $each: {
            start: {
              hodina
            },
            end: {
              hodina
            }
          }
        }
      }
    },
    methods: {
      setDone(id, index) {
        this[id] = true;

        this.secondStepError = null;

        if (index) {
          this.active = index;
        }
      },

      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName];

        if (field) {
          return {
            "md-invalid": field.$invalid && field.$dirty
          };
        }
      },

      getValidationClassSport() {
        const field = this.$v.sportItem.name;

        if (field) {
          return {
            "md-invalid": field.$invalid && field.$dirty
          };
        }
      },

      getValidationClassAddress(fieldName) {
        const field = this.$v.form.address[fieldName];

        if (field) {
          return {
            "md-invalid": field.$invalid && field.$dirty
          };
        }
      },

      getValidationClassHours(field) {
        if (field) {
          return {
            "md-invalid": field.$invalid && field.$dirty
          };
        }
      },

      isHourValid(hour) {
        if (hour == null) return true;
        else if (!hour.toString().includes(":")) {
          return false;
        } else {
          var parts = hour.split(":");
          if (parts.length != 2) {
            return false;
          } else {
            if (parseInt(parts[0]) && parseInt(parts[1])) {
              return true;
            } else {
              return false;
            }
          }
        }
      },

      clearForm() {
        this.$v.$reset();
        /* this.form.firstName = null
                              this.form.lastName = null
                              this.form.age = null
                              this.form.gender = null
                              this.form.email = null*/
      },
      saveCentre() {
        this.setDone("first", "second");
        //this.sending = true
        // Instead of this timeout, here you can call your API
        /* window.setTimeout(() => {
                                this.lastUser = `${this.form.firstName} ${this.form.lastName}`
                                this.userSaved = true
                                this.sending = false
                                this.clearForm()
                              }, 1500)*/
      },

      saveSport() {
        this.sports.push({
          name: this.sportItem.name,
          reservation: this.sportItem.reservation,
          url: this.sportItem.url
        });
        this.sportItem.name = null;
        this.sportItem.reservation = "áno";
        this.sportItem.url = null;

        this.sportDialog = false;
      },

      validateCentre() {
        this.$v.form.$touch();

        if (!this.$v.form.$invalid) {
          this.saveCentre();
        }
      },

      validateSport() {
        this.$v.sportItem.$touch();
        if (!this.$v.sportItem.$invalid) {
          this.saveSport();
        }
      },

      deleteSport: function (item) {
        this.sports.splice(this.sports.indexOf(item), 1);
      }
    },
    components: {
      "app-menu": Menu
    },
    beforeRouteLeave(to, from, next) {
      if (this.sportDialog) {
        next(false);
        this.sportDialog = false;
      } else next();
    },
    watch: {
      imagesSelected: function (val) {
        if (val != null)
          this.images = val.toString().split(', ');
        else this.images = []
        this.imagesSelected = val;
      }
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

  .md-radio {
    display: flex;
  }

  .myHeader {
    padding: 15px;
  }

  .myDescription {
    padding: 15px;
  }

  .md-dialog {
    max-width: 768px;
  }

  
  @media only screen and (max-device-width: 600px) {
      .mobile{
        max-width: 100px;
    }
  }

  

</style>