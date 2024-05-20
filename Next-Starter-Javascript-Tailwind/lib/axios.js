import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (request) => {
  // Get the session
  const session = await getServerSession(authOptions);
  const { token } = session || {};

  // Add your desired session value to the request headers
  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

axiosInstance.interceptors.response.use(
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

export default axiosInstance;
