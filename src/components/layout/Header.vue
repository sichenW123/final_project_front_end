<template>


  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="nav-item btn-dark ml-sm-3" href="https://www.goal.com/en"><img class="nav-brand" src="../../assets/Goal_Logo.jpg" width="100px" height="69px"/></a>
      <router-link class="nav-item btn-dark ml-sm-2" v-on:click="refresh" to="/goal">GoalSearch</router-link>
      <router-link class="nav-item btn-dark ml-sm-3" to="/about">About</router-link>
      
      
      
      
    </nav>


</template>

<script>
export default {
  name: "Header",
  inject:['reload'],
  methods:{
    refresh(){
      this.$router.go(0)
    }
  }
}

</script>