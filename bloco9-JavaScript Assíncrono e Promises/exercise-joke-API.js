const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const element = await fetch(API_URL, myObject).then((response) => response.json());
   document.querySelector('#jokeContainer').innerText = element.joke;
   
};

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};



window.onload = () => fetchJoke();