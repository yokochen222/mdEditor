const state = {
    preview:false,
    editorContent:"",
    openedRoutes:[],
    openedFiles:[
        // {
        //     fileName:"",
        //     path:"",
        //     save:false
        // }
    ]
}

const getters={
    preview:(state)=>state.preview,
    editorContent:(state)=>state.editorContent,
    openedRoutes:(state)=>state.openedRoutes,
    openedFiles:(state)=>state.openedFiles
}

const {ipcRenderer:ipc} = require('electron')
import router from "@/router"

const mutations = {
    changePreview(state){
        state.preview=!state.preview
    },
    addOpenedRoutes(state,data){
        const res=state.openedRoutes.some(item=>{
            if(item.path==data.path)return true
        })
        if(!res){
            state.openedRoutes.push(data)
        }
    },
    removeOpenRoutes(state,index){
        state.openedRoutes.splice(index,1)
        if(state.openedRoutes.length>0){
            if((index-1)>-1){
                router.push({
                    path:"/editor",
                    query:state.openedRoutes[index-1].query
                })
            }else{
                router.push({
                    path:"/editor"
                })
            }
        }
    },
    addOpenedFiles(state,path){
        
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
