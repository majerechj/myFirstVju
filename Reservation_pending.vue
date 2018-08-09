<template>
<md-card class="md-primary orange" >
    <div class="md-layout md-gutter md-alignment-center-center md-display-1">
         <h3 class="md-layout-item md-size-45 md-xsmall-size-90" md-with-hover>{{this.timeFrom}} - {{this.timeTo}}</h3>
         <h5  class="md-layout-item md-size-45 md-xsmall-size-90 ">VYTVÁRANÁ REZERVÁCIA</h5>
    </div>
</md-card>

</template>

<script>
export default {
    name: 'Reservation_pending',

  

    props: {
      timeFrom: String,
      timeTo: String
      }
}
</script>