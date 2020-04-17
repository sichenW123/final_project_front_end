<template>
    <div>
        <div class="list-group" v-bind:key="news._id" v-for="news in newses">
            <NewsListItem v-bind:news="news" />
        </div>
        
    </div>
</template>

<script>
import NewsListItem from './NewsListItem'
export default {
  name: "NewsList",
  components: {
      NewsListItem
  },
  props: ["newses"]
  
}
</script>

