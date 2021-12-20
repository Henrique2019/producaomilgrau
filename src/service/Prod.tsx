import axios from "axios";

// consumindo api  produçao medral. link https://medralapi.glitch.me/ 
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmY5NDc2MmFiNGFhMmIwODg5MGIyZSIsImlhdCI6MTYzOTk0NTM0NywiZXhwIjoxNjQwMDMxNzQ3fQ.-8OW_L572eeBNjUUgTbj1RvXeQZUsLYVWk7JXlbt_CU"

const Prod =  axios.create({
  baseURL: "https://apimedral.glitch.me",
  
});

export default Prod;