import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const url = "localhost:9090/api/customers";

const getCustomersRest = ()=>  axios.request(url).then(({data})=> data)
.catch(err=> console.log(JSON.stringfy(err)));



const state={
customers:[]
};

const mutations ={
LOAD_CUSTOMERS(state, payload){
state.customers=payload;
}
}


const getters={
getCustomers:(state)=>state.customers
}

const actions={
async getCustomerAct({commit}){
    const customers = await getCustomersRest();
    commit('LOAD_CUSTOMERS',customers);
}
}

const store = new Vuex.Store({
state,
mutations,
getters,
actions
});

export default store;
