const state = {
    preview:false,
    title:"mdEditor"
}

const getters={
    preview:(state)=>state.preview,
    title:(state)=>state.title
}

const mutations = {
    changePreview(state){
        state.preview=!state.preview
    },
    changeTitle(state,data){
        state.title=data
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
