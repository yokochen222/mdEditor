<template>
	<div class="md-body scroll">
		<MarkdownItVue :content="value"/>
	</div>
</template>
<script>
import MarkdownItVue from 'markdown-it-vue'
export default {
	props:{
		value:{
			type:String,
			default(){
				return {}
			}
		}
	},
	components:{
		MarkdownItVue
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
