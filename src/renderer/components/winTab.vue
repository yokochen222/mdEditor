<template>
    <ul class="md-win-tab">
        <li class="md-win-tab-item router-link-active">
            <span>App.vueApp.vueApp.vueApp.vue</span>
            <i class="iconfont icon-baseline-close-px"></i>
        </li>
        <li class="md-win-tab-item">
            <span>App.vue</span>
            <i class="iconfont icon-baseline-close-px"></i>
        </li>
        <li class="md-win-tab-item">
            <span>App.vue</span>
            <i class="iconfont icon-baseline-close-px"></i>
        </li>
    </ul>
</template>
<style lang="less" scoped>
    @win-tab-height:40px;
    .md-win-tab{
        height: @win-tab-height;
        line-height: @win-tab-height;
        border-bottom: 1px solid #eee;
        padding: 0 5px;
        overflow: hidden;
        .md-win-tab-item{
            background: #eee;
            display: inline-block;
            height: @win-tab-height - 8px;
            line-height: @win-tab-height - 8px;
            margin: 3px 0;
            padding: 0 5px;
            border-radius: 2px;
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
            &.router-link-active{
                color: #0087ff;
            }
        }
    }
</style>
