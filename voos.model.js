module.exports = mongoose => {
    const Voos = mongoose.model(
      "voo",
      mongoose.Schema(
        {
          id_cliente:Number, 
          hora_partida :Number, 
          hora_chegada: Number,
          trecho: String,
          voo : String,
          passagem : String,
          tipo_do_aviao : String,
          Aeroporto_de_chegada: String,
          Voo_em_Atraso : Boolean
        },
        { timestamps: true }
      )
    );
    return Voos;
  };