<template>
    <div class="md-source-manager">
        <div class="md-title">资源管理器</div>
        <div class="source-tree">
            <Tree :data="three"></Tree>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            three:[
                {
                    title: 'parent 1',
                    expand: true,
                    children: [
                        {
                            title: 'parent 1-1',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'parent 1-2',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .md-source-manager{
        .md-title{
            padding:7px 15px;
            border-bottom: 1px solid #eee;
        }
        .source-tree{
            padding: 0 15px;
        }
    }
</style>