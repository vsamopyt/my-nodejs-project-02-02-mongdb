import express from "express";

const PORT =6000;

export const setupServer =()=>{
    const app = express();
    app.listen(PORT, ()=>console.log(`sever is running on the port${PORT}`));

};

