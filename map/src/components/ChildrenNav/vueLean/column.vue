<template>
  <div>



    <div class="box">
        <p   v-for="(item , i) in timedata" :key="i"  v-bind:class="[item.up ? 'activeClass' : 'errorClass',]"></p>



    </div>




  </div>
</template>

<script>
export default {
    data(){
        return{
            timedata:[
                {time:1,up:true},
                {time:1,up:false},
                {time:1,up:true},
                {time:1,up:false},
                {time:1,up:true},
                {time:1,up:true},
                {time:1,up:true},
                {time:1,up:false},
                {time:1,up:true},
            ]
        }
    }

}
</script>

<style>
.box{
    display: flex;
    height:150px ;
    border: 1px solid black;
}

.listy{
    height:150px ;
    width: 10px;
    border: 1px solid rebeccapurple;

}

.activeClass{
    width: 10px;

    background-color: brown;
}
.errorClass{
    width: 10px;

    background-color: rgb(14, 186, 134);
    
}

</style>