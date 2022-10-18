import { fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js'

export default {
    async FETCH_NEWS({ commit }) {
        const res = await fetchNewsList();
        commit('SET_NEWS', res.data);
        return res;
    },
    async FETCH_JOBS({ commit }) {
        const res = await fetchJobsList();
        commit('SET_JOBS', res.data);
        return res;
    },
    async FETCH_ASK({ commit }) {
        const res = await fetchAskList();
        commit('SET_ASK', res.data);
        return res;
    },
    async FETCH_USER({ commit }, userName) {
        const res = await fetchUserInfo(userName);
        commit('SET_USER', res.data);
        return res;
    },
    async FETCH_ITEM({ commit }, id) {
        const res = await fetchItemInfo(id);
        commit('SET_ITEM', res.data);
        return res;
    },
    async FETCH_LIST({ commit }, pageName) {
        const res = await fetchList(pageName);
        commit('SET_LIST', res.data);
        return res;
    }
}