const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

const isBrasilianPant =(origin) =>{
  if(origin === 'Brazil') 8
  if(origin !== 'Brazil') 7
};

const checkWaterFrequency  = (needsSun, origin, size) => {
  const plantOrigin = isBrasilianPant(origin);
  const waterFrequency = 0;
  if(!needsSun){
    return waterFrequency = (size / 2) *  1.33 + plantOrigin;
  }
  if(needsSun){
    return waterFrequency = size *  0.77 + plantOrigin;
  }
}

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const {id, breed, needsSun, origin, specialCare, size} = req.body;
  const waterFrequency = checkWaterFrequency(needsSun, origin, size);

  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  req.PlantInfo = newPlant;
}

const getAllPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id !== id);
};


const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
    }
  });
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId)
      return newPlant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  return defaultPlants;
};

module.exports = {
  getAllPlants,
  initPlant,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant,
  createNewPlant
}; 