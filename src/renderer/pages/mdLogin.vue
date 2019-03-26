<template>
    <Form class="md-form-login">
        <div class="brand">
            <h3>MD-EDITOR</h3>
        </div>
        <div class="form-item">
            <label for="ACCESS_KEY">ACCESS_KEY</label>
            <Input  id="ACCESS_KEY" v-model="forms.ACCESS_KEY"/>
        </div>
        <div class="form-item">
            <label for="SECRET_KEY">SECRET_KEY</label>
            <Input id="SECRET_KEY" v-model="forms.SECRET_KEY"/>
        </div>
        <div class="form-item">
            <label for="SECRET_KEY">DOMAIN</label>
            <Input id="SECRET_KEY" v-model="forms.DOMAIN"/>
        </div>
        <div class="form-item">
            <checkbox >Remember</checkbox>
        </div>
        <Button variant="primary" block :disabled="disabled" @click="SET_UPLOAD_OPTIONS">START</Button>
        <div class="label-tips">
            设置七牛云对象存储，在MD文件中上传图片、附件等将上传至您所填写的对象存储中，如无需上传图片等文件请点击：
            <span>直接进入编辑器</span>
        </div>
  </Form>
</template>
<script>
import cookie from "js-cookie"
export default {
    name: "md-login",
    data(){
        return {
            forms:{
                ACCESS_KEY:"",
                SECRET_KEY:"",
                DOMAIN:""
            }
        }
    },
    computed:{
        disabled(){
            if(!this.forms.ACCESS_KEY||!this.forms.SECRET_KEY||!this.forms.DOMAIN){
                return true
            }
        }
    },
    methods:{
        SET_UPLOAD_OPTIONS(){
            if(!this.disabled){
                cookie.set("QINIU_ACCESS_KEY",this.forms.ACCESS_KEY)
                cookie.set("QINIU_SECRET_KEY",this.forms.SECRET_KEY)
                cookie.set("QINIU_DOMAIN",this.forms.DOMAIN)
                this.$router.push("/editor")
            }
        }
    }
};
</script>
<style lang="less" scoped>
    .md-form-login{
        margin: 0 auto;
        padding: 15px;
        font-size: 14px;
        .brand{
            margin-bottom: 20px;
        }
        .form-item{
            margin-bottom: 15px;
        }
        .label-tips{
            position: relative;
            z-index: 200;
            // text-align:center;
            padding-top: 20px;
            color: #aaa;
            font-size: 12px;
            span{
                color: #0087ff;
                &:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }
</style>

