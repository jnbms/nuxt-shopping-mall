export const state = () => ({
    category : undefined,
})
export const mutations = {
    setCategory(state, value){
        if(value == state.category) {
            // toggle
            state.category = undefined
        } else {
            state.category = value;
        }
    }
}
