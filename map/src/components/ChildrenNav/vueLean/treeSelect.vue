<template>
  <div class="main-body" >
    <el-input  @focus="getTreeData()" v-model="input" placeholder="请输入内容"></el-input>

    <div>

        <div class="bomTree" v-if="isShow">
        <el-tree @check-change="selectChange" :props="props" :load="loadNode"  lazy   show-checkbox></el-tree>
        </div>

    </div>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios

export default {
  data() {
    return {
      input: '',
       props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        isShow:false,
        treedata:{}
    }
  },
    methods: {
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        axios.get("/select/treedata").then((res) => {
            let neobj=res.data.data.data
             resolve(neobj);
      });
        
      },
      getTreeData(){
          this.isShow=true
          this.isadd=true

      },
      selectChange(data, checked,a){
        this.isShow=a
        this.input=data.name
      },
    //   quittree(){
    //     this.isShow=false

    //   }
  
    }
}
</script>
<style>
.main-body{
    width: 400px;
    position: relative;
}
.bomTree{
background-color: rgb(219, 204, 204);
width: 300px;
position: absolute;
top: 10;
left: 10px;
padding: 10px;
}

</style>