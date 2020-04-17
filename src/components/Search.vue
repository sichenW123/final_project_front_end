<template>
  <div class="container">
    <nav class="navbar navbar-light justify-content-center">
      <form class="form-inline" @submit.prevent="searchMovie">
        <input class="form-control mr-sm-2" type="text" v-model="title" name="title" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
    
  </div>
</template>

<script>
export default {
    name: "Search",
    data(){
        return{
            title:''
        }
    },
    methods: {
        searchMovie(){
            const title=this.title
            this.$emit('setPage', 1)
            this.$emit('search', title)
            this.title=''
        }
    }
}
</script>



