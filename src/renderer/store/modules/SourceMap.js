const state = {
    //窗口状态
    mdWindowState:{
        hide:false,
        full:false
    }
}

const getters={
    mdWindowState:(state)=>state.mdWindowState
}

const mutations = {
    SET_MD_FILE_CONTENT (state,datas) {
        state.MD_FILE_CONTENT=datas
        window.localStorage.MD_FILE_CONTENT=String(datas)
    },
    SET_MD_FILE_PATH (state,datas) {
        state.MD_FILE_PATH=datas
        window.localStorage.MD_FILE_PATH=String(datas)
    }
}

const actions = {
    SET_MD_FILE_CONTENT ({commit},datas) {
        
    },
    SET_MD_FILE_PATH ({commit},datas) {
        
    }
}

export default {
    namespaced: true,
    getters,
    state,
    mutations,
    actions
}
