const state = {
    preview:false,
    editorContent:""
}

const getters={
    preview:(state)=>state.preview,
    editorContent:(state)=>state.editorContent
}

const mutations = {
    changePreview(state){
        state.preview=!state.preview
    },
    setEditorContent(state,data){
        state.editorContent=data
    },
    insertImg(state,{url,alt}){
        let img=`![${alt}](${url})`
        if(state.editorContent){
            img=state.editorContent+"\n"+img
        }
        state.editorContent=img
    }
}

const actions = {
   
}

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
}
