import axios from "axios";

// using axios to fetch the data from api
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4Odhm6UhES0WigSTyKq-74FeCq8LQvQET_3w0z1XeGPZkgLjsTrb9CjEMC1Goz4NesygLoD5Ce3cpzPfuo8ayyogRsZcBBlEVD1eCxBfo8EHA08F2rp-AKMDpVKpY3Yx",
  },
});
