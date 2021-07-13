import React from "react";

const PropertyForm = () => {
	const addProperty = async function (e) {
		e.preventDefault();
		const address = document
			.querySelector("#add-property-address")
			.value.trim();
		const city = document.querySelector("#add-city").value.trim();
		const state = document.querySelector("#add-state").value.trim();
		const zip = document.querySelector("#add-zip").value.trim();

		if (address && city && state && zip) {
			let response = await fetch("/api/properties", {
				method: "POST",
				body: JSON.stringify({
					address,
					city,
					state,
					zip,
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
			<form>
				<label>
					Name:
					<input type="text" name="name" />
					<input
						className="input add-property"
						style={{ width: "400px" }}
						type="text"
						placeholder="Add Address"
						name="add-property-address"
						id="add-property-address"
					></input>
					<input
						className="input add-property"
						style={{ width: "400px" }}
						type="text"
						placeholder="City Name"
						name="add-city"
						id="add-city"
					></input>
					<input
						className="input add-property"
						style={{ width: "400px" }}
						type="text"
						placeholder="State"
						name="add-state"
						id="add-state"
					></input>
					<input
						className="input add-property"
						style={{ width: "400px" }}
						type="text"
						placeholder="Zip Code"
						name="add-zip"
						id="add-zip"
					></input>
					<button
						id="addTenats"
						type="submit"
						onClick={e => {
							addProperty(e);
							// refresh();
						}}
					>
						Add New property
					</button>
				</label>
			</form>
		</section>
	);
};

export default PropertyForm;
