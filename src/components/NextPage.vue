<template>
    <div >
        <span class="btn btn-light float-left" v-on:click="goToNext(-1)" v-if="this.$route.query.page>1" >&#8592;</span>
        <span class="btn btn-light float-right" v-on:click="goToNext(1)">&#8594;</span>
        
    </div>
</template>

<script>
export default{
    name: "NextPage",
    data(){
        return{

        }
    },
    components:{

    },
    methods:{
      goToNext(step){
        const route={
            name:'news'
        }
        var curPage=parseInt(this.$route.query.page)
        if(curPage+step>=1){
            route.query={
            search: this.$route.query.search,
            status: this.$route.query.status,
            page:curPage+step
            
        }
        this.$router.push(route)
        }
            
      },
    },
    props:['page']
}
</script>