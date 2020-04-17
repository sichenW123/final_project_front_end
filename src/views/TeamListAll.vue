<template>
    <div class="container">
        <div>Results for {{query}}</div>
        <teamList v-bind:teams="teams" />
    </div>
    
</template>
<script>

import teamList from '../components/teamList'
export default {
    name:"teamListAll",
    components:{
        teamList
    },
    data(){
        const path=window.location.href.split('/')
        const query=path[5]
        console.log(query)
        return{
            query:query,
            teams:[],
            
        }
    },
    created(){
        
        fetch(`http://localhost:5000/api/search/team/all?q=${this.query}`)
                .then(response=> response.json())
                .then(response=>{
                console.log(response)
                this.teams=response})
    }
   
}




</script>

<style>

</style>
