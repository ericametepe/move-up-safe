import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
const url ="http://localhost:8080/api/customers";

const getCustomersRest= axios.get(url);



const state={
customers:[],
totalRows:0
};

const mutations ={
LOAD_CUSTOMERS(state, payload){
state.customers=payload;
},
LOAD_TOTALROW(state, payload){
    state.totalRows=payload;
},
 UPDATE_TROWS(state,payload){
    state.totalRows=payload;
}

};


const getters={
getCustomers:(state)=>state.customers,
getTotalRows:(state)=>state.totalRows
};

const actions={
async getCustomerAct({commit}){
    getCustomersRest
        .then(({data})=>{
            commit('LOAD_CUSTOMERS',data);
            commit('LOAD_TOTALROW',data.length);

        })
        .catch(err => console.log('Error:'+err))
},
    updateRows({commit},payload){
        commit('UPDATE_TROWS',payload);
    }
};

const store = new Vuex.Store({
state,
mutations,
getters,
actions
});

export default store;
