<template>
  <div>
    <h1>
      Comment Page
    </h1>
    <comment-tree :children="children" :depth="0"></comment-tree>
  </div>
</template>

<script>
import axios from 'axios'; //needed for fetching comments
import CommentTree from './CommentTree'; //allows page to be populated

const storyUrl = 'https://hn.algolia.com/api/v1/items/';


export default {
  name: 'CommentsPage',
  components: {
    CommentTree //used to populate page with comments
  },
  created() {
    this.fetchCommentFeed()  //calls method to get data
  },
  methods: {
    //uses promises to retrieve data, save and display to console
    async fetchCommentFeed() {
      //this.id is unique to each page
      const { data } = await axios.get(storyUrl + this.id);
      // eslint-disable-next-line
      console.log(data) //the comment aboves hides error from this line
      this.children = data.children;
    }
  },
  data () {
    return {
      children: [],
      //used to keep track of objectID
      id: this.$route.params.id
    }
  }
}
</script>
