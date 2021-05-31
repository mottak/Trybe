const cep = require('../model/Cep');

const URL = 'http://cep.la';

const APIrequest = async () => {
  return fetch(URL, {Accept: 'application/json'})
  .then((resp) => resp.json())

};

const cepValidation = (cep) => {
  console.log(cep)
  const regex = /^\d{5}-?\d{3}$/;
  const isCepValid = cep.test(/^\d{5}-?\d{3}$/);
  console.log(isCepValid)
  if(cep && isCepValid){
    return isCepValid;
  }
}

const getCepInfo = async (cep) => {
  const newCep = 0;
  let cepInfo = '';
  const error = { isError: false}
  const validCep = cepValidation(cep);
  
  if(!validCep) {
    error.isError = true;
    error.message = 'CEP invalido';
    return error;
  }
  if(validCep.length === 0){
    error.message = 'CEP não encontrado';
  }

  cepInfo = await cep.getCepInfo(newCep);

  if(!cepInfo) {
    cepInfo = APIrequest(cep);
    await cep.saveCEPinfo(cepInfo);
    return cepInfo;
  }
};
4

module.exports = {
  getCepInfo,
};