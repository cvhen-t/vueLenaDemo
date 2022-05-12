<template>
<div>
  <keep-alive>
        <!-- <treeSelect ></treeSelect> -->
      <component :is="treeSelect"></component>
        <!-- <input  v-if="ishow" type="text">
        <input  v-else type="text"> -->
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
      test:true,
      treeSelect:treeSelect

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