<template>
    <div class="md-editor-storage">
        <div class="scroll">
            <Row :gutter="15">
                <Col 
                    :xs="24" 
                    :sm="12" 
                    :md="8" 
                    :lg="6" 
                    :xl="4" 
                    v-for="(file,idx) in datas"
                    :key="file.hash"
                >
                    <div class="file-item">
                        <div class="thumb">
                            <img :src="domain+file.hash" alt="">
                        </div>
                        <div class="file-info">
                            <p>类型：<span>{{file.mimeType}}</span></p>  
                            <p>大小：<span>{{file.fsize|fileSize}}</span></p>  
                            <p>存储：<span>{{file.putTime|formatTime}}</span></p>
                        </div>
                        <div class="file-controll">
                            <Button 
                                @click="doCopy(domain+file.hash)"
                                class="copy" 
                                size="small"
                                title="复制文件地址"
                            >
                                <i class="iconfont icon-copy"></i>
                            </Button>
                            <Poptip
                                confirm
                                title="删除后其他引用该文件的地址将失效，是否继续？"
                                placement="bottom-start"
                                @on-ok="dropFile(file.key,idx)"
                            >
                                <Button 
                                    size="small"
                                    title="从仓库删除文件"
                                >
                                    <i class="iconfont icon-shanchu"></i>
                                </Button>
                            </Poptip>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div class="more" @click="fetchList" v-if="next">
            <div class="more-button" v-text="tips"></div>
        </div>
    </div>
</template>
<script>
import {getFileList,dropFile} from "@/utils/QINIU"
// import Clipboard from 'clipboard'
export default {
    data(){
        return {
            datas:[],
            next:"",
            limit:16,
            tips:"加载更多"
        }
    },
    filters:{
        fileSize(val){
            let fmt=(val/1024).toFixed(2)+"kb"
            return fmt
        },
        formatTime(val){
            let time = new Date(val/10000)
            let y = time.getFullYear()//年
            let m = time.getMonth() + 1//月
            let d = time.getDate()//日
            let h = time.getHours()//时
            let mm = time.getMinutes()//分
            let s = time.getSeconds()//秒
            m=m<10?"0"+m:m
            d=d<10?"0"+d:d
            h=h<10?"0"+h:h
            s=s<10?"0"+s:s
            let res=y+"-"+m+"-"+d+" "+h+":"+mm+":"+s
            return res
        }
    },
    computed:{
        domain(){
            return window.localStorage.getItem("QINIU_DOMAIN")+"/"
        }
    },
    methods:{
        doCopy(text){
            this.$copyText(text).then((e)=>{
                this.$Notice.destroy()
                this.$Notice.success({
                    duration:2,
                    title:"系统提示",
                    desc:"文件地址复制成功!"
                })
            },(e)=>{
                this.$Notice.destroy()
                this.$Notice.error({
                    duration:2,
                    title:"系统提示",
                    desc:"文件地址复制失败!"
                })
            })
        },
        dropFile(key,idx){
            dropFile(key).then((res)=>{
                this.$Notice.success({
                    duration:2,
                    title:"系统提示",
                    desc:"文件删除成功!"
                })
                this.datas.splice(idx,1)
            }).catch((e)=>{
                this.$Notice.error({
                    title:"系统提示",
                    desc:"文件删除失败：<br/>"+e
                })
            })
        },
        fetchList(){
            this.tips="加载中..."
            getFileList(this.limit,this.next).then((res)=>{
                this.datas.push(...res.datas)
                this.next=res.nextMarker
                this.tips="加载更多"
            }).catch((e)=>{
                this.$Notice.error({
                    title:"系统提示",
                    desc:"文件加载失败请检查是否配置七牛云上传：<br/>"+e
                })
            })
        }
    },
    mounted(){
        this.fetchList()
        // const  clipboard = new Clipboard('.copy')
    }
}
</script>
<style lang="less" scoped>
    .md-editor-storage{
        overflow: auto;
        box-sizing: content-box;
        padding: 40px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        &::-webkit-scrollbar {/*滚动条整体样式*/
            width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: #535353;
        }
        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 5px;
            background: #EDEDED;
        }
        .file-item{
            height: 250px;
            overflow: hidden;
            padding: 10px;
            box-sizing: content-box;
            background: #fff;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 2px;
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            .thumb{
                height: 130px;
                overflow: hidden;
                margin-bottom: 10px;
                border-bottom: 1px solid #eee;
                img{
                    display: block;
                    max-width: 100%;
                    margin: 0 auto;
                }
            }
            .file-info{
                font-size: 13px;
                height: 70px;
                p{
                    margin-bottom: 2px;
                    color: #aaa;
                    span{
                        color: #333;
                    }
                }
            }
            .file-controll{
                color: #0087ff;
                cursor: pointer;
                border-top: 1px dashed #eee;
                padding-top: 10px;
            }
        }

        .more{
            // text-align: center;
            .more-button{
                display: inline-block;
                padding:5px 15px;
                background: #fff;
                border: 1px solid #eee;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
</style>
