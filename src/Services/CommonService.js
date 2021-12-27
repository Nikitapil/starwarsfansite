import axios from "axios";

export default class CommonService {
    
    static async getCharactersOfItem(itemResponse, key) {
      const response = await axios.all(itemResponse.data[key].map((item)=> axios.get(item)))
      return response;
    }
    static async getPlanetsOfItem(itemResponse) {
        const response = await axios.all(itemResponse.data.planets.map((item)=> axios.get(item)))
        return response;
      }
    static async getStarshipsOfItem(itemResponse) {
        const response = await axios.all(itemResponse.data.starships.map((item)=> axios.get(item)))
        return response;
      }
      static async getVehiclesOfItem(itemResponse) {
        const response = await axios.all(itemResponse.data.vehicles.map((item)=> axios.get(item)))
        return response;
      }
      static async getSpeciesOfItem(itemResponse) {
        const response = await axios.all(itemResponse.data.species.map((item)=> axios.get(item)))
        return response;
      }
      static async getFilmsOfItem(itemResponse) {
        const response = await axios.all(itemResponse.data.films.map((item)=> axios.get(item)))
        return response;
      }
      static async getAllItems(path, page, query) {
        const response = await axios.get(
          `https://swapi.dev/api/${path}/`,
          {
              params: {
                search: query,
                page: page,
              },
            }
        );
        return response;
      }

      static async getAdditionData(url) {
        const response = await axios.get(url)
        return response
      }

      static async getSingleItem(id, path) {
        const response = await axios.get(
          `https://swapi.dev/api/${path}/${id}`
        );
        return response;
      }
  }