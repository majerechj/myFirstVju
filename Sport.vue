<template>
  <div class="page-container md-layout-column" ref="top">
    <app-menu class="menu" :searchable="true" @FindEvent="filterCenters"></app-menu>
    <md-content class="my-bac md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-45 md-small-size-100 ">
        <!--<div  v-for="index in 10" :key="index">-->
        <div v-for="centre in centers.slice((this.currentPage*10)-10, (this.currentPage*10))" :key="centre.id">
          <!--<app-item :name=c entre.name :description=c entre.description :urlImage=g etFirstImagePath(centre)></app-item>-->
          <app-item-2 :name= centre.name :mobil= centre.mobil :email= centre.email :description= centre.description :urlImage= getFirstImagePath(centre)></app-item-2>
          <br>

        </div>
<app-item-2></app-item-2>
        
        <md-button @click="this.$scrollTo(0,0)">aaa</md-button>
        <pag :current-page.sync="currentPage" layout="total, prev, pager, next" :page-count="this.pages">
        </pag>

      </div>
    </md-content>
  </div>
</template>

<script>
  import Menu from './Menu.vue'
  import Item from './Sport_Item.vue'
  import pag from 'vue-multiple-pagination'
  import Item2 from './Sport_Item_2.vue'

  export default {
    name: 'Home',
    data: () => ({
      isThisSearchable: true,
      centers: [],
      img: '',
      currentPage: 1,
      pages: 0
    }),
    watch: {
      Menu: function (val) { },
      currentPage: function(val){     
        this.currentPage = val;
        window.scrollTo(0,0);
      }
    },

    methods: {
     
      
      getFirstImagePath: function (centre) {
        this.$http.get('http://localhost:3000/api/images/findOne?filter={id:' + centre.id + '}').then(function (data) {
          this.img = data.body.path
        })
        return this.img
      },
      filterCenters(word) {
        this.currentPage = 1;
        this.$http.get('http://localhost:3000/api/sportCentres?filter=%7B%22where%22%3A%7B%22name%22%3A%7B%22like%22%3A%22%25' + word + '%25%22%7D%7D%7D').then(function (data) {
          this.centers = data.body;
          this.setPagesCount();
        });
      },
      setPagesCount() {
        var modulus = this.centers.length % 10;
        if (this.centers.length == 0) this.pages = 1;
        else if (modulus == 0) this.pages = this.centers.length / 10;
        else this.pages = (this.centers.length - modulus) / 10 + 1;
      }
    },

    created() {
      this.$http.get('http://localhost:3000/api/sportCentres').then(function (data) {
        console.log(data.body)
        this.centers = data.body;
        console.log(this.centers.length);
        this.setPagesCount();
      })
    },


    components: {
      'app-menu': Menu,
      'app-item': Item,
      'pag': pag,
      'app-item-2': Item2
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    overflow-x: hidden;
    min-height: 300px;
    position: relative;
    border: 0px solid rgba(#000, 0.12);
    padding: 0px;
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

  .uib-pagination {
    display: flex;
  }
</style>