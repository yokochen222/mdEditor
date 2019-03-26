<template>
    <ul class="md-win-tab">
        <router-link tag="li" class="md-win-tab-item " to="/login">登录</router-link>
        <router-link :to="item.path"
            tag="li" 
            class="md-win-tab-item "
            v-for="(item,idx) in openedRoutes"
            :key="idx"
        >
            <span v-text="item.title"></span>
            <i @click="closeTab(idx)" class="iconfont icon-baseline-close-px" title="关闭"></i>
        </router-link>
    </ul>
</template>
<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    computed:{
        ...mapGetters("Editor",["openedRoutes"])
    },
    methods:{
        ...mapMutations("Editor",["removeOpenRoutes"]),
        closeTab(idx){
            this.removeOpenRoutes(idx)
        }
    }
}
</script>
<style lang="less" scoped>
    @win-tab-height:32px;
    .md-win-tab{
        height: @win-tab-height;
        line-height: @win-tab-height;
        border-bottom: 1px solid #eee;
        padding: 0 5px;
        overflow: hidden;
        .md-win-tab-item{
            display: inline-block;
            height: @win-tab-height - 4px;
            line-height: @win-tab-height - 6px;
            border: 1px solid #eee;
            margin: 0px 0;
            padding: 0 5px;
            border-radius: 4px;
            margin-right: 5px;
            cursor: pointer;
            user-select: none;
            padding-right: 28px;
            font-size: 14px;
            position: relative;
            max-width: 140px;
            overflow: hidden;
            span{
                display: block;
                overflow: hidden;
            }
            .iconfont{
                display: none;
                position: absolute;
                top: 0;
                right: 5px;
                bottom: 0;
                margin: auto;
                width: 20px;
                height: 20px;
                line-height: 22px;
                text-align: center;
                
            }
            &:hover{
                .iconfont{
                    display: block;
                    color: #000;
                }
            }
            &.router-link-exact-active{
                color: #0072ff;
                // background: #0072ff;
                border: 1px solid #0072ff;
                &:hover{
                    .iconfont{
                        display: block;
                        color: #0072ff;
                    }
                }
            }
        }
    }
</style>
