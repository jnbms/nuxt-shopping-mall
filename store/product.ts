interface productDTO {
    brand: string
    name: string
    price: number
    sort: string
    caegory: string
    thickness: number
    weight: number
    flex: number
    through: number
}

export const state = state => ({
    product: { name: "asd"} as productDTO
});

export const mutations = {
    setProduct(state, newProduct: productDTO) {
        state.product = newProduct
    }
}
    