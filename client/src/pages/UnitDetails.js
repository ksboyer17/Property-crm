import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import API from "../utils/API";

function UnitDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [unit, setUnit] = useState([]);
  const { state: navigationState } = useLocation();

  const getUnit = async () => {
    try {
      const response = await API.getUnitById(id);
      setUnit(response.data);
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

  const handleDelete = async () => {
    try {
      await API.deleteUnit(id);
      history.push(`/property/${navigationState.propertyId}/details`);
    } catch (err) {
      console.log(err);
      alert("There was an issue with your request.");
    }
  };

  useEffect(() => {
    getUnit();
  }, []);

  if (!unit) {
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
    <section id="UnitDetails" className="pageContainer">
      <div className="data-box card">
        <div
          className="card-content" //add style class here
        >
          <div key={unit._id} className="media-content">
            <div className="content">
              <h2>Units</h2>
            </div>
            <div className="content">
              <p>Unit number: {unit.number}</p>
              <p>
                Rent: $
                {parseInt(unit.rent).toLocaleString("en-us", {
                  currency: "USD",
                })}
              </p>
              {unit.tenant_firstName &&
              unit.tenant_lastName &&
              unit.tenant_leaseDate &&
              unit.tenant_phone &&
              unit.tenant_leaseDuration ? (
                <>
                  <p>
                    Tenant: {unit.tenant_firstName} {unit.tenant_lastName}
                  </p>
                  <p>Phone: {unit.tenant_phone}</p>
                  <p>
                    Lease:{" "}
                    {`${new Date(unit.tenant_leaseDate).toLocaleDateString(
                      "en-us"
                    )} - ${buildLeaseEndDate(unit.tenant_leaseDate)}`}
                  </p>
                </>
              ) : null}
              <Link
                to={{
                  pathname: `/unit/${unit._id}/edit`,
                  state: { ...navigationState, unit },
                }}
                className="button"
                id="PmDetailbtn"
              >
                Edit Unit
              </Link>
              <button
                className="button"
                id="PmDetailbtn"
                onClick={handleDelete}
              >
                Delete Unit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnitDetails;
