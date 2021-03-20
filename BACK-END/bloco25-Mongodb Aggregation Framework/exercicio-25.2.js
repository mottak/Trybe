// Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:
        { $divide: [
          { $subtract: ["$$NOW", "$dataNascimento.date"]},
          { $multiply: [ 8600000, 365] } ]
        }
      }
    }
  },

])

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:
        { $divide: [
          { $subtract: ["$$NOW", "$dataNascimento.date"]},
          { $multiply: [ 8600000, 365] } ]
        }
      }
    }
  },
  { 
    $lookup: { 
      localField: "clienteId",
      foreignField: "clienteId",
      from: "vendas",
      as: "compras"
    }
  }
])

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .
db.clientes.aggregate([
  { 
    $lookup: { 
      localField: "clienteId",
      foreignField: "clienteId",
      from: "vendas",
      as: "compras"
    }
  },
  { 
    $match: {
    "compras.dataVenda": {
      $gte: ISODate('2019-06-01'),
      $lte: ISODate('2020-03-31')
    }
    }
  }
])

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.
db.clientes.aggregate([
  { 
    $lookup: { 
      localField: "clienteId",
      foreignField: "clienteId",
      from: "vendas",
      as: "compras"
    }
  },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate('2019-06-01'),
      $lte: ISODate('2020-03-31')
    }
  }}
]).count();

// Exercício 6 : Deixe apenas os top 10 clientes com mais compras nesse período.
db.clientes.aggregate([
  { 
    $lookup: { 
      localField: "clienteId",
      foreignField: "clienteId",
      from: "vendas",
      as: "compras"
    }
  },
  { 
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $addFields: {
      total_compras: {
        $size: "$compras"
      }
    }
  },
  { $sort: { total_compras: -1 } },
  { $limit: 10 }
])

// Exercício 7 : Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra ( valorTotal ).
db.clientes.aggregate([
  { 
    $lookup: { 
      localField: "clienteId",
      foreignField: "clienteId",
      from: "vendas",
      as: "compras"
    }
  },
  { 
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId:
    }
  }
]);
// Exercício 8 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
// Exercício 9 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura: