<template>
	<codemirror ref="mirror" :value="editorContent"  :options="options" @change="inputText"/>
</template>
<script>

// <!-- CodeMirror支持不同语言，根据需要引入JS文件 -->
// <!-- 因为HTML混合语言依赖Javascript、XML、CSS语言支持，所以都要引入 -->
require("codemirror/mode/javascript/javascript.js")
require("codemirror/mode/xml/xml.js")
require("codemirror/mode/css/css.js")
require("codemirror/mode/htmlmixed/htmlmixed.js")
require("codemirror/mode/markdown/markdown.js")

// <!-- 下面分别为显示行数、括号匹配和全屏插件 -->
require("codemirror/addon/selection/active-line.js")
require("codemirror/addon/edit/matchbrackets.js")
require("codemirror/addon/display/fullscreen.js")

require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/show-hint.css')
require('codemirror/addon/hint/javascript-hint.js')

require('codemirror/keymap/sublime.js')
import uploader from "@/utils/upload"

import {mapMutations,mapGetters} from "vuex"
export default({
	props:{
		value:{
			type:String,
			default:""
		}
	},
	computed:{
		...mapGetters("Editor",["editorContent"]),
		options(){
			return {
				mode:"markdown",
				tabSize: 2,
				styleActiveLine: true, // 当前行背景高亮
				lineNumbers: true,
				lineWrapping: true,
				foldGutter:true,
				matchBrackets:true,
				// extraKeys: { "Tab": "autocomplete" },
				// extraKeys: {'Ctrl-Space':'autocomplete'},
				gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
				height:5000,
				keyMap:"sublime"
			}
		},
		editor(){
			return this.$refs.mirror.editor
		}
	},
	data(){
		return {}
	},
	methods: {
		...mapMutations("Editor",["setEditorContent"]),
		inputText(data){
			this.setEditorContent(data)
		},
		// 实现文件拖拽上传
		async handleDrop(e){
			e.preventDefault()
			e.stopPropagation()
			const file=e.dataTransfer.files[0]
			if((file.name.split('.').pop().toLowerCase())=="md"){
				console.log("md file")
			}else{
				const res=await uploader(e.dataTransfer.files[0])
				this.insertImg(res.fileUrl)
			}
		},
		insertContent(datas){
			this.editor.replaceSelection(datas)
		},
		insertImg(url){
			let img=`![alt](${url})\r\n`
			this.editor.replaceSelection(img)
		}
	},
	mounted() {
		window.addEventListener("drop",this.handleDrop)
		this.$bus.$on("insert",this.insertContent)
		this.$bus.$on("insertImg",this.insertImg)
	},
	beforeDestroy() {
		window.removeEventListener("drop",this.handleDrop)
		this.$bus.$off("insert",this.insertContent)
	}
})
</script>
<style lang="less" scoped>
	
</style>
