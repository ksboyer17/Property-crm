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

  return (
    <section id="Properties" className="pageContainer">
      <div className="data-box card" id="Pm-properties">
        <div
          className="properties-data card-content" //add style class here
        >
          {properties.map((item) => (
            <div key={item.id} className="media-content">
              <div className="content">
                <h2>{item.address}</h2>
                <p>
                  {item.city}, {item.state} {item.zip}
                </p>
              </div>
              <Link
                to={`/property/${item.id}`}
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