<template>
	<div class="md-editor-main">
		<div class="tool-bar-warp">
			<tool-bar/>
		</div>
		<div :class="['md-editor-container',{'preview':preview}]">
			<div class="md-layout-item editor-main ">
				<editor @save="saveContent" v-model="content"/>
			</div>
			<div class="md-layout-item preview-warp scroll">
				<mdPreview v-model="content"/>
			</div>
		</div>
	</div>
</template>
<script>
import toolBar from "@/components/toolBar"
import editor from "@/components/editor"
import mdPreview from "@/components/mdPreview"
import {mapGetters} from "vuex"
import {readText,saveText,saveNewDoc} from "@/utils/NotePad"

export default {
	components:{
		toolBar,
		editor,
		mdPreview
	},
	data(){
		return {
			content:""
		}
	},
	computed:{
		...mapGetters("Editor",["preview"])
	},
	methods:{
		getQuerys(){
			this.content=readText(path)
		},
		saveContent(){
			
		}
	},
	mounted(){
		
	}
}
</script>

<style lang="less" scoped>
	@tool-height:39px;
	.md-editor-main{
		.md-editor-container{
			display: flex;
			position: absolute;
			top:@tool-height + 32px;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			.md-layout-item{
				height: 100%;
				overflow: hidden;
				overflow-y: scroll;
				width:50%;
			}
			.editor-main{
				overflow: hidden;
			}
		}
		.preview{
			.md-layout-item{
				height: 100%;
				width:100%;
			}
			.editor-main{
				// display: none;
			}
			.preview-warp{
				display: none;
			}
		}
	}
</style>
