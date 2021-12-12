<template>
        <el-menu
            background-color="#333744"
            text-color="#fff"
            :router="true"
            active-text-color="#409EFF"
            style="width:200px"
            :collapse-transition="false"
            :collapse="isCollapse">
            <NavMenu :getMenuList="getMenuList"></NavMenu>
        </el-menu>
</template>

<script>
import NavMenu from '../components/NavMenu'
export default {
    name: 'Menu',
    props: ['isCollapse'],
    components:{NavMenu},
    data(){
        return {
            getMenuList:[],
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

<style scoped>

</style>
