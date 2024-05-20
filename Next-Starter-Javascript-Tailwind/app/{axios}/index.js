import axios from "axios";
import { getToken } from "../{utils}";

export const baseURL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3001";

const server = axios.create({ baseURL });
const {
  interceptors: { request, response },
} = server;

request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${getToken()}`,
  };

  return config;
});

response.use(
  (response) => {
    return response;
  },

  (error) => {
    const {
      response: {
        data: { message },
      },
    } = error;
    console.log(message);
    //handle errors sent by the server
  }
);

export default server;
