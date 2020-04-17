<template>
<div class="container">
  <div class="autocomplete" >
    <!-- <div class="input" ></div>
    <div class="placeholder"></div>
    <button class="close" >x</button> -->
    <div class="popover" >
      <input type="text"
        ref="input"
        v-model="search"
        @keydown.enter="searchNN"
        @click="show=true"
        placeholder="Players, Clubs or Both...">
      <div class="options" ref="optionsList" v-if="show" >
        <ul>
          <li v-for="complete in completes" 
            v-bind:key="complete._id"
            @click="select(complete)"
            >{{complete}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props: {
      
    },
    data() {
      return {
        show:false,
            search:'',
            completes:[]
      };
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
            this.show=false
            this.$router.push(route)
       },

       select(c){
          this.search=c
          this.searchNN()
          
       }
    },
    computed: {
    }
  }
</script>

<style scoped>
.autocomplete {
    width: 100%;
    position: relative;
}
.input {
    height: 40px;
    /* border-radius: 3px;
    border: 2px solid lightgray; */
    box-shadow: 0 0 10px #eceaea;
    font-size: 25px;
    padding-left: 10px;
    padding-top: 10px;
    cursor: text;
}
.close {
    position: absolute;
    right: 2px;
    top: 4px;
    background: none;
    border: none;
    font-size: 30px;
    color: lightgrey;
    cursor: pointer;
}
.placeholder {
    position: absolute;
    top: 11px;
    left: 11px;
    font-size: 25px;
    color: #d0d0d0;
    pointer-events: none;
}
.popover {
    min-height: 50px;
    border: 2px solid lightgray;
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 3px;
    text-align: center;
}
.popover input {
    width: 95%;
    margin-top: 5px;
    height: 40px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid lightgray;
    padding-left: 8px;
}
.options {
    max-height: 150px;
    overflow-y: scroll;
    margin-top: 5px;
}
.options ul {
    list-style-type: none;
    text-align: left;
    padding-left: 0;
}
.options ul li {
    border-bottom: 1px solid lightgray;
    padding: 10px;
    cursor: pointer;
    background: #f1f1f1;
}
.options ul li:first-child {
    border-top: 2px solid #d6d6d6;
}

.options ul li:not(.selected):hover {
    background: #8c8c8c;
    color: #fff;
}
.options ul li.selected {
    background: #58bd4c;
    color: #fff;
    font-weight: 600;
}
</style>

