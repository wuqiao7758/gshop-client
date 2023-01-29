import Vue from 'vue'
import Vuex from 'vuex'
import { reqAddress, reqCategoryList, reqShopList } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		latitude: 40.10038, // 纬度
		longitude: 116.36867, // 经度
		address: {}, // 地址信息对象
		categorys: [], // 分类数组
		shops: [], //商家数组
	},
	actions: {
		async getAddress({ commit, state }) {
			let geohash = state.latitude + ',' + state.longitude
			let address = await reqAddress(geohash)
			commit('RECEIVE_ADDRESS', { address })
		},
		async getCategoryList({ commit, state }) {
			let resCategory = await reqCategoryList()
			// console.log(resCategory)
			commit('RECEIVE_CATEGORYS', resCategory)
		},
		async getShopList({ commit, state }) {
			console.log('getShopList', state)
			let { longitude, latitude } = state
			let resShopList = await reqShopList({ longitude, latitude })
			console.log(resShopList)
			// commit('RECEIVE_CATEGORYS', resShopList)
		},
	},
	mutations: {
		// export const RECEIVE_ADDRESS = 'receive_address' // 接收地址信息
		// export const RECEIVE_CATEGORYS = 'receive_categorys' // 接收分类数组
		// export const RECEIVE_SHOPS = 'receive_shops' // 接收商家数组
		RECEIVE_ADDRESS(state, { address }) {
			state.address = address
		},
		RECEIVE_CATEGORYS(state, resCategory) {
			let arr = []
			let minArr = []
			resCategory.forEach(c => {
				if (minArr.length === 8) {
					minArr = []
				}
				if (minArr.length === 0) {
					arr.push(minArr)
				}
				minArr.push(c)
			})
			state.categorys = arr
		},

		// RECEIVE_SHOPS(state, address) {
		// 	state.address = address
		// },
	},
	getters: {},
})
