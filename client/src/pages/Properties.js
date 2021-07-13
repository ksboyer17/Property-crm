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

  useEffect(() => {
    loadProperites();
    //loadTenants();
  }, []);

  return (
    <section id="Properties" className="pageContainer">
      <div className="data-box card" id="Pm-properties">
        <form>
          <h3>Edit your prorperty</h3>
          <label>
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
                // refresh();
              }}
            >
              Add New property
            </button>
          </label>
        </form>
      </div>
      <div className="data-box card" id="Pm-properties">
        <div
          className="properties-data card-content" //add style class here
        >
          {properties.map((item) => (
            <div key={item._id} className="media-content">
              <div className="content">
                <h2>{item.address}</h2>
                <p>
                  {item.city}, {item.state} {item.zip}
                </p>
              </div>
              <Link
                to={`/property/${item._id}/details`}
                className="button is-success"
                id="PmDetailbtn"
              >
                View Property Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
