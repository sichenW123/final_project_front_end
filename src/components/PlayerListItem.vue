<template>
    <a class="list-group-item m-auto d-flex w-60  align-items-center list-group-item-action row" v-bind:href="player._source.url">
        <img v-bind:src="player._source.img" class="rounded mb-sm-1"/>
        <div  class="col-2"> {{player._source.name}}</div>
        <div class="col-5"> Age: {{player._source.age}}</div>
        
        <div class="fixed-right"> Club: {{player._source.club}}</div>
    </a>
</template>

<script>
export default {
     name: "PlayerListItem",
    components: {
    },
    methods:{
        
    },
    props: ["player"],
}
</script>

<style>

</style>
