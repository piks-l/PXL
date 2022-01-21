export const state = () => ({
    preloading: false,
    menu: false,
    muted: false
})
export const mutations = {
    tglMenu(state) {state.menu = !state.menu},
    tglPreloading(state) {state.preloading = !state.preloading},
    tglMuted(state) {state.muted = !state.muted}
}
export const actions = {
    actMenu({ commit }) {commit('tglMenu')},
    actPreloading({ commit }) {commit('tglPreloading')},
    actMuted({ commit }) {commit('tglMuted')}
}
export const getters = {
    getMenu(state) {return state.menu},
    getPreloading(state) {return state.preloading},
    getMuted(state) {return state.muted}
}
