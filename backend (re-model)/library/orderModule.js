const poolData = require("../config/database");
const { OrderSQL, OrderParams } = require("./SqlScript");
const multer = require('multer');

async function MakeOrderFromDel(data, sub) {
    console.log("Begin make an order process...");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const OrderId = await database.query(`INSERT INTO \`ORDER\` VALUES (?, DATE_FORMAT((CURDATE() + 1), "%Y-%m-%d"), 0, null, null, ?, ?, null, ?);
        SET @last_id_in_ORDER = LAST_INSERT_ID(); SELECT @last_id_in_ORDER;`, [data.orderId, data.totalPrice, data.amount, data.customerId]);
        if (OrderId[0][0].insertId) {
            data.books.forEach(async data => {
                console.log(data);
                await database.query(OrderSQL.make_order_book, eval(OrderParams.make_order_book));
                await database.query(`UPDATE BOOK SET book_amount = book_amount - ? WHERE book_id = ?`, [data.book_amount, data.book_id]);
            });
        }
        await database.commit();
        console.log("Now order save to database");
        console.log("Make an order Success, result : true");
        return { status: true, massage: "Order Success", order_id: OrderId[0][0].insertId };
    }
    catch (err) {
        await database.rollback();
        console.log("Detect some bug");
        console.log(err);
        return { status: false, massage: "Something went wrong" }
    }
    finally {
        await database.release();
        console.log("End make order Process");
    }
}

module.exports.MakeOrderFromDel = MakeOrderFromDel;


async function MakeOrder(data, sub) {
    console.log("Begin make an order process...");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const OrderId = await database.query(OrderSQL.make_order, eval(OrderParams.make_order));
        if (OrderId[0][0].insertId) {
            data.books.forEach(async data => {
                console.log(data);
                await database.query(OrderSQL.make_order_book, eval(OrderParams.make_order_book));
                await database.query(`UPDATE BOOK SET book_amount = book_amount - ? WHERE book_id = ?`, [data.book_amount, data.book_id]);
            });
        }
        await database.commit();
        console.log("Now order save to database");
        console.log("Make an order Success, result : true");
        return { status: true, massage: "Order Success", order_id: OrderId[0][0].insertId };
    }
    catch (err) {
        await database.rollback();
        console.log("Detect some bug");
        console.log(err);
        return { status: false, massage: "Something went wrong" }
    }
    finally {
        await database.release();
        console.log("End make order Process");
    }
}

module.exports.MakeOrder = MakeOrder;

async function AdminEditOrder(data, jwt_payload) {
    console.log("Begin admin edit order process...");
    const database = await poolData.getConnection();
    console.log(data);
    database.beginTransaction();
    try {
        if (data.choice === "check") {
            if (data.confirm === true) {
                await database.query(OrderSQL.update_order_admin, eval(OrderParams.update_order_admin));
                await database.query(OrderSQL.update_payment, [1, data.order_id]);
                await database.commit();
                console.log("dwd");
                return { status: true, massage: "Confirm Order Success" };
            }
            if (data.confirm === false) {
                await database.query(OrderSQL.update_payment, [0, data.order_id]);
                await database.commit();
                return { status: true, massage: "Reject Order Success" };
            }
        };
        if (data.choice === "daily") {
            await database.query(OrderSQL.update_order_delivery, eval(OrderParams.update_order_delivery));
            await database.commit();
            return { status: true, massage: "Edit Order Success" };
        };
    }
    catch (err) {
        database.rollback();
        console.log("Detect Some bug....");
        console.log(err);
        return { status: false, massage: "Somethings went wrong", error: err };
    }
    finally {
        console.log("End edit order process");
        database.release();
    }
}

module.exports.AdminEditOrder = AdminEditOrder


async function CusEditOrder(data) {
    console.log("Begin customer edit order process....");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        await database.query();
        await database.commit();
        return { status: true, massage: "Customer Edit Order Success" }
    }
    catch (err) {
        console.log("Detect Some bug....");
        console.log(err);
        return { status: false, massage: "Something went wrong" }
    }
    finally {
        console.log("End customer edit process");
        database.release();
    }
}


module.exports.CusEditOrder = CusEditOrder;

async function FetchAllBooks() {
    console.log("Begin fetch All Order process....");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const allOrder = await database.query(OrderSQL.fetchAllOrder);
        return { status: true, massage: "Order Success", allOrder: allOrder[0] };

    }
    catch (err) {
        console.log("Detect Some bug....");
        console.log(err);
        return { status: false, massage: "Somethings went wrong", error: err };
    }
    finally {
        console.log("End fetch All order process");
        database.release();
    }
}

module.exports.FetchAllBooks = FetchAllBooks;


async function FetchOrderById(data) {
    console.log("Begin fetch Order by id process....");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const order = await database.query(OrderSQL.get_order_by_id, eval(OrderParams.get_order_by_id));
        return { status: true, massage: "Order Success", Order: order[0][0] };
    }
    catch (err) {
        console.log("Detect Some bug....");
        console.log(err);
        return { status: false, massage: "Somethings went wrong", error: err };
    }
    finally {
        console.log("End fetch Order by id  process");
        database.release();
    }
}

module.exports.FetchOrderById = FetchOrderById;


async function UserFetchOrder(data) {
    console.log("Begin fetch Order by id process....");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const order = await database.query(OrderSQL.user_get_order_by_id, eval(OrderParams.user_get_order_by_id));
        return { status: true, massage: "Order Success", Order: order[0] };
    }
    catch (err) {
        console.log("Detect Some bug....");
        console.log(err);
        return { status: false, massage: "Somethings went wrong", error: err };
    }
    finally {
        console.log("End fetch Order by id  process");
        database.release();
    }
}

module.exports.UserFetchOrder = UserFetchOrder;

async function UserDeleteOrder(data, id) {
    console.log("Begin Delete Order by id process....");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        console.log(id)
        console.log("Check :" + data.orderId)
        const find_item_unit = await database.query(`SELECT OB.BOOK_book_id,item_unit,OB.ORDER_order_id FROM ORDER_BOOK OB JOIN \`ORDER\` O 
        ON OB.ORDER_order_id = O.order_id WHERE CUSTOMER_customer_id = ? AND OB.ORDER_order_id= ?;`, [id, data]);
        console.log(find_item_unit[0]);
        if (find_item_unit[0].length > 0) {
            find_item_unit[0].forEach(async unit => {
                await database.query(`UPDATE BOOK SET book_amount = book_amount + ? WHERE book_id = ?;`, [unit.item_unit, unit.BOOK_book_id])
            });

            await database.query(`SET FOREIGN_KEY_CHECKS=0;
            DELETE \`ORDER\`,ORDER_BOOK
            FROM \`ORDER\`, ORDER_BOOK
            WHERE \`ORDER\`.\`order_id\` = ORDER_BOOK.ORDER_order_id AND \`ORDER\`.order_id = ? AND \`ORDER\`.CUSTOMER_customer_id = ?;
            SET FOREIGN_KEY_CHECKS=1;`, [find_item_unit[0][0].ORDER_order_id, id]);
            console.log(find_item_unit[0][0].ORDER_order_id);
            database.commit();
            return { status: true, massage: "Success" }
        }
    }
    catch (err) {
        await database.rollback();
        console.log(err);
        return { status: false, massage: "Somethings went wrong", error: err };
    }
    finally {
        console.log("End Delete Order by id  process");
        database.release();
    }
}


module.exports.UserDeleteOrder = UserDeleteOrder;