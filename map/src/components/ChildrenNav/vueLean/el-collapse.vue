<!--
 * @Date: 2023-01-04 14:39:23
 * @LastEditTime: 2023-01-09 14:53:12
-->
<template>
    <div>
        <el-collapse ref="collapsebox" v-model="activeNames" @change="handleChange">

            <el-collapse-item v-for="item, i in datalist" :key="item" :ref="'collapseItem' + i" name="1">
                <template slot="title">
                    一致性 <i @click.stop="icon('collapseItem' + i)" class="header-icon el-icon-info"></i>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
        </el-collapse>



        <div>
            <el-result title="404">
                <template slot="icon">
                    <el-image
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></el-image>
                </template>

                <template slot="title">
                    <el-button type="text" size="medium">你是不是傻逼</el-button>
                </template>
                <template slot="extra">
                    <el-button type="primary" size="medium">返回</el-button>
                </template>
            </el-result>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            activeNames: [],
            active: null,
            datalist: [1, 2]
        };
    },
    mounted() {
        this.datalist.forEach((item, i) => {
            this.$refs[`collapseItem${i}`][0].handleHeaderClick = () => {
                console.log('重写的方法');
            };
        });
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
        icon(item) {
            this.$refs[item][0].dispatch('ElCollapse', 'item-click', this.$refs[item][0]);
            this.$refs[item][0].focusing = false;
            this.$refs[item][0].isClick = true;
            console.log(this.activeNames);
        }
    }
};
</script>