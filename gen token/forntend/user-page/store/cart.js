export const state = () => ({
    list: [],
    countCart: 0
})

export const mutations = {
    add(state, book) {
        book.user_amount = 1
        state.list.push(book)
        state.countCart++
        console.log(state.list);
    },
}