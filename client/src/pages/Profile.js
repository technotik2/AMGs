import React from "react";
import styled from "styled-components";

const User = {
  firstName: "Veysel",
  lastName: "Boybay",
  address: "0000 yonge street, toronto, ontario, 123ABC",
  phoneNumber: "123456789",
  car: {
    make: "Honda",
    model: "Civic",
    year: "2015",
    color: "blue",
    engine: "1.8",
    fuelType: "gas",
  },
  appointments: [],
};

function Profile() {
  return (
    <>
      <Section>
        <h5>Personal information:</h5>
        <p>Full Name: {User.firstName + " " + User.lastName}</p>
        <p>Phone Number: {User.phoneNumber}</p>
        <p>Address: {User.address}</p>
      </Section>
      <Section>
        <h5>Car Details:</h5>
        <p>Year: {User.car.year}</p>
        <p>Make: {User.car.make}</p>
        <p>Model: {User.car.model}</p>
        <p>Color: {User.car.color}</p>
        <p>Engine: {User.car.engine}</p>
        <p>Fuel Type: {User.car.fuelType}</p>
      </Section>
      <Section>
        <h5>Appointment History:</h5>
        {User.appointments.length === 0 && <p>No Appointment history made!</p>}
      </Section>
    </>
  );
}
const Section = styled.div`
  background-color: #eeeeee;
  width: 90%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
`;

export default Profile;
