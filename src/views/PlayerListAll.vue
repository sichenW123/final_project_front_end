<template>
    <div class="container">
        <div>Results for "{{query}}"</div>
        <PlayerList v-bind:players="players" v-if="!this.players.length==0" />
    </div>
    
</template>

<script>
import PlayerList from '../components/PlayerList'
export default {
    name:"PlayerListAll",
    components:{
        PlayerList
    },
    data(){
        const path=window.location.href.split('/')
        const query=path[5]
        return{
            query:query,
            players:[],
        }
    },
    created(){
        
        fetch(`http://localhost:5000/api/search/player/all?q=${this.query}`)
                .then(response=> response.json())
                .then(response=>{
                console.log(response)
                this.players=response})
    }
}
</script>

<style>

</style>
