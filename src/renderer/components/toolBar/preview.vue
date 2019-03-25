<template>
    <div class="tool-item" title="预览" @click="clicked">
        <i class='iconfont icon-icon-eye-open'></i>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    computed:{
		...mapGetters("Editor",["preview","editorContent"])
	},
    methods:{
		...mapMutations("Editor",["changePreview","insertImg"]),
        clicked(){
           this.changePreview()
        }
    }
}
</script>
