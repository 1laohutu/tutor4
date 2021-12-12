<template>
   <el-container class="home-container">
        <el-header style="height:120px">
          <div>
            <img src="../assets/f6.png" alt="">
            <span>辅导员管理系统</span>
          </div>
          <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-container  style="height:580px">
            <el-aside :width="isCollapse?'65px':'200px'">
              <div class="toggle-button" @click="toggleCollapse">
                <i :class="isIconClass">
              </i></div>
              <Menu :isCollapse="isCollapse"></Menu>
            </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer style="height:60px;">
            </el-footer>
            </el-container>
    </el-container>
</el-container>
</template>
<script>
import Menu from '../components/Menu.vue'
export default {
  components:{
    Menu
  },
  created(){
    this.getMenuList()
  },
    name:"home",
    data(){
        return {
            menu:{
                text:"",
                level:"",
                parant:"",
                child:[],
                sequence:null,
                address:null,
                platform:null,
                iconCls:null
            },
            isCollapse:false,
            isIconClass:"el-icon-arrow-left"

        }
        },
        methods:{
          toggleCollapse(){
              this.isCollapse=!this.isCollapse
              if(this.isCollapse){
                  this.isIconClass="el-icon-arrow-right"
              }else{
                this.isIconClass="el-icon-arrow-left"
              }
          }
        }
    }
</script>
<style scoped>
 .el-header{
    background-color: #373d41;
    display:flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-family:"STXingkai";
    letter-spacing:5px;
  }
  .el-header > div{
    display: flex;
    align-items: center;
  }
  .el-footer{
    background-color: #B3C0D1;
    color: #333;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .el-header > div span{
    margin-left: 15px;
  }
  .el-aside {
    background-color: #333744;
    color: #fff;
  }
  
  .el-main {
    background-color: #EAEDF1;
    color: #333;
  }
  .home-container{
    height: 100%;
  }
  .toggle-button{
    background-color: #4A5064;
    font-size:20px;
    line-height: 34px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
</style>