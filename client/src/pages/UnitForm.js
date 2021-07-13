import React from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

const UnitForm = () => {
  const { id } = useParams();

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
        API.updateUnitByid(id, {
          number,
          rent,
          tenant_firstName,
          tenant_lastName,
          tenant_phone,
          tenant_leaseDate,
          tenant_leaseDuration,
        })
          .then((res) => {
            // handle
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
    <section className="pageContainer">
      <div className="data-box card">
        {id ? (
          <form>
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
              placeholder="New Tenant Last Name"
              name="add-unit-tenant-LastName"
              id="add-unit-tenant-LastName"
            ></input>
            <input
              className="input add-unit "
              style={{ width: "400px" }}
              type="text"
              placeholder="New Tenant first Name"
              name="add-unit-tenant-firstName"
              id="add-unit-tenant-firstName"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="tel"
              placeholder="New Tenant Phone Number"
              name="add-unit-tenant-phone"
              id="add-unit-tenant-phone"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="date"
              placeholder="New Tenant Lease Starts Date"
              name="add-unit-tenant-leaseDate"
              id="add-unit-tenant-leaseDate"
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="number"
              placeholder="New Tenant Lease Duration"
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
          </form>
        ) : (
          <form>
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
              className="button"
              id="PmDetailbtn"
              type="submit"
              onClick={(e) => {
                addUnit(e);
              }}
            >
              Create New Unit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default UnitForm;
