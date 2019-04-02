<template>
	<codemirror ref="mirror" 
		@paste.native.prevent="pasteUpload" 
		@drop.native.prevent="handleDrop"
		:value="value"
		:options="options" 
		@change="inputText"
	/>
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
		options(){
			return {
				mode:"markdown",
				tabSize: 2,
				styleActiveLine: true, // 当前行背景高亮
				lineNumbers: true,
				lineWrapping: true,
				foldGutter:true,
				autofocus:true,
				matchBrackets:true,
				// extraKeys: { "Tab": "autocomplete" },
				extraKeys: {
					'Ctrl-S':()=>{
						this.$emit("save")
					},
					'Ctrl-O':()=>{
						this.$emit("openFile")
					},
					'Ctrl-N':()=>{
						this.$emit("newFile")
					},
					'Ctrl-P':()=>{
						this.$emit("changePreview")
					}
				},
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
		inputText(data){
			this.$emit("input",data)
		},
		// 实现文件拖拽上传
		async handleDrop(e){
			e.preventDefault()
			e.stopPropagation()
			const file=e.dataTransfer.files[0]
			if((file.name.split('.').pop().toLowerCase())=="md"){
				return
			}
			this.uploads(file)
		},
		insertContent(datas){
			this.editor.replaceSelection(datas)
		},
		insertImg(names,url){
			const img=`![${names}](${url})\r\n`
			this.editor.replaceSelection(img)
		},
		async uploads(file){
			const res=await uploader(file)
				if(res.fileInfo.isImage){
					this.insertImg(res.fileInfo.fileName,res.fileUrl)
				}else{
					this.insertContent(`附件：[${res.fileInfo.fileName}](${res.fileUrl})`)
				}
		},
		pasteUpload(e){
			var cbd = e.clipboardData;
			var ua = window.navigator.userAgent;

			// 如果是 Safari 直接 return
			if ( !(e.clipboardData && e.clipboardData.items) ) {
				return;
			}
			
			// Mac平台下Chrome49版本以下 复制Finder中的文件的Bug Hack掉
			if(cbd.items && cbd.items.length === 2 && cbd.items[0].kind === "string" && cbd.items[1].kind === "file" &&
				cbd.types && cbd.types.length === 2 && cbd.types[0] === "text/plain" && cbd.types[1] === "Files" &&
				ua.match(/Macintosh/i) && Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49){
				return;
			}

			for(var i = 0; i < cbd.items.length; i++) {
				var item = cbd.items[i];
				if(item.kind == "file"){
					var blob = item.getAsFile();
					if (blob.size === 0) {
						return;
					}
					this.uploads(blob)
					// blob 就是从剪切板获得的文件 可以进行上传或其他操作
				}
			}
		}
	},

	mounted() {
		// window.addEventListener("drop",this.handleDrop)
		this.$bus.$on("insert",this.insertContent)
		this.$bus.$on("insertImg",this.insertImg)
	},
	beforeDestroy() {
		// window.removeEventListener("drop",this.handleDrop)
		this.$bus.$off("insert",this.insertContent)
	}
})
</script>
