import axios from "axios";

export default class CommonService {
    
    static async getCharactersOfItem(itemResponse) {
      const response = await axios.all(itemResponse.data.characters.map((item)=> axios.get(item)))
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
  }