const express = require('express');
const plants = require('./plants');

const app = express()

const PORT = 3000;

// GET /sunny/:id : retorna uma planta que precisa de sol com o id.
app.get('/:id', ((req, res)=> {
  const { id } = req.params;
  const sunny = plants.getPlantsThatNeedsSunWithId(id);
  return res.send(sunny)
} ));

// GET /plant/:id : retorna uma planta com o id;
app.get('/:id', ((req, res)=> {
  const { id } = req.params;
  const Plant = plants.getPlantById(id);
  return res.send(Plant)
} ));

// GET /plants : retorna todas as plantas;
app.get('/', ((_req, res)=> {
  const allPlants = plants.getAllPlants();
  return res.send(allPlants);
} ));

// POST /plant/:id : sobrescreve a planta com id;
app.post('/:id', ((req, res)=> {
  const { id } = req.params;
  const newPlant = req.body;
  const allPlantInfo = req.PlantInfo;
  const newPlant = plants.editPlant(id, allPlantInfo);
  return res.send(newPlant)
} ));

// POST /plant : cria uma planta nova;
app.post('/', ((_req, res)=> {
  const { id, breed, needsSun, origin, specialCare, size} = req.body;
  const newPlant =  plants.createNewPlant(id, breed, needsSun, origin, specialCare, size);
  return res.send(newPlant);
} ));


// DELETE /plant/:id : deleta uma planta com o id;
app.delete('/:id', ((req, res)=> {
  const { id } = req.params;
  const deletedPlant = plants.removePlantById(id);
  return res.send(deletedPlant);
} ));

app.listen(PORT, ()=> console.log(`escutando porta ${PORT}`));