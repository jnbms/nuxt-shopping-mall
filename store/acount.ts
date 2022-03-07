// interface item {
//     name: string,
//     price: number
// }

export const state = () => ({
    userID: "",
    cart: []
})

export const mutations = {
    setUser : (state, userID) => {
        state.userID = userID
    },
    addItem: (state,newItem) => {
        if(state.cart.some(item => item.name == newItem.name) == false) {
            state.cart.push({...newItem, count: 1})
        }
    },
    addCount: (state, payload) => {
        state.cart.find(item => item._id == payload.id).count == 1 && payload.value < 0 ?
        state.cart.find(item => item._id == payload.id).count += 0 :
        state.cart.find(item => item._id == payload.id).count += payload.value
    },
    setCount: (state, payload) => {
        if(payload.value > 0)
        state.cart.find(item => item._id == payload.id).count = Number(payload.value)
    }
}