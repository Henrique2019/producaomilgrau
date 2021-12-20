import axios from "axios";

// consumindo api  produçao medral. link https://apimedral.glitch.me/ 

const Prod =  axios.create({
  baseURL: "https://apimedral.glitch.me", // url base  
});

export default Prod;