const routerModel = {

    namespaced : true,

    state : {
        routherPath : '/login'
    },

    getters : {
        getRoutherPath: (state) => state.routherPath
    },

    actions : {
       setRoutherPath :  ({state}, payload) => {
           state.routherPath = payload
        }
    }
}

export default routerModel;