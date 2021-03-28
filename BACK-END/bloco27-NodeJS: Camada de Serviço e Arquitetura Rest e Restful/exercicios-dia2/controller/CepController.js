const { Router } =  require('express');
const cepService = require('../service/CepService');

const cepRouter = new Router();

appRouter.get('/', async(req, res) => {
  const { cep } = req.query;
  const cepInfo = await cepService.getCepInfo(cep);
  if(cepInfo.isError){
    return res.status(404).json({ message: cepInfo.message });
  }
  return res.status(200).json(cepInfo);
});

module.exports = cepRouter;