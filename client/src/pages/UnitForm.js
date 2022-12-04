import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { useHistory, useLocation } from "react-router";

const UnitForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const { state: navigationState } = useLocation();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (id && navigationState.unit) {
      setFormData(navigationState.unit);
    }
  }, [navigationState, id]);

  const updateUnit = async function (e) {
    e.preventDefault();
    const {
      number,
      rent,
      tenant_firstName,
      tenant_lastName,
      tenant_phone,
      tenant_leaseDate,
      tenant_leaseDuration,
      _id,
    } = formData;

    if (
      number &&
      rent &&
      tenant_firstName &&
      tenant_lastName &&
      tenant_phone &&
      tenant_leaseDate &&
      tenant_leaseDuration &&
      _id
    ) {
      try {
        await API.updateUnit(_id, {
          _id,
          number,
          rent,
          tenant_firstName,
          tenant_lastName,
          tenant_phone,
          tenant_leaseDate,
          tenant_leaseDuration,
        });
        history.push(`/property/${navigationState.propertyId}/details`);
      } catch (err) {
        console.log(err);
        alert("Unable to add property. Please try again!");
      }
    } else {
      console.log("All fields are required");
    }
  };

  const addUnit = async function (e) {
    e.preventDefault();
    const number = document.querySelector("#add-unit-Unit-Number").value.trim();
    const rent = document.querySelector("#add-unit-Unit-Rent").value.trim();

    if (number && rent) {
      try {
        await API.createUnit(navigationState.propertyId, {
          number,
          rent,
        });
        history.push(`/property/${navigationState.propertyId}/details`); //how could back to the property detail (/property/:id/detail?)
      } catch (err) {
        console.log(err);
        alert("Unable to add unit. Please try again!");
      }
    } else {
      console.log("NO data received");
    }
  };

  return (
    <section className="pageContainer">
      {console.log(navigationState)}
      <div className="data-box card">
        {id ? (
          <form>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="text"
              placeholder="Unit Number"
              name="number"
              id="add-unit-number"
              value={formData.number || ""}
              onChange={handleChange}
            ></input>

            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="number"
              placeholder="Unit Rent"
              name="rent"
              id="add-unitRent"
              value={formData.rent || ""}
              onChange={handleChange}
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="text"
              placeholder="New Tenant Last Name"
              name="tenant_lastName"
              id="add-unit-tenant-LastName"
              value={formData.tenant_lastName || ""}
              onChange={handleChange}
            ></input>
            <input
              className="input add-unit "
              style={{ width: "400px" }}
              type="text"
              placeholder="New Tenant first Name"
              name="tenant_firstName"
              id="add-unit-tenant-firstName"
              value={formData.tenant_firstName || ""}
              onChange={handleChange}
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="tel"
              placeholder="New Tenant Phone Number"
              name="tenant_phone"
              id="add-unit-tenant-phone"
              value={formData.tenant_phone || ""}
              onChange={handleChange}
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="date"
              placeholder="New Tenant Lease Starts Date"
              name="tenant_leaseDate"
              id="add-unit-tenant-leaseDate"
              value={formData.tenant_leaseDate || ""}
              onChange={handleChange}
            ></input>
            <input
              className="input add-unit"
              style={{ width: "400px" }}
              type="number"
              placeholder="New Tenant Lease Duration"
              name="tenant_leaseDuration"
              id="add-unit-tenant-leaseDuration"
              value={formData.tenant_leaseDuration || ""}
              onChange={handleChange}
            ></input>
            <button
              id="addTenats"
              type="submit"
              onClick={(e) => {
                updateUnit(e);
              }}
            >
              Update Unit
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
