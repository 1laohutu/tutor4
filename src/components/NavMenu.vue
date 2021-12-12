<template>
  <div>
      <div v-for="item in getMenuList" :key="item.id">
          <el-submenu :index="item.id" v-if="item.child&&item.child.length>0">
              <template slot="title">
                  <i :class="item.icon" style="margin-right:16px;"></i>
                  {{ item.name }}
              </template> 
              <NavMenu :getMenuList="item.child"></NavMenu>
          </el-submenu>
          <el-menu-item :index="item.id" v-else>
              <i :class="item.icon" style="margin-right:16px;"></i>
              {{ item.name }}
          </el-menu-item>
      </div>
  </div>
</template>

<script>
export default {
    name: "NavMenu",
    props:{
        getMenuList:{
            type: Array,
            default: () => {
                return [];
            }
        }
    }
}
</script>

<style>

</style>