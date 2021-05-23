export const state = () => ({
    list: [],
    countCart: 0,
    total: 0.00,
})

export const mutations = {
    add(state, book) {
        var isDuplicate = false
        try {
            const values = state.list.map((item) => item.book_id)
            isDuplicate = values.some(item => {
                console.log(`${item} : ${book.book_id}`)
                return item == book.book_id
            })


        } catch (error) {

        }
        if (!isDuplicate) {
            book.book_amount = 1
            state.list.push(book)
            state.countCart++
            state.total += book.book_price
        } else {
            alert('Book is Duplicate')
        }


    },
    delete(state, index) {
        console.log(state.list[index].book_amount);
        console.log(state.list[index].book_price);
        state.total = state.total - (state.list[index].book_amount * state.list[index].book_price)
        state.countCart -= state.list[index].book_amount
        state.list.splice(index, 1)


    },
    upCount(state, id) {
        state.list.forEach(element => {
            if (element.book_id == id) {

                element.book_amount++


                state.total += element.book_price

                state.countCart++
                return false
            }
            return true
        });

    },
    downCount(state, id) {
        console.log(id);
        state.list.forEach(element => {
            if (element.book_id == id) {
                if (element.book_amount != 1) {
                    element.book_amount--
                    state.total -= element.book_price
                    state.countCart--
                    return false
                } else {
                    console.log('is 0 fuck!!');
                }
            }
            return true
        });
        console.log(state.list);
    },
    clear(state) {
        state.list = []
        state.countCart = 0
        state.total = 0
    }
}