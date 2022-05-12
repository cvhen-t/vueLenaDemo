<template>
<div>
  <keep-alive>
        <treeSelect ></treeSelect>

        <!-- <input  v-else type="text"> -->
  </keep-alive>

  <button @click="to()">to</button>
</div>
  
</template>

<script>
import  treeSelect  from '../vueLean/treeSelect.vue';
export default {
    components: {
   treeSelect
  },
  data() {
    return {
      test:true
    }
    },
  created() {
    console.log('created');},

  
  methods: {
    to(){
      this.test=!this.test;
      this.$router.push('/Vuelearn/passdata');
  }

  
  }

}
</script>

<style>

</style>