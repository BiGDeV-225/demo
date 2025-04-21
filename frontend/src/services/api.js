import axios from 'axios';

const API_URL = 'http://47.128.235.219:8000';

const api = {
  // Get all items
  getItems: async () => {
    try {
      const response = await axios.get(`${API_URL}/items/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  // Get single item
  getItem: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/items/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching item ${id}:`, error);
      throw error;
    }
  },

  // Create new item
  createItem: async (item) => {
    try {
      const response = await axios.post(`${API_URL}/items/`, item);
      return response.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  },

  // Update item
  updateItem: async (id, item) => {
    try {
      const response = await axios.put(`${API_URL}/items/${id}`, item);
      return response.data;
    } catch (error) {
      console.error(`Error updating item ${id}:`, error);
      throw error;
    }
  },

  // Delete item
  deleteItem: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/items/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting item ${id}:`, error);
      throw error;
    }
  },
};

export default api;