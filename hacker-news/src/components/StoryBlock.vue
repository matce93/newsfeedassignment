<!--html-->
<template>
  <div> 
    <v-list two-line> 
      <v-list-tile
        v-if="story.title"
        :key="story.title"
      >
        <!--shows title of story and creates hyperlink to page-->      
        <a :href="story.url"> {{story.title}}</a>
      </v-list-tile>
      <!--displays story data on one line and comment links to interal page with unique ID-->
      <v-card-text style="padding-top: 0px">
        Karma: {{story.points}} | Author: {{story.author}} | Comments: <router-link v-bind:to="'/comments/' + story.objectID">{{story.num_comments}}</router-link>
      </v-card-text>
    </v-list>
  </div>
</template>

<!--js-->
<script>
  
export default {
  name: 'StoryBlock',
  props: [
    'story'
  ],
  data() {
    return {}
  }
}
</script>


