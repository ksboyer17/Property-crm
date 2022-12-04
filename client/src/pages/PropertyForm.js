import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router";
import API from "../utils/API";

const PropertyForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const { state: navigationState } = useLocation();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (id && navigationState.property) {
      setFormData(navigationState.property);
    }
  }, [navigationState, id]);

  const addProperty = async function (e) {
    e.preventDefault();
    const { address, state, city, zip } = formData;

    if (address && city && state && zip) {
      try {
        await API.createProperty({
          address,
          city,
          state,
          zip,
        });
        history.push(`/`);
      } catch (err) {
        console.log(err);
        alert("Unable to add property. Please try again!");
      }
    } else {
      console.log("NO data received");
    }
  };

  const updateProperty = async function (e) {
    e.preventDefault();
    const { address, state, city, zip, _id } = formData;

    if (_id && address && city && state && zip) {
      try {
        await API.updateProperty(navigationState.property._id, {
          _id,
          address,
          city,
          state,
          zip,
        });
        history.push(`/property/${navigationState.property._id}/details`);
      } catch (err) {
        console.log(err);
        alert("Unable to add property. Please try again!");
      }
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <section className="pageContainer">
      <div className="data-box card" id="Pm-properties">
        <form>
          <h3>Edit your prorperty</h3>
          <input
            className="input add-property"
            style={{ width: "400px" }}
            type="text"
            placeholder="Add Address"
            name="address"
            id="add-property-address"
            value={formData.address || ""}
            onChange={handleChange}
          ></input>
          <br></br>
          <input
            className="input add-property"
            style={{ width: "400px" }}
            type="text"
            placeholder="City Name"
            name="city"
            id="add-city"
            value={formData.city || ""}
            onChange={handleChange}
          ></input>
          <br></br>
          <input
            className="input add-property"
            style={{ width: "400px" }}
            type="text"
            placeholder="State"
            name="state"
            id="add-state"
            value={formData.state || ""}
            onChange={handleChange}
          ></input>
          <br></br>
          <input
            className="input add-property"
            style={{ width: "400px" }}
            type="text"
            placeholder="Zip Code"
            name="zip"
            id="add-zip"
            value={formData.zip || ""}
            onChange={handleChange}
          ></input>
          <br></br>
          {id ? (
            <button id="addTenats" type="submit" onClick={updateProperty}>
              Update property
            </button>
          ) : (
            <button id="addTenats" type="submit" onClick={addProperty}>
              Add New property
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default PropertyForm;
