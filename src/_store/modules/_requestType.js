import axios from "axios";

class ApiRequest {
  async postOne(url, data) {
    return await axios.post(url, data);
  }

  async postMany(url, postManyData) {
    return await axios.post(url, postManyData);
  }

  async getAll(url) {
    return await axios.get(url);
  }

  async getOne(url, id) {
    return await axios.get(`${url}${id}`);
  }

  async putOne(url, id, updatedData) {
    return await axios.put(`${url}${id}`, updatedData);
  }

  async deleteOne(url, id) {
    return await axios.delete(`${url}${id}`);
  }

  async deleteMany(url, deleteManyData) {
    return await axios.delete(url, deleteManyData);
  }

  async searchByQuery(keys, keyword) {
    return await axios.get(`search/${keys}/${keyword}`);
  }
}

export default ApiRequest;
