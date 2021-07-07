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
      .then((res) => loadProperites())
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
    API.deleteManagement(id)
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

  function deleteTenants(id) {
    API.deleteTenants(id)
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
      <div className="">
        <h1>This is PmDash part， resident list</h1>
        <div
          id="Pm-properties"
          className="" //add style class here
        >
          {properties.map((item) => (
            <div key={item.id} className="">
              <div className="">
                <h2>Properites address is: {item.address}</h2>
                <p>Properites City is: {item.city}</p>
                <p>State: {item.state}</p>
                <p>zip : {item.zip}</p>
                <p>Total unit : {item.units.length}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
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
            </div>
          ))}
        </div>
      </div>

      <div className="">
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
                <p>Resident Duration: {item.leaseDuration} year/years</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button id="logout" onClick={logout}>
        Logout
      </button>
    </section>
  );
}

export default PmDash;
