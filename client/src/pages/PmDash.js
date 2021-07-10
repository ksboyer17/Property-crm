import React, { Component, useState, useEffect } from "react";
// import residentData from "../residentData";
// import managementData from "../managementData";
import API from "../utils/API";
import { Link } from "react-router-dom";

function PmDash() {
  const [properties, setProperties] = useState([]);
  const [units, setUnits] = useState([]);
  const [tenants, setTenants] = useState([]);

  function loadProperites() {
    API.getProperties()
      .then((res) => {
        console.log("those are all the Properites: ", res);
        setProperties(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteProperties(id) {
    API.deleteProperties(id)
      .then((res) => {
        console.log("Property deleted");
        loadProperites();
      })
      .catch((err) => console.log(err));
  }

  function loadUnits() {
    API.getUnit()
      .then((res) => {
        console.log("this is unit: ", res);
        setUnits(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteUnit(id) {
    API.deleteUnit(id)
      .then((res) => loadUnits())
      .catch((err) => console.log(err));
  }

  function loadTenants() {
    API.getTenant()
      .then((res) => {
        console.log("this is Resident: ", res);
        setTenants(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteTenant(id) {
    API.deleteTenant(id)
      .then((res) => loadTenants())
      .catch((err) => console.log(err));
  }

  // function loadWorkorder() {
  //   API.getWorkorder()
  //     .then((res) => {
  //       console.log("this is workorder: ", res);
  //       setWorkorder(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function deleteWorkorder(id) {
  //   API.deleteWorkorder(id)
  //     .then((res) => loadWorkorder())
  //     .catch((err) => console.log(err));

  useEffect(() => {
    loadProperites();
    loadUnits();
    loadTenants();
  }, []);

  const logout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };

  return (
    <section id="PmDash">
      <div>
        <div className="data-box" id="Pm-properties">
          <h1>Properites List</h1>
          <div
            className="properties-data" //add style class here
          >
            {properties.map((item) => (
              <div key={item.id} className="">
                <div className="">
                  <h2>Properites address is: {item.address} </h2>
                  <p>Properites City is: {item.city}</p>
                  <p>State: {item.state}</p>
                  <p>zip : {item.zip}</p>
                </div>
                <button
                  id="deleteProperties"
                  type="submit"
                  onClick={() => {
                    deleteProperties(item.id);
                  }}
                >
                  Remove Properites
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="data-box">
          <h1>This is PmDash part， unit list</h1>
          <div
            id="Pm-unit"
            className="" //add style class here
          >
            {units.map((item) => (
              <div key={item.id} className="">
                <div className="">
                  <h2>Unit number is: {item.number}</h2>
                  <p>unit rent is: {item.rent}</p>
                  <p>rent due date is : {item.rentDue}</p>
                </div>
                <button
                  id="deleteUnit"
                  type="submit"
                  onClick={() => {
                    deleteUnit(item.id);
                  }}
                >
                  Remove Unit
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="data-box">
          <h1>This is PmDash part， tenant list</h1>
          <div
            id="Pm-tenants"
            className="" //add style class here
          >
            {tenants.map((item) => (
              <div key={item.id} className="">
                <div className="">
                  <h2>Resident firstname is: {item.firstName}</h2>
                  <p>Resident lastname is: {item.lastName}</p>
                  <p>Resident phone is: {item.phone}</p>
                  <p>Resident lease starts Date: {item.leaseDate}</p>
                  <p>Resident Duration: {item.leaseDuration} year/s</p>
                </div>
                <button
                  id="deleteUnit"
                  type="submit"
                  onClick={() => {
                    deleteTenant(item.id);
                  }}
                >
                  Remove Tenants
                </button>
              </div>
            ))}
          </div>
        </div>

        <button id="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </section>
  );
}

export default PmDash;
