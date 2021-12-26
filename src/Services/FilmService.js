import axios from "axios";

export default class FilmService {
    static async getAll() {
      const response = await axios.get(
        "https://swapi.dev/api/films/"
      );
      return response;
    }
  }