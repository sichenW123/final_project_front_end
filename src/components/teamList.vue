<template>
    <div>
       
        <div class="list-group" >
             <div class="list-gruop-item">
                <router-link  class="float-right" :to="{ name: 'teams', params: { query: this.$route.query.search }}">More Teams</router-link>
            </div>
            <teamListItem v-bind:team="team"  v-bind:key="team._id" v-for="team in teams"/>
        </div>
        
    </div>
</template>

<script>
import teamListItem from './teamListItem'
export default {
  name: "teamList",
  components: {
      teamListItem
  },
  props: ["teams"]
  
}
</script>

