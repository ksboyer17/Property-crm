import React, { Component } from "react";
import residentData from "../residentData";
import managementData from "../managementData";
class PmDash extends Component {
  render() {
    //let residentData = this.props.residentData;
    //let managementData = this.props.managementData;
    console.log(residentData);
    console.log(managementData);

    return (
      <section id="PmDash">
        <div className="">
          <h1>This is PmDash part， resident list</h1>
          <div
            id="Pm-resident"
            className="" //add style class here
          >
            {residentData
              ? residentData.map((item) => (
                  <div key={item.id} className="">
                    <div className="">
                      <h2>Login as {item.username}</h2>
                      <p>{item.firstname + item.lastname}</p>
                      <p>{item.unitnumber}</p>
                    </div>
                  </div>
                ))
              : null}

            {managementData
              ? managementData.map((item) => (
                  <div key={item.id} className="">
                    <div className="">
                      <h2>Login as {item.username}</h2>
                      <a>{item.firstname + item.lastname}</a>
                      <a>{item.email}</a>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    );
  }
}

export default PmDash;
