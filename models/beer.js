var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-unicesumar');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.on('open', function () {
  console.log('Conexão aberta.')
});
db.on('connected', function(err){
    console.log('Conectado')
});
db.on('disconnected', function(err){
    console.log('Desconectado')
});

var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  nome: { type: String, default: '', required: true },
  descricao: { type: String, default: '' },
  alcool: { type: Number, min: 0, default: 0},
  preco: { type: Number, min: 0, default: 0},
  categoria: { type: String, default: ''},
  criado_em: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Beer', BeerSchema);

