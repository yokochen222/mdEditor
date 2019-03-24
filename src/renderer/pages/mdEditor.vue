<template>
	<div class="md-editor-main">
		<div class="md-header-warp">
			<md-header/>
		</div>
		<div class="tool-bar-warp">
			<tool-bar/>
		</div>
		<div class="md-editor-container">
			<div class="md-layout-item scroll">
				<editor v-model="mdContent"/>
			</div>
			<div class="md-layout-item scroll">
				<mdPreview v-model="mdContent"/>
			</div>
		</div>
		<md-setting v-model="settingDrawer"/>
	</div>
</template>
<script>
import toolBar from "@/components/toolBar"
import editor from "@/components/editor"
import mdPreview from "@/components/mdPreview"
import mdHeader from "@/components/mdHeader"
import mdSetting from "@/components/mdSetting"
export default {
	components:{
		toolBar,
		editor,
		mdHeader,
		mdPreview,
		mdSetting
	},
	data(){
		return {
			mdContent:"",
			settingDrawer:true
		}
	},
	methods:{
		test(){
			
		}
	}
}
</script>

<style lang="less" scoped>
	@tool-bar-height:41px;
	@header-height:30px;
	.md-header-warp{

	}
	.tool-bar-warp{
		position: absolute;
		top: @header-height;
		left: 0;
		right: 0;
		overflow: hidden;
		height: @tool-bar-height;
	}
	.md-editor-main{
		.md-editor-container{
			outline: none;
			overflow: hidden;
			box-sizing: border-box;
			position: absolute;
			left: 0;
			right: 0;
			top: @tool-bar-height + @header-height;
			bottom: 0;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			.md-layout-item{
				width: 50%;
				height: 100%;
				overflow-y: auto;
			}
		}
	}
</style>
