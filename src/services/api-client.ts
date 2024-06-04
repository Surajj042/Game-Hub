import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'cedc6aada05f46699dda16d528b2c412'
    }
})