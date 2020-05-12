const express=require('express');
const router=express.Router();
const usuarios=require('../controllers/usuarios/inserir');

router.post('/',usuarios.save);


module.exports=router;
