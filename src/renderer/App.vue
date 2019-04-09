<template>
    <div id="app">
        <md-header/>
        <div class="main-layout">
            <div class="main-view">
                <!-- <pre>{{data1}}</pre>
                <pre>{{data2}}</pre>
                <pre>{{data3}}</pre>
                <pre>{{datas}}</pre> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import mdHeader from "@/components/mdHeader"
    export default {
        name: 'mdeditor',
        components:{
            mdHeader
        },
        data(){
            return {
                datas:"",
                data1:"",
                data2:"",
                data3:""
            }
        },
        mounted(){
            const res=JSON.stringify(process.argv)
            var params = process.argv.slice(2)
            
            this.datas=params
            this.data1=process.argv[0]
            this.data2=process.argv[1]
            this.data3=process.argv[2]

        }
    }
</script>

<style lang="less" scoped>
    #app{
        @header-height:30px;
        @source-manager-width:240px;
        @border-color:#eee;
        position: relative;
        .main-layout{
            .main-view{
                // position: absolute;
                // top:@header-height + 4px;
                // bottom: 0;
                // left: @source-manager-width;
                // right: 0;
            }
        }
    }
</style>
