const connection = require('./connection');

const getCepInfo = async (cep) => {
  const db = await connection();
  const CEP = await db.collection('ceps').find({cep})
  if (!CEP) return null;
  return CEP;

};

const saveCEPinfo = async (cepInfo) => {
   const {CEP , UF , cidade , bairro, logradouro} = cepInfo;
   const db = await connection();
   const CEP = await db.collection('ceps').insertOne({CEP , UF , cidade , bairro, logradouro});
   return CEP;
}

module.exports = {
getCepInfo,
saveCEPinfo,
};