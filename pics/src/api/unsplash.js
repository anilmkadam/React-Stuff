import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5d5433b717fc3cf5085f9c672917bba74341d463cdf25610b152c34773a3dfe2"
  }
});
