<template>
    <div>
        
        <ul class="list-group" >
            <div class="list-gruop-item">
                <router-link  :to="{ name: 'players', params: { query: this.$route.query.search }}" class="float-right" >More Players</router-link>
            </div>
            <PlayerListItem v-bind:player="player" v-bind:key="player._id" v-for="player in players"/>
        </ul>
        
    </div>
</template>

<script>
import PlayerListItem from './PlayerListItem'
export default {
    name:"PlayerList",
    components:{
        PlayerListItem
    },
    data(){
        return{
            sec:window.location.href.split('/')[4]
        }
    },
    methods:{
        show(){
            return window.location.href.split('/')[4]!=='players'
        }
    },
    
    props: ["players"]
}
</script>

<style>

</style>
