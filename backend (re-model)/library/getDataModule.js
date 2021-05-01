const poolData = require("../config/database");

async function getSomethings ( sqlScript, params ) {
    const database = await poolData.getConnection();
    database.beginTransaction();

    try {
        const data = await database.query(sqlScript, params);
        await database.commit();
        return data
    }

    catch ( err ) {
        console.log("Something Wrong In Database Process !!")
        console.log(err);
        return err
    }

    finally {
        database.release();
        // console.log("End getSomethings Process")
    }

    
} 

module.exports.getSomethings = getSomethings;