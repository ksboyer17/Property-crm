import axios from "axios";

export default {
  // Gets all properties
  getProperties: function () {
    return axios.get("/api/properties/");
  },
  // Gets one property
  getPropertyById: function (id) {
    return axios.get("/api/properties/" + id);
  },
  // Deletes
  deleteProperty: function (id) {
    return axios.delete("/api/properties/" + id);
  },
  createProperty: function (data) {
    return axios.post("/api/properties", data);
  },
  updateProperty: function (id, data) {
    return axios.put(`/api/properties/${id}`, data);
  },

  getUnit: function () {
    return axios.get("/api/units/");
  },
  // Gets one property
  getUnitById: function (id) {
    return axios.get("/api/units/" + id);
  },
  // Deletes
  deleteUnit: function (id) {
    return axios.delete("/api/units/" + id);
  },
  createUnit: function (id, data) {
    return axios.post(`/api/properties/${id}/unit`, data);
  },
  updateUnit: function (id, data) {
    return axios.put(`/api/units/${id}`, data);
  },

  updateUnitByid: function (id) {
    return axios.put("/api/units/" + id);
  },

  checkAuth: function () {
    return axios.get("/api/auth/checkAuth");
  },

  loginUser: function (credentials) {
    return axios.post("/api/auth/login", credentials);
  },

  signupUser: function (info) {
    return axios.post("/api/auth/", info);
  },

  logoutUser: function () {
    return axios.post("/api/auth/logout");
  },
};
