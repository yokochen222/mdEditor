<template>
	<ul class="tool-bar">
		<li 
			class="tool-item" 
			v-for="(tool,index) in toolBar" 
			:key="index" 
			v-html="tool.icon"
			:title="tool.title"
		></li>
	</ul>
</template>
<script>
export default {
	props:{
		toolBar:{
			type:Array,
			default(){
				return [
					{
						icon:`<i class="iconfont icon-bold"></i>`,
						title:"加粗"
					},
					{
						icon:`<i class="iconfont icon-xietiim"></i>`,
						title:"斜体"
					},
					{
						icon:`<i class="iconfont icon-biaoge"></i>`,
						title:"表格"
					},
					{
						icon:`<i class="iconfont icon-richtextnumberedlist"></i>`,
						title:"有序列表"
					},
					{
						icon:`<i class="iconfont icon-richtextbulletedlist"></i>`,
						title:"无序列表"
					},
					{
						icon:`<i class="iconfont icon-quotation_marks"></i>`,
						title:"引用"
					},
					{
						icon:`<i class="iconfont icon-tupian"></i>`,
						title:"插入图片"
					},
					{
						icon:`<i class="iconfont icon-preview"></i>`,
						title:"预览"
					},
					{
						icon:`<i class="iconfont icon-bangzhu"></i>`,
						title:"帮助"
					}
				]
			}
		}
	}
}
</script>

<style lang="less">
	.tool-bar{
		background: #fff;
		display: flex;
		justify-content: flex-start;
		border-bottom: 1px solid #eee;
		.tool-item{
			width: 30px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			padding: 4px;
			box-sizing: content-box;

			.iconfont{
				width: 30px;
				height: 30px;
				line-height: 28px;
				text-align: center;
				display: block;
				border: 2px solid transparent;
				font-size: 17px;
				cursor: pointer;
				color: #2c3e50;
				box-sizing: border-box;
				&:hover{
					border: 2px solid #eee;
					border-radius: 2px;
				}
			}
		}
	}
</style>
