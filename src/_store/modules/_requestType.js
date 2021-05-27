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

  async putMany(url, updateManyData) {
    return await axios.put(url, updateManyData);
  }

  async deleteOne(url, id) {
    return await axios.delete(`${url}${id}`);
  }

  async deleteMany(url, deleteManyData) {
    return await axios.delete(url, deleteManyData);
  }

  async searchByQuery(url, keys, keyword) {
    return await axios.get(`${url}${keys}/${keyword}`);
  }
}

export default ApiRequest;
