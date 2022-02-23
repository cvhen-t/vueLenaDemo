<template>
  <div class="main-body" >
    <el-input @focus="getTreeData()" v-model="input" placeholder="请输入内容"></el-input>

    <div>

        <div class="bomTree" v-if="isShow">
        <el-tree @check-change="selectChange" :props="props" :load="loadNode"  lazy   show-checkbox></el-tree>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
       props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        isShow:false
    }
  },
    methods: {
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      },
      getTreeData(){
          this.isShow=true
      },
      selectChange(data, checked,){
          console.log(data);
          this.input=data.name
          this.isShow=checked


      }
    }
}
</script>
<style>
.main-body{
    width: 400px;
    position: relative;
}
.bomTree{
background-color: #ddd;
width: 300px;
position: absolute;
top: 50px;
left: 10px;
}

</style>