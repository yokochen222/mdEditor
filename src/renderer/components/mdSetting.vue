<template>
    <Drawer title="编辑器设置" placement="right" :closable="true" v-model="showDrawer" @on-close="closeModal">
        <section class="md-set-section">
            <h3 class="md-set-title">七牛云存储设置</h3>
            <Form  label-position="top" :model="forms" :rules="rules" ref="setForm">
                <FormItem label="ACCESS_KEY" prop="ACCESS_KEY">
                    <Input size="default" v-model="forms.ACCESS_KEY"/>
                </FormItem>
                <FormItem label="SECRET_KEY" prop="SECRET_KEY">
                    <Input size="default" v-model="forms.SECRET_KEY"/>
                </FormItem>
                <FormItem label="BUCKET_NAME" prop="BUCKET_NAME">
                    <Input size="default" v-model="forms.BUCKET_NAME"/>
                </FormItem>
                <FormItem label="DOMAIN" prop="DOMAIN">
                    <Input size="default" v-model="forms.DOMAIN" placeholder="例：http://obplay.cn"/>
                </FormItem>
                <FormItem>
                    <Button size="default" type="primary" @click="submit" long>保存</Button>
                </FormItem>
            </Form>
        </section>
	</Drawer>
</template>
<script>

export default {
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            showDrawer:false,
            forms:{
                ACCESS_KEY:"",
                SECRET_KEY:"",
                BUCKET_NAME:"",
                DOMAIN:""
            },
            rules:{
                ACCESS_KEY:[{required:true,message:"ACCESS_KEY 不能为空"},{min:30,message:'请正确填写ACCESS_KEY'},{max:50,message:'请正确填写ACCESS_KEY'}],
                SECRET_KEY:[{required:true,message:"SECRET_KEY 不能为空"},{min:30,message:'请正确填写SECRET_KEY'},{max:50,message:'请正确填写SECRET_KEY'}],
                BUCKET_NAME:[{required:true,message:"存储桶名称 不能为空"},{min:2,message:'请正确填写存储桶名称'},{max:50,message:'请正确填写存储桶名称'}],
                DOMAIN:[{required:true,message:"DOMAIN 不能为空"},{pattern:/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,message:"请正确输入域名地址"}]
            }
        }
    },
    watch:{
        value(val){
            this.showDrawer=val
        }
    },
    methods:{
        submit(){
            this.$refs.setForm.validate((valid)=>{
                if(valid){
                    try{
                        window.localStorage.setItem("QINIU_ACCESS_KEY",this.forms.ACCESS_KEY)
                        window.localStorage.setItem("QINIU_SECRET_KEY",this.forms.SECRET_KEY)
                        window.localStorage.setItem("QINIU_BUCKET_NAME",this.forms.BUCKET_NAME)
                        window.localStorage.setItem("QINIU_DOMAIN",this.forms.DOMAIN)
                        this.$emit("input",!this.showDrawer)
                        this.$Notice.success({
                            duration:2,
                            title:"系统提示",
                            desc:"七牛云存储设置配置成功,请手动重启程序后生效！"
                        })
                        this.$ipc.send("changeWindow","reload")
                    }catch(e){
                        this.$Notice.error({
                            title:"系统错误",
                            desc:`存出现BUG<br/>${e}`
                        })
                    }
                }
            })
        },
        closeModal(){
            this.$emit("input",this.showDrawer)
        },
        getLocalData(){
            const QINIU_ACCESS_KEY=window.localStorage.getItem("QINIU_ACCESS_KEY")
            const QINIU_SECRET_KEY=window.localStorage.getItem("QINIU_SECRET_KEY")
            const QINIU_DOMAIN=window.localStorage.getItem("QINIU_DOMAIN")
            const QINIU_BUCKET_NAME=window.localStorage.getItem("QINIU_BUCKET_NAME")
            this.forms.ACCESS_KEY=QINIU_ACCESS_KEY||""
            this.forms.SECRET_KEY=QINIU_SECRET_KEY||""
            this.forms.BUCKET_NAME=QINIU_BUCKET_NAME||""
            this.forms.DOMAIN=QINIU_DOMAIN||""
        }
    },
    mounted(){
        this.getLocalData()
    }
}
</script>
<style lang="less" scoped>
    .md-set-section{
        border-bottom: 1px dashed #eee;
        .md-set-title{
            border-bottom: 1px dashed #eee;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
    }
</style>
