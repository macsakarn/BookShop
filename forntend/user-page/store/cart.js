export const state = () => ({
    list: []
})

export const mutations = {
    add(state, book) {
        book.user_amount = 1
        state.list.push(book)
        console.log(state.list);
    },
}