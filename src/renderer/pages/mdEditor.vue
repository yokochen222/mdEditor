<template>
	<div class="md-editor-main">
		<div class="tool-bar-warp">
			<tool-bar/>
		</div>
		<div class="md-editor-container">
			<div class="md-layout-item editor-main scroll">
				<editor />
			</div>
			<div class="md-layout-item scroll" v-if="preview">
				<mdPreview />
			</div>
		</div>
	</div>
</template>
<script>
import toolBar from "@/components/toolBar"
import editor from "@/components/editor"
import mdPreview from "@/components/mdPreview"
import {mapGetters} from "vuex"
export default {
	components:{
		toolBar,
		editor,
		mdPreview
	},
	computed:{
		...mapGetters("Editor",["preview"])
	}
}
</script>

<style lang="less" scoped>
	@tool-height:39px;
	.md-editor-main{
		.md-editor-container{
			display: flex;
			position: absolute;
			top:@tool-height + 40px;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			.md-layout-item{
				height: 100%;
				flex: 1;
			}
		}
		
	}
</style>
