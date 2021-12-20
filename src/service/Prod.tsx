import axios from "axios";

// consumindo api  produçao medral. link https://medralapi.glitch.me/ 

const Prod =  axios.create({
  baseURL: "https://apimedral.glitch.me",
  
});

export default Prod;