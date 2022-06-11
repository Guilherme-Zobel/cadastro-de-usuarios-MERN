const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    nome_usuario:String,
    email_usuario:String,
    tipo_usuario:{type:Number, default:1},
    senha_usuario:String,
},{
    timestamps:true
});

DataSchema.pre('save', function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    } // antes de salvar, faz uma função que se o campo "senha_usuário" não foi modificado não precisa fazer nada, passa para a próxima função
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario,10);
    next(); // caso contrário vai ser criptografado a senha (o next é obrigatório para funcionar)
});

DataSchema.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().senha_usuario+'' // +'' é para transformar em string
    if(password.length<55){
        this.getUpdate().senha_usuario = bcrypt.hashSync(password,10);
    }
    next();
});

DataSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password , this.senha_usuario, function(err, same){
        if(err){
            callback(err)
        }else{
            callback(err, same);
        }
    })
}

const usuarios = mongoose.model('Usuarios',DataSchema);
module.exports = usuarios; // esse model é usado no controller como "Usuario"