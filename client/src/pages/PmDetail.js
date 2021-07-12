import React, { useState, useEffect } from "react";
import API from "../utils/API";

function PmDetail() {
  const [units, setUnits] = useState([]);

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

  useEffect(() => {
    loadUnits();
  }, []);

  function refresh() {
    window.location.reload();
  }

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

  const updateUnit = async function (e) {
    e.preventDefault();
    const number = document.querySelector("#add-unit-number").value.trim();
    const rent = document.querySelector("#add-unitRent").value.trim();
    const tenant_firstName = document
      .querySelector("#add-unit-tenant-LastName")
      .value.trim();
    const tenant_lastName = document
      .querySelector("#add-unit-tenant-firstName")
      .value.trim();
    const tenant_phone = document
      .querySelector("#add-unit-tenant-phone")
      .value.trim();
    const tenant_leaseDate = document
      .querySelector("#add-unit-tenant-leaseDate")
      .value.trim();
    const tenant_leaseDuration = document
      .querySelector("#add-unit-tenant-leaseDuration")
      .value.trim();

    if (
      number &&
      rent &&
      tenant_firstName &&
      tenant_lastName &&
      tenant_phone &&
      tenant_leaseDate &&
      tenant_leaseDuration
    ) {
      const filter = { number: number };

      //how? base on user input Unit number to find the correct Unit to update
      {
        API.updateUnitByid(units._id, {
          number,
          rent,
          tenant_firstName,
          tenant_lastName,
          tenant_phone,
          tenant_leaseDate,
          tenant_leaseDuration,
        })
          .then((res) => {
            setUnits(res.data);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const addUnit = async function (e) {
    e.preventDefault();
    const number = document.querySelector("#add-unit-Unit-Number").value.trim();
    const rent = document.querySelector("#add-unit-Unit-Rent").value.trim();

    if (number && rent) {
      let response = await fetch("/api/units", {
        method: "POST",
        body: JSON.stringify({
          number,
          rent,
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

  return (
    <section id="PmDash">
      <div>
        <div className="data-box card" id="Pm-properties">
          <h1>Properties List</h1>
          <div
            className="properties-data card-content" //add style class here
          >
            {units.map((item) => (
              <div key={item.id} className="media-content">
                <div className="content">
                  <h2>Unit number: {item.number}</h2>
                  <p>Unit Rent is: {item.rent}</p>
                  <p>Tenant First Name: {item.tenant_firstName}</p>
                  <p>Tenant Last Name: {item.tenant_lastName}</p>
                  <p>Tenant Phone Number: {item.tenant_phone}</p>
                  <p>Tenant Lease starts: {item.tenant_leaseDate}</p>
                  <p>Tenant Lease Duration: {item.tenant_leaseDuration}</p>
                </div>
                <button
                  id="deleteProperties"
                  type="submit"
                  onClick={(e) => {
                    deleteUnit(e);
                  }}
                >
                  Remove Unit
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="data-box card">
          <h1>function list</h1>
          <div
            id="Pm-tenants"
            className="card-content" //add style class here
          >
            <button id="logout" onClick={logout}>
              Logout
            </button>

            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="text"
              placeholder="Unit Number"
              name="add-unit-number"
              id="add-unit-number"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="number"
              placeholder="Unit Rent"
              name="add-unitRent"
              id="add-unitRent"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="text"
              placeholder="New Tenant Last Name (Option)"
              name="add-unit-tenant-LastName"
              id="add-unit-tenant-LastName"
            ></input>
            <input
              className="input add-unit "
              style={{ width: "400px" }}
              type="text"
              placeholder="New Tenant first Name (Option)"
              name="add-unit-tenant-firstName"
              id="add-unit-tenant-firstName"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="tel"
              placeholder="New Tenant Phone Number (Option)"
              name="add-unit-tenant-phone"
              id="add-unit-tenant-phone"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="date"
              placeholder="New Tenant Lease Starts Date (Option)"
              name="add-unit-tenant-leaseDate"
              id="add-unit-tenant-leaseDate"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="number"
              placeholder="New Tenant Lease Duration (Option)"
              name="add-unit-tenant-leaseDuration"
              id="add-unit-tenant-leaseDuration"
            ></input>
            <button
              id="addTenats"
              type="submit"
              onClick={(e) => {
                updateUnit(e);
              }}
            >
              Update New Unit
            </button>

            <div>
              <input
                className="input add-unit"
                style={{ width: "400px" }}
                type="text"
                placeholder="New Unit Number"
                name="add-unit-Unit-Number"
                id="add-unit-Unit-Number"
              ></input>
              <input
                className="input add-unit"
                style={{ width: "400px" }}
                type="text"
                placeholder="New Unit Rent"
                name="add-unit-Unit-Rent"
                id="add-unit-Unit-Rent"
              ></input>
              <button
                id="addTenats"
                type="submit"
                onClick={(e) => {
                  addUnit(e);
                }}
              >
                Create New Unit
              </button>
            </div>
            {/* 
            <button id="addUnit">Add New Unit</button>

            <button id="addProperty">Add New Properties</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default PmDetail;
