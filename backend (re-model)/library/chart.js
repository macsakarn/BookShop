const poolData = require("../config/database");
const { ChartSQL } = require("./SqlScript");

async function Chart( ) {
    console.log("Begin chart process...");
    const database = await poolData.getConnection();
    database.beginTransaction();
    try {
        const chart_money = await database.query(ChartSQL.money);
        const chart_book = await database.query(ChartSQL.amountBook);
        const chart_allOrder = await database.query(ChartSQL.allOrder);
        const chart_dayMoney = await database.query(ChartSQL.day_money);
        return {revenue : chart_money[0][0].revenue, allBook :chart_book[0][0].amountBook, allOrder : chart_allOrder[0][0].allOrder, dailyRevenue : chart_dayMoney[0][0].dailyRevenue}
    }
    catch (err) {
        console.log("Detect Some bug....");
        console.log(err);
        return {status : false, massage : "Somethings went wrong", error : err};
    }
    finally {
        console.log("End chart process");
        database.release();
    }
}

module.exports.Chart = Chart;