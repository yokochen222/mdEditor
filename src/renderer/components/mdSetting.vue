<template>
    <Drawer title="编辑器设置" placement="right" :closable="true" v-model="showDrawer">
        <section class="md-set-section">
            <h3 class="md-set-title">七牛云存储设置</h3>
            <Form  label-position="top" :model="forms" :rules="rules" ref="setForm">
                <FormItem label="ACCESS_KEY" prop="ACCESS_KEY">
                    <Input v-model="forms.ACCESS_KEY"/>
                </FormItem>
                <FormItem label="SECRET_KEY" prop="SECRET_KEY">
                    <Input v-model="forms.SECRET_KEY"/>
                </FormItem>
                <FormItem label="DOMAIN" prop="DOMAIN">
                    <Input v-model="forms.DOMAIN" placeholder="例：http://obplay.cn"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submit" long>保存</Button>
                </FormItem>
            </Form>
        </section>
	</Drawer>
</template>
<script>
import cookie from "js-cookie"
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
                ACCESS_KEY:cookie.get("QINIU_ACCESS_KEY"),
                SECRET_KEY:cookie.get("QINIU_SECRET_KEY"),
                DOMAIN:cookie.get("QINIU_DOMAIN")
            },
            rules:{
                ACCESS_KEY:[{required:true,message:"ACCESS_KEY 不能为空"},{min:30,message:'请正确填写ACCESS_KEY'},{max:50,message:'请正确填写ACCESS_KEY'}],
                SECRET_KEY:[{required:true,message:"SECRET_KEY 不能为空"},{min:30,message:'请正确填写SECRET_KEY'},{max:50,message:'请正确填写SECRET_KEY'}],
                DOMAIN:[{required:true,message:"DOMAIN 不能为空"},{pattern:/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,message:"请正确输入域名地址"}]
            }
        }
    },
    watch:{
        showDrawer(val){
            this.$emit("input",val)
        }
    },
    methods:{
        submit(){
            this.$refs.setForm.validate((valid)=>{
                if(valid){
                    cookie.set("QINIU_ACCESS_KEY",this.forms.ACCESS_KEY)
                    cookie.set("QINIU_SECRET_KEY",this.forms.SECRET_KEY)
                    cookie.set("QINIU_DOMAIN",this.forms.DOMAIN)
                }
            })
        }
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
