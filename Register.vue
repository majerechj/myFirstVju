<template>
  <div class="pmobil-container md-layout-column">
    <app-menu :searchable="false"></app-menu>
    <md-content class="my-bac md-layout md-alignment-top-center">
    <form novalidate class="myform md-layout md-alignment-top-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-25 md-small-size-100">
        <md-card-header>
          <div class="md-title">Registrácia</div>
        </md-card-header>

        <md-card-content class="md-gutter size-xsmall">

          <md-field :class="getValidationClass('firstName')">
            <label for="first-name">Meno</label>
            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.firstName.required">Meno je povinné</span>
          </md-field>



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

          <md-field :class="getValidationClass('password')">
            <label>Heslo</label>
            <md-input name="password" type="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">Heslo je povinné</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Heslo musí obsahovať aspoň 6 znakov</span>
          </md-field>

          <!--<md-field :class="getValidationClass('category')">
            <label for="category">Kategória</label>
            <md-select name="category" id="category" v-model="form.category" md-dense :disabled="sending">
              <md-option></md-option>
              <md-option value="Šport">Šport</md-option>
              <md-option value="Kultúra">Kultúra</md-option>
            </md-select>
            <span class="md-error">Výber kategórie je povinný</span>
          </md-field>-->

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Registrovať</md-button>
        </md-card-actions>
      </md-card>

    </form>
    </md-content>
  </div>
</template>

<script>
  import Menu from "./Menu.vue";
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from '../../node_modules/vuelidate/lib/validators'
  

  export default {
    name: 'Register',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        //category: null,
        mobil: null,
        email: null,
        password: null,
      },
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
        },
        lastName: {
          required,
        },
        mobil: {
          required,
          minLength: minLength(10)
        },
        /*category: {
          required
        },*/
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        }

      }
    },
    methods: {
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.mobil = null
        //this.form.category = null
        this.form.email = null
        this.form.password = null
      },
      saveUser() {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {

          this.$http.post('http://localhost:3000/api/accounts',{
            full_name: this.form.firstName + ' ' + this.form.lastName,
            mobil: this.form.mobil,
            email: this.form.email,
            emailVerified: false,
            password: this.form.password
            }).then(account =>{
              console.log(account);
              alert("Podarilo sa");
              this.$router.push('/');
            },
            err=> {
              console.log(err.message);
            });

          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser() {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    },


    components: {
      "app-menu": Menu
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

  .myform {
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

  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>