import axios from "axios";

export default {
  // Gets all properties
  getProperties: function () {
    return axios.get("/api/properties/");
  },
  // Gets one property
  getPropertiesById: function (id) {
    return axios.get("/api/properties/" + id);
  },
  // Deletes
  deleteProperties: function (id) {
    return axios.delete("/api/properties/" + id);
  },
  // create
  postProperties: function ({}) {
    return axios.post("/api/properties/", {});
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
  // create
  postUnit: function ({}) {
    return axios.post("/api/units/", {});
  },

  getTenant: function () {
    return axios.get("/api/tenants/");
  },
  // Gets one property
  getTenantById: function (id) {
    return axios.get("/api/tenants/" + id);
  },
  // Deletes
  deleteTenant: function (id) {
    return axios.delete("/api/tenants/" + id);
  },
  // create
  postTenant: function ({}) {
    return axios.post("/api/tenants/", {});
  },

  loginUser: function (credentials) {
    return axios.post("/api/auth/login", credentials);
  },

  signupUser: function (info) {
    return axios.post("/api/auth/", info);
  },
};
