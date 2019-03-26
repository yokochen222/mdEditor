<template>
	<div class="tool-bar">
		<images/>
		<annex/>
		<links/>
		<tables/>
		<dates/>
		<preview/>
	</div>
</template>
<script>
import {mapMutations,mapGetters} from "vuex"
import preview from "./preview"
import images from "./images"
import links from "./link"
import annex from "./annex"
import tables from "./table"
import dates from "./date"

export default {
	components:{
		images,
		preview,
		links,
		tables,
		annex,
		dates
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
