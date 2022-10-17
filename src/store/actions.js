import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js'

export default {
    FETCH_NEWS({ commit }) {
        return fetchNewsList()
        .then(res => {
            commit('SET_NEWS', res.data);
            return res;
        })
        .catch(err => {
            console.log(err);
        })
    },
    FETCH_JOBS({ commit }) {
        return fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(err => {
            console.log(err);
        })
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
        .then(({ data }) => {
            commit('SET_ASK', data);
        })
        .catch(err => {
            console.log(err);
        })
    },
    FETCH_USER({ commit }, userName) {
        return fetchUserInfo(userName)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(err => {
            console.log(err);
        })
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(err => {
            console.log(err);
        })
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(res => {
                commit('SET_LIST', res.data);
                return res;
            })
            .catch(err => {
            console.log(err);
        })  
    }
}