const router = require("express").Router();

router.get("/usuarios", (req, res) =>{
    res.send("user list was created");
});

router.post("/testnombre", (req,res)=>{
    const nombre = req.body.nombre;
    console.log(nombre);
    res.send("el mas pro de node es: " + nombre);
});

module.exports= router;
