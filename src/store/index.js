import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
const url ="http://localhost:8080/api/customers";

const getCustomersRest= axios.get(url);

const addReportRest=(customerId)=>axios.put(`${url}/${customerId}/reports`);



const state={
customers:[],
totalRows:0,
reports:[]
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
},

ADD_REPORTS(state,payload){
    state.reports.concat(payload);
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
    },

    addReport({commit},customerId){
       addReportRest(customerId)
           .then(()=>
              commit('ADD_REPORTS',customerId))
           .catch(err => console.log(`${JSON.stringify(err)}`))
    },

};

const store = new Vuex.Store({
state,
mutations,
getters,
actions
});

export default store;
