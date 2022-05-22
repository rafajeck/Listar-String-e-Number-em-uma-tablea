const cadastrar_voo = async function(){
    const id_cliente = document.getElementById("Id_cliente").value;
    const hora_part = document.getElementById("id_hora_part").value;
    const hora_cheg= document.getElementById("id_hora_cheg").value;
    const trecho = document.getElementById("id_trecho").value;
    const voo = document.getElementById("id_voo").value;
    const passagem = document.getElementById("id_passagem").value;
    const tipo_aviao = document.getElementById("id_tipo_aviao").value;
    const aeroporto_cheg = document.getElementById("id_aeroporto_cheg").value;
    const voo_atraso = document.getElementById("chkAtraso").checked;
    
    const dados = {
                    "id_cliente":id_cliente, 
                    "hora_partida":hora_part, 
                    "hora_chegada":hora_cheg,
                    "trecho":trecho,
                    "voo":voo,
                    "passagem":passagem,
                    "tipo_do_aviao":tipo_aviao,
                    "Aeroporto_de_chegada":aeroporto_cheg,
                    "Voo_em_Atraso":voo_atraso
                };
              

    const response = await fetch("http://localhost:3000/voo/create", 
                { method: "POST", body: JSON.stringify(dados), headers: {
                          'Content-Type': 'application/json' }});
    const content = await response.json();
  
      console.log(content);
}

const listar = async function(){
  const response = await fetch("http://localhost:3000/voo/getAll");
  const voo = await response.json();
  voo.forEach((Voo) => {
    //PREENCHE LISTA
    var tbody = document.getElementById('tabelavoos').getElementsByTagName('tbody')[0];
    //CRIA UMA NOVA LINHA NA TABELA
    var row = tbody.insertRow();
    //CRIA NOVAS COLUNAS PARA A LINHA
    var id_cliente = row.insertCell(0);
    var hora_part = row.insertCell(1);
    var hora_cheg = row.insertCell(2);
    var trecho = row.insertCell(3);
    var voo = row.insertCell(4);
    var passagem = row.insertCell(5);
    var tipo_aviao = row.insertCell(6);
    var aeroporto_cheg = row.insertCell(7);
    var voo_atraso = row.insertCell(8);
    var excluir = row.insertCell(9);

    //PREENCHE DADOS VINDOS DA BUSCA
    id_cliente.innerHTML = Voo.id_cliente;
    hora_part.innerHTML = Voo.hora_part;
    hora_cheg.innerHTML = Voo.hora_cheg;
    trecho.innerHTML = Voo.trecho;
    voo.innerHTML = Voo.voo;
    passagem.innerHTML = Voo.passagem;
    tipo_aviao.innerHTML = Voo.tipo_aviao;
    aeroporto_cheg.innerHTML = Voo.aeroporto_cheg;
    voo_atraso.innerHTML = (Voo.published == 'True') ? 'Sim' : 'Não';
    excluir.innerHTML = `<button class="btn btn-danger" onclick="deletarVoo('${Voo._id}')">Excluir</button>`;
  });
}

const deletarVoo= async function(id){
  const response = await fetch(`http://localhost:3000/voo/delete/${id}`,  
                        { method: "DELETE" });
  const removeResponse = await response.json();
  if (response.status == 200)
    location.reload();
}
