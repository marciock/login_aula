const mongoose=require('mongoose');


let usuariosSchema=new mongoose.Schema({
    email:{type:String},
    nome:{type:String},
    senha:{type:String},
    ativo:{type:Boolean},
    creation:{type:Date}
})

module.exports=mongoose.model('Usuarios',usuariosSchema);