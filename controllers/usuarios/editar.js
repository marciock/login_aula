const usuarios=require('../../models/usuarios');
const bcrypt=require('bcryptjs');


module.exports={
    update: (req,res)=>{
        let id=req.query.id;
        let senha=req.body.senha;
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(senha,salt);
        modelSchedule.findOne({_id:id}, (err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            if(!data){
                return res.status(404).json({
                    message:'No such data'
                });
            }

            data.email=req.body.email ? req.body.email:data.email;
            data.nome=req.body.nome ? req.body.nome:data.nome;
            data.senha=hash ? hash:data.senha;
            data.ativo=req.body.ativo ? req.body.ativo:data.ativo;
            data.description=req.body.description ? req.body.description:data.description;
            data.creation=Date() ? Date():data.creation;

            data.save((err,data)=>{
                if(err){
                    return res.status(500).json({
                        message:'Error getting data'
                    });
                }
                if(!data){
                    return res.status(404).json({
                        message:'No such data'
                    });
                }
                return res.json(data);
            })


        })
    },
}