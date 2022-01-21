export const state = () => ({
  preloading: false,
  muted: false
})
export const mutations = {
    toggle(state) { state.preloading = !state.preloading },
    mute(state) { state.muted = !state.muted }
}
export const actions = {
    toggled({ commit }) { commit('toggle') },
    muteed({ commit }) { commit('mute') }
}
export const getters = {
    toggled(state) { return state.preloading },
    muteed(state) { return state.muted }

}
