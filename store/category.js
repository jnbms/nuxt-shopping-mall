export const state = () => ({
    category : "",
})
export const mutations = {
    setCategory(state, value){
        state.category = value;
    }
}
