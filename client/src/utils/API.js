import axios from "axios";

export default {
  // Gets all Resident
  getResident: function () {
    return axios.get("/api/postcontroller/residentdatas");
  },
  // Gets the Resident with the given id
  getResidentById: function (id) {
    return axios.get("/api/postcontroller/residentdatas/" + id);
  },
  // Deletes the Resident with the given id
  deleteResident: function (id) {
    return axios.delete("/api/postcontroller/residentdatas/" + id);
  },

  // Gets all Management
  getManagement: function () {
    return axios.get("/api/postcontroller/managementdatas");
  },
  // Gets the Management with the given id
  getManagementById: function (id) {
    return axios.get("/api/postcontroller/managementdatas/" + id);
  },
  // Deletes the Management with the given id
  deleteManagement: function (id) {
    return axios.delete("/api/postcontroller/managementdatas/" + id);
  },
};
