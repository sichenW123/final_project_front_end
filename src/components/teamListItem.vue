<template>
    
    <a class="list-group-item m-auto d-flex w-60 align-items-center list-group-item-action row" v-bind:href="team._source.url">
        <img v-bind:src="team._source.img" class="rounded mb-1"/>
        <div class="col-7"> {{team._source.name}}</div>
        <div class="float-right ">League: {{team._source.league}}</div>
    </a>
</template>

<script>
export default{
    name: "teamListItem",
    components: {
    },
    methods:{
        parseTime(time){
            return time.split("T")[0];
        }
    },
    props: ["team"],
}
</script>