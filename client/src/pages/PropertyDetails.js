import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../utils/API";

function PropertyDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  const getProperty = async () => {
    try {
      const response = await API.getPropertyById(id);
      setProperty(response.data);
    } catch (err) {
      alert("There was an issue with your request.");
    }
  };

  const handleDelete = async () => {
    try {
      await API.deleteProperty(id);
      history.push("/");
    } catch (err) {
      alert("There was an issue with your request.");
    }
  };

  const buildLeaseEndDate = (date) => {
    const startDate = new Date(date);
    const day = startDate.getDate();
    const month = startDate.getMonth();
    const year = startDate.getFullYear() + 1;
    return new Date(year, month, day).toLocaleDateString("en-us");
  };

  useEffect(() => {
    getProperty();
  }, []);

  if (!property) {
    return (
      <section id="PropertyDetail" className="pageContainer">
        <div className="data-box card" id="Pm-properties">
          <div
            className="properties-data card-content" //add style class here
          >
            Loading....
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="PropertyDetails" className="pageContainer">
      <div className="data-box card" id="Pm-properties">
        <div
          className="card-content" //add style class here
        >
          <div className="media-content">
            <div className="content">
              <h2>{property.address}</h2>
              <p>
                {property.city}, {property.state} {property.zip}
              </p>

              <Link
                to={`/property/${property._id}/edit`}
                className="button"
                id="PmDetailbtn"
              >
                Edit Property
              </Link>
              <button
                className="button"
                id="PmDetailbtn"
                onClick={handleDelete}
              >
                Delete Property
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="data-box card" id="Pm-properties">
        <div
          className="properties-data card-content" //add style class here
        >
          {property.units.map((item) => (
            <div key={item._id} className="media-content">
              <div className="content">
                <h2>Units</h2>

                <Link to={`/unit/new`}>Add Unit</Link>
              </div>
              <div className="content">
                <p>Unit number: {item.number}</p>
                <p>
                  Rent: $
                  {parseInt(item.rent).toLocaleString("en-us", {
                    currency: "USD",
                  })}
                </p>
                <p>
                  Tenant: {item.tenant_firstName} {item.tenant_lastName}
                </p>
                <p>Phone: {item.tenant_phone}</p>
                <p>
                  Lease:{" "}
                  {new Date(item.tenant_leaseDate).toLocaleDateString("en-us")}
                  {buildLeaseEndDate(item.tenant_leaseDate)}- {}
                </p>
              </div>
              <Link
                to={`/unit/${item._id}/details`}
                className="button is-success"
                id="PmDetailbtn"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PropertyDetails;
