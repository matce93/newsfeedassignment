<template>
  <div :style="indent" >
    <v-container>
    	<v-layout row wrap>
    		<v-flex xs1> <!--divides the space into 12ths and gives 1/12 to the button-->
    			<!--button allows children comments to be hidden-->
				<button @click="toggleChildren">
			    	<div v-if="showChildren">[-]</div>
			    	<div v-else>[+]</div>
			    </button>    			
    		</v-flex>
    		<v-flex xs11> <!--other 11/12-->
    			<!--loops through all comments-->
			  <div v-for="comment in children" :key="comment.id">
			  <!--displays author and time since creation using moment--> 
			    <font size="+1">{{comment.author}} | {{createdAt(comment.created_at)}}</font>
			    <div v-html="comment.text"></div> <!--text from comments can in HTML-->
			    <!--only displays children if there are children and if the toggle (showChildren is true-->
			    <div v-if="comment.children.length > 0 && showChildren">
			    	<!--calls recursively to add all comments-->
			    	<comment-tree :children="comment.children" :depth="depth+1"></comment-tree>
			    </div>
			  </div>
    		</v-flex>
    	</v-layout>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'; //needed to display time

export default {
  name: 'CommentTree',
  methods: {
  	//used to display time from creation
    createdAt(time) {
      return moment(time).fromNow();
    },
    //used to flip on click
    toggleChildren() {
    	this.showChildren = !this.showChildren;
    }
  },
  data() {
  	return { showChildren: false }
  },
  computed: {
  	//used for adding hierarchy with recursion
  	indent() {
        return { 'padding-left': `${this.depth * 5}px` }
      }
  },
  props: {
  	//comments
  	children: {
  		type: Array,
  		required: true
  	}, 
  	//how deep the comment is in the hierarchy
  	depth: {
  		type: Number,
  		required: true
  	}
  }
}
</script>
