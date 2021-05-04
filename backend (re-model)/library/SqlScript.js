const regisSQL = {
    find_user            :    `SELECT * FROM CUSTOMER WHERE customer_email=?`,
    find_userId          :    `SELECT customer_id FROM CUSTOMER WHERE customer_fname = ? AND customer_lname = ? AND customer_email=?`,
    find_admin           :    `SELECT * FROM ADMIN WHERE username = ? OR (admin_fname=? AND admin_lname=?)`, 
    insert_user          :    `INSERT INTO CUSTOMER(customer_fname, customer_lname, customer_address, customer_email, customer_tel) VALUES (?, ?, ?, ?, ?);`,
    insert_account       :    `INSERT INTO ACCOUNTS (username, password, CUSTOMER_customer_id) VALUES (?, ?, ?)`,
    insert_admin         :    `INSERT INTO ADMIN (admin_fname, admin_lname, username, password) VALUES (?, ?, ?, ?) ;`,
};

module.exports.regisSQL = regisSQL;

const regisParamsSQL = { 
    find_user             :     "[data.customer.email]",
    find_userId           :     "[data.customer.fname, data.customer.lname, data.customer.email]",
    find_admin            :     "[data.username, data.fname, data.lname]",
    insert_user           :     "[data.customer.fname, data.customer.lname, data.customer.address, data.customer.email, data.customer.tel]",
    insert_account        :     "[data.account.username, hash, findCusId[0][0].customer_id]",
    insert_admin          :     "[data.fname, data.lname, data.username, hash]",
};

module.exports.regisParamsSQL = regisParamsSQL;

const loginSQL = {
    find_user   : `SELECT * FROM CUSTOMER c JOIN ACCOUNTS a ON c.customer_id = a.CUSTOMER_customer_id WHERE c.customer_email = ?`,
    find_admin  : `SELECT * FROM ADMIN WHERE username = ?`,
}

module.exports.loginSQL = loginSQL;

const loginParams = {
    find_user  : "[data.username]",
    find_admin : "[data.username]",
}

module.exports.loginParams = loginParams;

const fetchAllBooks = {
    script : `
    SELECT book_id, book_name, pb_year, price, book_amount, book_image, description, popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name, GROUP_CONCAT(DISTINCT(type_name) SEPARATOR ', ') as type
    FROM BOOK,BOOK_AUTHOR,AUTHOR,BOOK_TYPE,BOOK_BOOK_TYPE 
    WHERE BOOK.book_id = BOOK_AUTHOR.BOOK_book_id AND BOOK_AUTHOR.AUTHOR_author_id = AUTHOR.author_id AND BOOK.book_id = BOOK_BOOK_TYPE.Book_book_id AND BOOK_BOOK_TYPE.BOOK_TYPE_type_id = BOOK_TYPE.type_id
    GROUP BY BOOK.book_id`,
    params : null,
}

module.exports.fetchAllBooks = fetchAllBooks;

const sidebar = {
    author_Script : `SELECT concat(author_fname,\" \",author_lname) author_name FROM AUTHOR LIMIT 10`,
    type_Script   : `SELECT type_name FROM BOOK_TYPE LIMIT 10`,
    pop_Script    : `SELECT book_id, book_name, price, book_image, popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name
                     FROM BOOK,BOOK_AUTHOR,AUTHOR
                     WHERE BOOK.book_id = BOOK_AUTHOR.BOOK_book_id AND BOOK_AUTHOR.AUTHOR_author_id = AUTHOR.author_id AND BOOK.popular = 1
                     GROUP BY BOOK.book_id
                    limit 10`
}

module.exports.sidebar = sidebar;

const fetchBookById = {
    script : `SELECT B.book_id, B.book_name, B.pb_year, B.price, B.book_amount, B.book_image, B.description, B.popular, group_concat( DISTINCT(author_fname)," ",author_lname separator ', ') as author_name, GROUP_CONCAT(DISTINCT(type_name) SEPARATOR ', ') as type
                FROM BOOK B
                LEFT JOIN BOOK_AUTHOR BA
                ON B.book_id = BA.BOOK_book_id 
                LEFT JOIN AUTHOR A
                ON BA.AUTHOR_author_id = A.author_id
                LEFT JOIN BOOK_BOOK_TYPE BBT
                ON B.book_id = BBT.BOOK_book_id
                LEFT JOIN BOOK_TYPE BT
                ON BBT.BOOK_TYPE_type_id = BT.type_id
                WHERE B.book_id = ?
                GROUP BY ?`,
    params  : "[req.params.bookId, `B.book_id`]"
}

module.exports.fetchBookById = fetchBookById;

const OrderSQL = {
    make_order              :  `INSERT INTO \`ORDER\` VALUES (0,CURRENT_DATE , 0, null, null, ?, ?, null, ?);
                                SET @last_id_in_ORDER = LAST_INSERT_ID();
                                SELECT @last_id_in_ORDER;
                                 `,
    make_order_book         :  `INSERT INTO ORDER_BOOK VALUES (0, ?, ?, ?, ?, ?)`,
    update_order_admin      :  `update \`ORDER\`
                                set ADMIN_admin_id= ? 
                                where order_id = ?;`,
    update_order_delivery   :   `update \`ORDER\`
                                 set delivery_date = ? 
                                 where order_id = ?;`,
    get_order_by_id         :   `SELECT O.order_id, O.order_date, O.payment_status, O.payment_image, O.delivery_date, O.total_price, O.amount, O.ADMIN_admin_id, O.CUSTOMER_customer_id, group_concat( OB.item_no separator ', ') as All_item_no, group_concat( OB.item_unit separator ', ' ) as All_item_unit, group_concat( OB.BOOK_book_id separator ', ') as All_Book_book_id
                                FROM \`ORDER\`O JOIN ORDER_BOOK OB ON O.order_id = OB.ORDER_order_id WHERE O.order_id = ? GROUP BY O.order_id`,
    fetchAllOrder           :  `SELECT * FROM \`ORDER\``,
    cus_edit_order          :  `update ORDER
                                set order_date = CURRENT_DATE, payment_image = ?, 
                                ,total_price = ?
                                where order_id = ?;
                                `
}

module.exports.OrderSQL = OrderSQL;

const OrderParams = {
    make_order            :   `[data.totalPrice, data.amount, data.customerId]`, //sub
    make_order_book       :   `[data.book_amount*data.book_price ,data.book_amount, data.book_price, data.book_id, OrderId[0][0].insertId]`,
    update_order_admin    :   `[jwt_payload.sub, data.order_id]`,
    update_order_delivery :   `[data.delivery_date, data.order_id]`,
    get_order_by_id       :   `[data]`
    // cus_edit_order      :   `[data.]`
}

module.exports.OrderParams = OrderParams;