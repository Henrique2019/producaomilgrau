import axios from "axios";

// consumindo api  produçao medral. link https://medralapi.glitch.me/ 


const Prod =  axios.create({
  baseURL: `'https://medralapi.glitch.me/'`
  
});

export default Prod;