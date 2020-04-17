<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>




<script>
import Header from './components/layout/Header';
export default {
  name:"app",
  components: {
    Header
  },
  provide(){
    return {
      reload:this.reload
      }
  },
  data(){
    return {
      isRouterAlive: true
    }
    
  },
  methods:{
    reload(){
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true
      })
    }
  }
}
</script>
<style>

</style>

