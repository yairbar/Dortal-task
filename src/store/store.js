import vue from 'vue';
import vuex from 'vuex';
import insuredes from './insuredsModule';
import user from './userModule';
import routerModel from './routerModel';

vue.use(vuex);

export const store = new vuex.Store({
    
    modules : {
        insuredes,
        user,
        routerModel
    },
})
