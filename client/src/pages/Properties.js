import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

function Properties() {
  const [properties, setProperties] = useState([]);
  // const [units, setUnits] = useState([]);
  // const [tenants, setTenants] = useState([]);

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

  function refresh() {
    window.location.reload();
  }

  // function loadTenants() {
  //   API.getTenant()
  //     .then((res) => {
  //       console.log("this is Resident: ", res);
  //       setTenants(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function deleteTenant(id) {
  //   API.deleteTenant(id)
  //     .then((res) => loadTenants())
  //     .catch((err) => console.log(err));
  // }

  //async function addProperty(event)
  const addProperty = async function (e) {
    e.preventDefault();
    const address = document
      .querySelector("#add-property-address")
      .value.trim();
    const city = document.querySelector("#add-city").value.trim();
    const state = document.querySelector("#add-state").value.trim();
    const zip = document.querySelector("#add-zip").value.trim();

    if (address && city && state && zip) {
      let response = await fetch("/api/properties", {
        method: "POST",
        body: JSON.stringify({
          address,
          city,
          state,
          zip,
        }),
        headers: { "Content-Type": "application/json" },
      });
      response = await response.json();

      console.log("******", response);
      return response;
    } else {
      console.log("NO data received");
    }
  };

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
    //loadTenants();
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
    <section id="Properties" className="container">
      <div>
        <div className="data-box card" id="Pm-properties">
          <h1>Properties List</h1>
          <div
            className="properties-data card-content" //add style class here
          >
            {properties.map((item) => (
              <div key={item.id} className="media-content">
                <div className="content">
                  <h2>Property address is: {item.address}</h2>
                  <p>Property City is: {item.city}</p>
                  <p>State: {item.state}</p>
                  <p>Zip Code : {item.zip}</p>
                </div>
                <Link
                  to={`/property/${item.id}`}
                  className="button is-success"
                  id="PmDetailbtn"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="data-box card">
          <h1>Function list</h1>
          <div
            id="Pm-tenants"
            className="card-content" //add style class here
          >
            <button id="logout" onClick={logout}>
              Logout
            </button>

            <input
              className="input add-property"
              style={{ width: "400px" }}
              type="text"
              placeholder="Add Address"
              name="add-property-address"
              id="add-property-address"
            ></input>
            <input
              className="input add-property"
              style={{ width: "400px" }}
              type="text"
              placeholder="City Name"
              name="add-city"
              id="add-city"
            ></input>
            <input
              className="input add-property"
              style={{ width: "400px" }}
              type="text"
              placeholder="State"
              name="add-state"
              id="add-state"
            ></input>
            <input
              className="input add-property"
              style={{ width: "400px" }}
              type="text"
              placeholder="Zip Code"
              name="add-zip"
              id="add-zip"
            ></input>
            <button
              id="addTenats"
              type="submit"
              onClick={(e) => {
                addProperty(e);
                refresh();
              }}
            >
              Add New property
            </button>
            {/* 
            <button id="addUnit">Add New Unit</button>

            <button id="addProperty">Add New Properties</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Properties;
