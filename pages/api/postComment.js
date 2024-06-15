const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const handler=async (req, res)=>{

    try {
        await mongoose.connect(process.env.connStr);
    } catch (error) {
        console.log(error);
        res.status(500).json({errCode:"CONN-ERR", errDesc:"Error in connecting to database. Exiting..."})
        return
    }

    const Commentlist = mongoose.models.Commentlist || new mongoose.model("Commentlist", new mongoose.Schema({
        name:String,
        email:String,
        comment:String
    }));

    const data={
        name:req.body.name,
        email:req.body.email,
        comment:req.body.comment
    }
    try {
        const resp = await Commentlist.create(data);

        if (!resp.ok){
            res.status(501).json({errCode:"DB-ERR", errDesc:"Error in inserting to database. Exiting..."})
            return
        }

        res.status(200).json({errCode:"SUCCESS", errDesc:resp})

    } catch (error) {
        console.log(error);
        res.status(500).json({errCode:"UNKNOWN-ERR", errDesc:"Unknown error. Exiting..."})
        
    } finally {
        mongoose.connection.close();
    }


}

export default handler;