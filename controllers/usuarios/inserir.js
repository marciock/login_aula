const usuarios=require('../../models/usuarios');
const bcrypt=require('bcryptjs');

module.exports={
    save:(req,res)=>{
        let senha=req.body.senha;
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(senha,salt);
        let newUsuarios=new usuarios({
            email:req.body.email,
            nome:req.body.nome,
            senha:hash,
            ativo:'true',
            creation:Date()
        })
        newUsuarios.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Erro ao Salvar',
                    error:err
                })
            }
            res.redirect('/');
        })
    }
}