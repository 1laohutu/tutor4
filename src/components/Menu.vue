<template>
<el-row class="tac">
  <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF">
        <el-submenu :index="item.id+''" v-for="item in getMenuList" :key="item.id">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <!-- <el-menu-item :index="subItem.id" v-for="subItem in item.child" :key="subItem.id" :v-if="subItem==''">
                <i class="el-icon-menu"></i>
                <template slot="title">{{subItem.name}}</template>
            </el-menu-item> -->
            <el-submenu :index="subItem.id" v-for="subItem in item.child" :key="subItem.id">
                    <template slot="title"><i :class="subItem.icon"></i>{{subItem.name}}</template>
                    <el-menu-item :index="child.id" v-for="child in subItem.child" :key="child.id" :v-if="subItem!=''">
                        <i :class="child.icon"></i>
                        <template slot="title">{{child.name}}</template>
                    </el-menu-item>
            </el-submenu>
            <!-- <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
        </el-submenu>
      </el-menu>
    </el-row>
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return {
            getMenuList:null,
            iconsObj:{
                '1':'iconfon icon-user',
                '2':'iconfon icon-user',
                '3':'iconfon icon-user',
                '4':'iconfon icon-user',
                '5':'iconfot icon-user',
                '6':'iconfot icon-user',
                '7':'iconfot icon-user',
                '8':'iconfot icon-user'
            }
        }
    },
    mounted(){
        this.rege()
    },
    methods: {
        rege(){
             this.$http({
                 method: 'post',
                 url: 'http://127.0.0.1:8088/home/menuList'
             }).then(response=>{
                 this.getMenuList=response.data.data
             })
        }
    }
}
</script>

<style>

</style>
