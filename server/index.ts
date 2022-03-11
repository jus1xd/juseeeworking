import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import productRouter from "./routers/productRouter";
import adminRouter from "./routers/adminRouter";
import siteConfigRouter from "./routers/siteConfigRouter";
require ( "dotenv" ).config ();
const app = express ()

app.use ( express.json () );
app.use ( cors () );
app.use ( '/', productRouter )
app.use ( '/admin', adminRouter )
app.use ( '/config', siteConfigRouter )

const startApp = async () => {
    try {
        await mongoose.connect ( process.env.DB_URL );
        app.listen ( process.env.PORT, () => {
            console.log ( `server is listening on ${process.env.PORT}` );
        } );
    } catch (e) {
        console.log ( e );
    }
};
startApp ();