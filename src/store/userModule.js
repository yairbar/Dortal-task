const user = {

    namespaced : true,

    state : {
        user : {
            userName : '',
            password : ''
        }
    },

    getters : {
        getUser : state => state.user
    },

    actions : {
       loginUser :  ({state}, payload) => {
            state.user.userName = payload.userName;
            state.user.password = payload.password;
       }
    }
}

export default user;