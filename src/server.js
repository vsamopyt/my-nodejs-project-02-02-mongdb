import express from "express";
import cors from "cors";
import pino from "pino-http";
import {env} from "./utils/env.js";

// const PORT =6000;
const PORT = Number(env('PORT', '3000'));

export const setupServer =()=>{
    const app = express();

    const logger = {
        transport: {
            target: 'pino-pretty',
          },
    };

    app.use(cors());
    app.use(pino(logger));
    app.use(express.json());


    app.get("/",(reg,res)=>{
        res.json({message:"hello world"});
    });

app.use((reg, res)=>{
    res.status(404).json(
        {
        mistake: `the way ${reg.url} not found`
    });
});

app.use((err, reg,res)=>{
    res.status(500).json({
        message: 'Something went wrong',
        error: err.message,
    });
});
    app.listen(PORT, ()=>console.log(`sever is running on the port${PORT}`));

};

