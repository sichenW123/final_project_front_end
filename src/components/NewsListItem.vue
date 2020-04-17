<template>
    <!-- <li class="list-group-item"> -->
    <!-- <a class="list-group-item list-group-item-action" v-bind:href="news._source.url">
        <div class="row">
             
            <img  v-bind:src="news._source.img" class="rounded float-left"/>
            <div class="float-right">
                <div class="d-flex w-100 justify-content-between">
                    <span class="mb-1">{{ news._source.title }}</span>
                </div>
                <p class="mb-1" v-html="news.highlight.content[0]"></p>
                <small class="text-muted float-right">{{ news._source.date }}</small>
            </div>
        </div>
    </a> -->

    <a class="list-group-item d-flex m-auto justify-content-between align-items-center list-group-item-action row" v-bind:href="news._source.url">
        <div class="image-parent col-3">
              <img v-bind:src="news._source.img" class=" rounded" alt="quixote">
          </div>
          <div class=col-1> </div>
          <div class="float-right col-8">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 text-primary">{{ news._source.title }}</h5>
                </div>
                <br>
                <div v-if=news.highlight>
                    <p class="mb-1" v-html="'... '+news.highlight.content[0]+' ...'"></p>
                    <p class="mb-1" v-html="news.highlight.content[1]?'... '+news.highlight.content[1]+' ...':''"></p>
                </div>
                
                <small class="text-muted float-right float-bottom">{{ parseTime(news._source.date) }}</small>
          </div>
        </a>
        <!-- <a > 
            <img v-bind:src="news._source.img" class="rounded float-left"/>
            <h4>{{ news._source.title }}</h4>
            <p class="mb-1" v-html="news.highlight.content[0]"></p>
            
            <small>{{ news._source.date }}</small>
        </a>
        
    </li> -->
</template>

<script>
export default{
    name: "NewsListItem",
    components: {
    },
    methods:{
        parseTime(time){
            return time.split("T")[0];
        }
    },
    props: ["news"],
}
</script>