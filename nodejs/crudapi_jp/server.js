/**
 * Arquivo: server.js
 * Autor: Fernando Passaia
 * Data de Criação: 23/09/2018
 */
 
//Configurar o setup da App:
 
//Importando os pacotes:
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
 
//Importando a biblioteca mongoose para usar o banco de dados MongoDB
var mongoose = require('mongoose');
 
//Importando nossa function cliente (Em OO seria uma classe)
var Cliente = require('./app/models/cliente');
 
//URL Banco Local no Linux
mongoose.connect('mongodb://localhost:27017/apinodejscruddom');
mongoose.Promise = global.Promise;
 
//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.json());
 
//Definindo a porta onde será executada nossa api:
var port = process.env.port || 8000;
 
//Criando uma instância da Rotas via Express:
var router = express.Router();
 
//Todo request a api passará por essa função de callback primeiramente e podemos usar para log do lado do servidor
router.use(function(req, res, next){
    console.log('Alguém está fazendo requisição a api ;)');
    next();
});
 
//Rota que criamos para informar que a api está online
router.get('/online', function(req, res){
    res.json({message:'Beleza! Eu estou online =)'});
});
 
//Rotas da nossa api
router.route('/clientes')
    /* 1) Recurso para criar cliente (acessar em POST http://localhost:8000/api/clientes)*/
    .post(function(req, res){
 
        var cliente = new Cliente();
        cliente.nomeFantasia = req.body.nomeFantasia;
        cliente.razaoSocial = req.body.razaoSocial;
        cliente.cnpj = req.body.cnpj;
 
        cliente.save(function(error){
            if(error){
                res.send('Erro ao tentar salvar o cliente....: ' + error);
            }
            else{
                res.json({ message:'Cliente cadastrado com sucesso!' });
            }
        });
    })
 
/* 2) Recurso para recuperar todos clientes (acessar em Get http://localhost:8000/api/clientes)*/
.get(function(req, res){
    Cliente.find(function(error, clientes){
        if(error){
            res.send('Erro ao tentar recuperar os clientes....: ' + error);
        }
        else{
            res.json(clientes);
        }
    });
});

/* 3) Recurso para recuperar cliente por id (acessar em Get http://localhost:8000/api/clientes/id/:id)*/
router.route('/clientes/id/:id').get(function(req, res){
    var id = req.params.id;
    Cliente.findById(id, function(error, cliente){
        if(error){
            res.send('Erro ao tentar recuperar o cliente....: ' + error);
        }
        else{
            res.json(cliente);
        }
    });
})

/* 4) Recurso para atualizar dados do cliente (acessar em PUT http://localhost:8000/api/clientes/id/:id)*/
.put(function(req, res){
    var id = req.params.id;
    Cliente.findById(id, function(error, cliente){
        if(error){
            res.send('Erro ao tentar recuperar o cliente....: ' + error);
        }
        else{
            if(cliente){
                var nomeFantasia = req.body.nomeFantasia;
                var razaoSocial = req.body.razaoSocial;
                var cnpj = req.body.cnpj;

                Cliente.update({ _id: id }, { $set: {
                        nomeFantasia: nomeFantasia,
                        razaoSocial: razaoSocial,
                        cnpj: cnpj,
                    } },function(error){
                    if(error){
                        res.send('Erro ao tentar atualizar o cliente....: ' + error);
                    }
                    else{
                        res.json({ message:'cliente atualizado com sucesso!' });
                    }
                });
            }
            else{
                res.json({ message:'cliente não encontrado!' });
            }
        }
    });
})

/* 5) Recurso para deletar dados do cliente (acessar em DELETE http://localhost:8000/api/clientes/id/:id)*/
.delete(function(req, res){
    var id = req.params.id;
    Cliente.findById(id, function(error, cliente){
        if(error){
            res.send('Erro ao tentar recuperar o cliente....: ' + error);
        }
        else{
            if(cliente){

                Cliente.deleteOne({ _id: id }, function(error){
                    if(error){
                        res.send('Erro ao tentar deletar o cliente....: ' + error);
                    }
                    else{
                        res.json({ message:'cliente deletado com sucesso!' });
                    }
                });
            }
            else{
                res.json({ message:'cliente não encontrado!' });
            }
        }
    });
});

//Denifindo uma rota prefixada '/api':
//Todas chamadas começaram com '/api/', exemplo localhost:8000/api/usuarios
app.use('/api', router);
 
//Iniciando a aplicação (Servidor)
app.listen(port);
console.log("Iniciando a app na porta " + port);