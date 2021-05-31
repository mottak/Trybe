const connection = require('./connection');

const getCepInfo = async (cep) => {
  const db = await connection();
  const CEP = await db.collection('ceps').find({cep})
  if (!CEP) return null;
  return CEP;

};

const saveCEPinfo = async (cepInfo) => {
   const {cep , UF , cidade , bairro, logradouro} = cepInfo;
   const db = await connection();
   const CEP = await db.collection('ceps').insertOne({cep , UF , cidade , bairro, logradouro});
   return CEP;
}

// const CEP = db.collection('ceps').aggregate([{$match: cep}, { quantidade: { $sum: 1 } }]);

module.exports = {
getCepInfo,
saveCEPinfo,
};