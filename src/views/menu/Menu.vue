<template>
  <div></div>
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return {
            menuList:[]
        }
    },
    mounted(){
        this.$http.get('')
    }
}
</script>

<style>

</style>