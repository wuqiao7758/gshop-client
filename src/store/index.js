import vue from 'vue'
import Vuex from 'vuex'
import { reqAddress, reqCategorys, reqShopList } from '../api'

vue.use(Vuex)

const state = {
	latitude: 40.10038, // 纬度
	longitude: 116.36867, // 经度
	address: {}, // 地址信息对象
	categorys: [], // 分类数组
	shops: [], //商家数
}
const actions = {
	// 获取地址
	async getAddress({ commit, state }) {
		const geohash = state.latitude + ',' + state.longitude
		const res = await reqAddress(geohash)
		if (res.code === 0) {
			const address = res.data

			commit('RECEIVE_ADDRESS', address)
		}
	},
	// 获取食品分类列表
	async getCategorys({ commit, state }) {
		const res = await reqCategorys()

		if (res.code === 0) {
			const categorys = res.data
			commit('RECEIVE_CATEGORYS', categorys)
		}
	},
	// 获取商家列表
	async getShops({ commit, state }) {
		// ongitude, latitude
		const { latitude, longitude } = state
		// console.log()
		const res = await reqShopList(latitude, longitude)
		if (res.code === 0) {
			const shops = res.data
			commit('RECEIVE_SHOPS', shops)
		}
	},
}
const mutations = {
	RECEIVE_ADDRESS(state, address) {
		state.address = address
	},
	RECEIVE_CATEGORYS(state, categorys) {
		state.categorys = categorys
	},
	RECEIVE_SHOPS(state, shops) {
		state.shops = shops
	},
}
const getters = {}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
})
