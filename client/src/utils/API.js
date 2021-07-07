import axios from "axios";

export default {
  // Gets all properties
  getProperties: function () {
    return axios.get("/api/properties/");
  },
  // Gets one property
  getPropertiesById: function () {
    return axios.get("/api/properties/" + id);
  },
  // Deletes
  deleteProperties: function () {
    return axios.delete("/api/properties/" + id);
  },
  // create
  postProperties: function ({}) {
    return axios.post("/api/properties/", {});
  },

  // Gets all Management
  getManagement: function () {
    return axios.get("/api/postcontroller/managementdatas/");
  },
  // Gets the Management with the given id
  getManagementById: function (id) {
    return axios.get("/api/postcontroller/managementdatas/" + id);
  },
  // Deletes the Management with the given id
  deleteManagement: function (id) {
    return axios.delete("/api/postcontroller/managementdatas/" + id);
  },
  postManagement: function ({}) {
    return axios.post("/api/postcontroller/managementdatas/", {});
  },

  // Gets all Work Order
  getWorkorder: function () {
    return axios.get("/api/postcontroller/workorderdatas");
  },
  // Gets the Work Order with the given id
  getWorkorderById: function (id) {
    return axios.get("/api/postcontroller/workorderdatas/" + id);
  },
  // Deletes the Work Order with the given id
  deleteWorkorder: function (id) {
    return axios.delete("/api/postcontroller/workorderdatas/" + id);
  },
  postWorkorder: function ({}) {
    return axios.post("/api/postcontroller/workorderdatas", {});
  },

  loginUser: function (credentials) {
    return axios.post("/api/auth/login", credentials);
  },

  signupUser: function (info) {
    return axios.post("/api/auth/", info);
  },
};
