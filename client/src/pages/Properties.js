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
