<!--html-->
<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>
          Front Page
        </h1>
        <v-list two-line> 
          <!--loops through all stories on the hacker newsfeed front pg-->
          <template v-for="story in newsfeed"> 
            <storyBlock :story="story" :key="story.objectID"></storyBlock>
          </template>
        </v-list>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!--js-->
<script>
import axios from 'axios';  //needed for fetching data
import storyBlock from './StoryBlock'; //formates the data displayed

const newsFeedUrl = 'http://hn.algolia.com/api/v1/search?tags=front_page';

export default {
  name: 'FrontPage',
  props: {
    msg: String
  },
  components: {
     storyBlock //needed for formating
  },
  created() {
    this.fetchNewsFeed();  //retrieves data from newfeed API
  },
  methods: {
    //uses promises to retrieve data, save and display to console
    async fetchNewsFeed() {
      const { data } = await axios.get(newsFeedUrl);
      // eslint-disable-next-line
      console.log(data)  //the comment aboves hides error from this line
      this.newsfeed = data.hits;
    }
  },
  data() {
    return {
      newsfeed: []
    }
  }
}
</script>

<!--css-->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
