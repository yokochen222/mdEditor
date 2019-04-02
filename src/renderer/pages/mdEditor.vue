<template>
	<div class="md-editor-main">
		<div class="tool-bar-warp">
			<tool-bar/>
		</div>
		<div :class="['md-editor-container',{'preview':preview}]">
			<div class="md-layout-item editor-main ">
				<editor 
					@save="saveContent"
					v-model="content"
					@changePreview="setPreview"
				/>
			</div>
			<div class="md-layout-item preview-warp scroll">
				<mdPreview v-model="content"/>
			</div>
		</div>
		<div class="md-file-info" v-text="path"></div>
		
	</div>
</template>
<script>
import toolBar from "@/components/toolBar"
import editor from "@/components/editor"
import mdPreview from "@/components/mdPreview"


import {mapGetters,mapMutations} from "vuex"
import {readText,saveText,saveNewDoc,pickMDfile} from "@/utils/NotePad"

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
	watch: {
		$route(){
			this.getQuerys()
		}
	},
	computed:{
		...mapGetters("Editor",["preview"]),
		path(){
			return this.$route.query.path
		}
	},
	methods:{
		...mapMutations("Editor",["changeTitle","changePreview"]),
		getQuerys(){
			const path=this.$route.query.path
			const fileName=this.$route.query.fileName
			if(path&&fileName){

				this.changeTitle(path)

				this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
				this.content=readText(path)
				this.$Spin.hide();
			}
		},
		saveContent(){
			if(this.$route.query.path&&this.$route.query.fileName){
				this.$Notice.destroy()
				saveText(this.content,this.$route.query.path).then(()=>{
					this.$Notice.success({
						title:"系统提示",
						duration: 1,
						desc:"文件保存成功！"
					})
				})
			}else{
				this.saveNewDoc()
			}
		},
		saveNewDoc(){
			saveNewDoc(this.content).then((res)=>{
				this.$router.push({
					path:"/editor",
					query:{
						fileName:res.fullName,
						path:res.path
					}
				})
			})
		},
		setPreview(){
			this.changePreview()
		}
	},
	mounted(){
		this.changeTitle("")
		this.getQuerys()
		this.$bus.$on("saveContent",this.saveContent)
	},
	beforeDestroy(){
		this.$bus.$off("saveContent",this.saveContent)
	}
}
</script>

<style lang="less" scoped>
	@tool-height:39px;
	@md-file-info-height:24px;
	.md-editor-main{
		.md-editor-container{
			display: flex;
			position: absolute;
			top:@tool-height + 30px;
			bottom: @md-file-info-height;
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
		.md-file-info{
			height: @md-file-info-height;
			line-height: @md-file-info-height;
			background: #ececec;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: hidden;
			padding: 0 5px;
			user-select: none;
			color: #aaa;
			cursor: default;
		}
	}
</style>
