const poolData = require("../config/database");
const { OrderSQL, OrderParams } = require("./SqlScript");



async function MakeOrder ( data , sub ) {
    console.log("Begin make an order process...");
    const database = await poolData.getConnection();
    database.beginTransaction(); 
    try {
        const OrderId = await database.query(OrderSQL.make_order, eval (OrderParams.make_order) );
        if(OrderId[0][0].insertId){
            data.books.forEach(async data => {
                console.log(data);
                await database.query(OrderSQL.make_order_book, eval (OrderParams.make_order_book) );
                await database.query(`UPDATE BOOK SET book_amount = book_amount - ? WHERE book_id = ?`, [data.book_amount, data.book_id]);
            });
        }
        await database.commit();
        console.log("Now order save to database");
        console.log("Make an order Success, result : true");
        return {status : true, massage : "Order Success", order_id : OrderId[0][0].insertId};
    }
    catch ( err ) {
        await database.rollback();
        console.log("Detect some bug");
        console.log(err);
        return {status : false, massage : "Something went wrong"}
    }
    finally {
        await database.release();
        console.log("End make order Process");
    }
}

module.exports.MakeOrder = MakeOrder;
