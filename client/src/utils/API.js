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
