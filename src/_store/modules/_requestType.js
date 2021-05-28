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

  async getOne(url) {
    return await axios.get(url);
  }

  async putOne(url, updatedData) {
    return await axios.put(url, updatedData);
  }

  async putMany(url, updateManyData) {
    return await axios.put(url, updateManyData);
  }

  async deleteOne(url) {
    return await axios.delete(url);
  }

  async deleteMany(url, deleteManyIdList) {
    return await axios.delete(url, deleteManyIdList);
  }

  async searchByQuery(url, keys, keyword) {
    return await axios.get(`${url}${keys}/${keyword}`);
  }
}

export default ApiRequest;
