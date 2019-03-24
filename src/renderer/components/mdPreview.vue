<template>
	<div class="md-body">
		<MarkdownItVue :content="value"/>
	</div>
</template>
<script>
import MarkdownItVue from 'markdown-it-vue'
export default {
	components:{
		MarkdownItVue
	},
	props:{
		value:{
			type:String,
			default:""
		}
	}
}
</script>
<style lang="less" scoped>
	.md-body{
		padding:5px 15px;
		font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
	}
</style>
