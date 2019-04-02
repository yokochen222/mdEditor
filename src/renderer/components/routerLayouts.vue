<template>
    <div class="md-router-layouts">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    props:{
        path:{
            type:String,
            default:""
        }
    },
    mounted(){
        this.$router.push(this.path)
    }
}
</script>
