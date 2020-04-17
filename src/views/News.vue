<template>
  <div class="container">
    
    
    <div >
      
      <Autocomplete class="middle" />
      <!-- <SearchNews /> -->
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <teamList v-bind:teams="teams" v-if="!this.teams.length==0" />
      <br>
      <br>
      <br>
      <PlayerList v-bind:players="players" v-if="!this.players.length==0" />
      <br>
      <br>
      <br>
     
      <b-dropdown id="dropdown-dropright" dropright text="Search By" variant="light" class="m-2" v-if="!this.newses.length==0">
        <b-dropdown-item href="#" v-on:click=" setStatus('date') ">By Date</b-dropdown-item>
        <b-dropdown-item href="#" v-on:click=" setStatus('rel')" >By Relevence</b-dropdown-item>
        <b-dropdown-item href="#" v-on:click=" setStatus('tag')" >By Tags</b-dropdown-item>
      </b-dropdown>
      <NewsList   v-bind:newses="newses"/>
      <br>
      <br>
      <br>
      <NextPage v-if="!this.newses.length==0" />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src



import NewsList from '../components/NewsList'
import NextPage from '../components/NextPage'
import teamList from '../components/teamList'
import PlayerList from '../components/PlayerList'
import Autocomplete from '../components/Autocomplete'

export default {
  name: 'news',
  components: {
   
    NewsList,
    NextPage,
    teamList,
    Autocomplete,
    PlayerList
  },
  data(){
    console.log(this.status)
      return{
          query:'',
          newses: [],
          page: 1,
          status:1,
          teams:[],
          players:[]
      }
  },
  watch:{
    '$route.query.search':{
      immediate: true,
      async handler(value){
        console.log(this.query)
        const status=this.$route.query.status
        
        if(value!==undefined){
          fetch(`http://localhost:5000/api/search/player?q=${value}`)
              .then(response=> response.json())
              .then(response=>{
            console.log(response)
            this.players=response})
          fetch(`http://localhost:5000/api/search/team?q=${value}`)
              .then(response=> response.json())
              .then(response=>{
            console.log(response)
            this.teams=response})
          fetch(`http://localhost:5000/api/search/${status}?q=${value}&p=1`)
            .then(response=> response.json())
            .then(response=>{
              console.log(response, this.query)
              this.newses=response})
        }
        
      }
    },
    '$route.query.status':{
      immediate: true,
      async handler(value){
        console.log(this.query)
        const query=this.$route.query.search
        if(value!==undefined){
          fetch(`http://localhost:5000/api/search/${value}?q=${query}&p=1`)
            .then(response=> response.json())
            .then(response=>{
              console.log(response, this.query)
              this.newses=response})
        }
      }
    },
    '$route.query.page':{
      immediate: true,
      async handler(value){
        console.log(this.query)
        const query=this.$route.query.search
        const status=this.$route.query.status
        if(value!==undefined){
          fetch(`http://localhost:5000/api/search/${status}?q=${query}&p=${value}`)
            .then(response=> response.json())
            .then(response=>{
              console.log(response, this.query)
              this.newses=response})
        }
      }
    }
  },

  methods:{
    setStatus(status){
      const route={
                name:'news'
            }
            
            route.query={
                search: this.$route.query.search,
                status: status,
                page:1
                
            }
            this.$router.push(route)
    },
      setPage(p){
        this.page=p
      },
  },
  
}
</script>
@import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');
<style scoped>
  .middle{
  margin: 0px auto;
  margin-top: 0px;
  width: 400px;
}
  .gutu{
    font-family: 'Gotu', sans-serif;
  }

</style>

