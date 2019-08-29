export default function({ store, params }) {
  store.commit('SET_LANG', params.lang)
}
