<template>
  <div class="container">
     

    <nav class="navbar navbar-light justify-content-center">
      <form class="form-inline"  >
        <input class="form-control mr-sm-2" type="text"  v-on:click="show=true" v-model="search" placeholder="Search">
        <input class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="searchNN" value="Search"  >
        <div></div>
            
      </form>
    </nav>
    <ul class="list-group" v-bind:key="complete._id" v-for="complete in completes">
        <button class="list-group-item" v-if="show" v-on:click="search=complete; searchNN; show=false">{{complete}}</button>
    </ul>
    
  </div>
</template>

<script>
export default {
    name: "SearchNews",
    data(){
        return{
            show:true,
            search:'',
            completes:[]
        }
    },
    watch:{
        '$route.query.search':{
            immediate: true,
            handler(value){
                this.search=value
            }
        },
        search:{
            immediate:true,
            handler(value){
                console.log("sdfa", value)
            fetch(`http://localhost:5000/api/search/completion?q=${value}`)
              .then(response=> response.json())
              .then(response=>{
            console.log(response)
            this.completes=response})
        }        
        }
    },
    methods: {
        searchNN(){
            const search = this.search
            const route={
                name:'news'
            }
            if(this.search!==''){
                route.query={
                    search: search,
                    status: 'date',
                    page:1
                }
            }
            this.$router.push(route)
            


        },
        searchN(){

            // const query=this.query
            // console.log(this.status)
            // this.$emit('getTeams', query)
            // if(this.status===1){
            //     this.$emit('setPage', 1)
                
            //     this.$emit('searchNew_Date', query)
            // }
            // else if(this.status==2){
            //     this.$emit('setPage', 1)
                
            //     this.$emit('searchNew_Rel', query)
            // }
            // else if(this.status==3){
            //     this.$emit('setPage', 1)
                
            //     this.$emit('searchNew_Tag', query)
            // }
        }
    },
    
}
</script>

<style scoped>

</style>



