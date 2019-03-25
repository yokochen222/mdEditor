<template>
	<div class="md-body">
		<MarkdownItVue :content="editorContent"/>
	</div>
</template>
<script>
import MarkdownItVue from 'markdown-it-vue'
import {mapGetters} from "vuex"
export default {
	components:{
		MarkdownItVue
	},
	computed:{
		...mapGetters("Editor",["editorContent"])
	}
}
</script>
<style lang="less" scoped>
	.md-body{
		padding:5px 15px;
		max-width: 668px;
		margin: 0 auto;
	}
</style>
