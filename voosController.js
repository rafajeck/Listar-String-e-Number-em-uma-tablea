const db = require('../models/index.js');
const Voos = db.voos;

exports.create = (request, response) => {
    // Valida requestuisição
    if (!request.body.id_cliente) {
      response.status(400).send({ message: "Os Dados devem ser Completos!" });
      return;
    }
    // Cria instância Modelo para o Voo
    const VoosInstance = new Voos({
      id_cliente: request.body.id_cliente, 
      hora_partida: request.body.hora_partida, 
      hora_chegada: request.body.hora_chegada,
      trecho: request.body.trecho,
      voo: request.body.voo,
      passagem: request.body.passagem,
      tipo_do_aviao: request.body.tipo_do_aviao,
      Aeroporto_de_chegada: request.body.Aeroporto_de_chegada,
      Voo_em_Atraso: request.body.Voo_em_Atraso ? request.body.Voo_em_Atraso : false
    });
    
    // Insere o Voo no Banco de Dados
    VoosInstance
      .save(VoosInstance)
      .then(data => {
        response.send(data);
      })
      .catch(err => {
        response.status(500).send({
          message:
            err.message || "Erro durante o processo de inclusão dos dados."
        });
      });
  };

  exports.getAll = (request, response) => {
    Voos.find()
    .then(data => {
      response.send(data);
    })
    .catch(err => {
      response.status(500).send({
        message:
          err.message || "Erro na busca dos Voos."
      });
    });
  };

  exports.delete = (request, response) => {
    const id = request.params.id;
    Voos.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          response.status(404).send({
            message: `Não foi possível remover o Voo!`
          });
        } else {
          response.send({
            message: "Voo removido com sucesso!"
          });
        }
      })
      .catch(err => {
        response.status(500).send({
          message: "Erro interno ao remover o Voo." || err
        });
      });
  };