import React, { useEffect, useState } from "react";
import Header from "./Header";

const PropertySetup = () => {

  const [filterinput, setFilterInputNow] = useState("");
  const [filteramtmax, setFilterAmountMax] = useState("");
  const [filteramtmin, setFilterAmountMin] = useState("");
  const [finalfilteramt, setFinalFilterAmount] = useState("");

  const propetiesDisplay = {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "#005CA8",
    padding: "8px",
  };

  const propertyStyle = {
    fontSize: "16px",
  };

  const listPropertis = [
    {
      id: 1,
      flat_name: "1BHK @ 900 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Hyderabad",
      amount: 10000,
      contact_number: "1234567891",
    },
    {
      id: 2,
      flat_name: "3BHK @ 3200 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Nampally",
      amount: 120000,
      contact_number: "9876543210",
    },
    {
      id: 3,
      flat_name: "2BHK @ 2000 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Madhapur",
      amount: 80000,
      contact_number: "9876543210",
    },
    {
      id: 4,
      flat_name: "3BHK @ 4000 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Madhapur",
      amount: 140000,
      contact_number: "1234567891",
    },
    {
      id: 5,
      flat_name: "1BHK @ 1000 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Begumpet",
      amount: 30000,
      contact_number: "9876543210",
    },
    {
      id: 6,
      flat_name: "4BHK @ 9000 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Hyderabad",
      amount: 230000,
      contact_number: "9876543210",
    },
    {
      id: 7,
      flat_name: "2BHK @ 3200 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Kondapur",
      amount: 40000,
      contact_number: "9876543210",
    },
    {
      id: 8,
      flat_name: "4BHK @ 14000 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Kondapur",
      amount: 240000,
      contact_number: "9876543210",
    },
    {
      id: 9,
      flat_name: "1BHK @ 900 sq.ft",
      img: "https://i.pinimg.com/originals/f7/6b/65/f76b657a66f6a419154270f2f2efad09.jpg",
      location: "Kondapur",
      amount: 20000,
      contact_number: "9876543210",
    },
  ];

  const maxAmtInList = parseInt(Math.max.apply(Math, listPropertis.map((xyz) => xyz.amount)));
  const minAmtInList = parseInt(Math.min.apply(Math, listPropertis.map((xyz) => xyz.amount)));

  useEffect(() => {
    setFilterAmountMax(maxAmtInList);
    setFilterAmountMin(minAmtInList);
    setFinalFilterAmount(maxAmtInList);
   },[maxAmtInList, minAmtInList])

  const filterData = (e) => {
    e.preventDefault();
    const inputFilterValue = e.target.value;
    setFilterInputNow(inputFilterValue);
  };

  const filterAmount = (e) => {
    e.preventDefault();
    const inputFilterAmount = e.target.value;
    setFinalFilterAmount(inputFilterAmount);
  }

  const thisIsListShow = listPropertis
  .filter(index => index.flat_name.toLowerCase().includes(filterinput))
  .filter(index => index.amount <= finalfilteramt)

  const webShowNow = thisIsListShow.map((index) => {
    return (
        <div className="col-md-4 col-lg-4 mb-3" key={index.id}>
          <div style={propetiesDisplay}>
            <div className="row">
              <div className="col-12">
                <div>
                  <img
                    src={index.img}
                    className="img-fluid rounded photoClass"
                    alt={index.flat_name}
                  />
                </div>
              </div>
              <div className="col-12 text-center my-auto">
                <div className="mt-2" style={propertyStyle}>
                  <b>{index.flat_name}</b>
                </div>
                <div style={propertyStyle}>
                  <b>Location : {index.location}</b>
                </div>
                <div style={propertyStyle}>
                  <b>Amount : {index.amount}</b>
                </div>
                <div style={propertyStyle}>
                  <b>C. Number : {index.contact_number}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  });

  return (
    <>
      <div className="container-fluid p-4" style={{ color: "#e9e6dd" }}>
        <div className="p-2 border border-white rounded">
          <Header />
          <div className="mt-3 p-2 mb-2">
            <div className="row mt-2 p-2">
              <div className="col-md-2 col-lg-2"></div>
              <div className="col-md-8 col-lg-8">
                <h3>
                  Welcome to <b>ARG</b>
                </h3>
                <p className="mt-4">
                  We are pleased to have you here.... Apart from lease admin we
                  offer the available properties of your interest.
                </p>
              </div>
              <div className="col-md-2 col-lg-2"></div>
            </div>
          </div>
          <div className="container">
            <div className="row my-auto">
              <div className="col-md-2 col-lg-2 p-2 my-auto"></div>
              <div className="col-md-4 col-lg-4 p-2 my-auto">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="flatNameInput"
                    onChange={filterData}
                    placeholder="Enter flat type (eg. 1BHK, 2BHK...)"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-4 my-auto">
                <span className="d-flex justify-content-between"><small>{filteramtmin}</small> <small >{finalfilteramt}</small></span>
                <div className="form-group">
                  <input
                    type="range"
                    className="form-control-range"
                    min={filteramtmin}
                    max={filteramtmax}
                    id="formControlRange"
                    onChange={filterAmount}
                  />
                </div>
              </div>
              <div className="col-md-2 col-lg-2 p-2 my-auto"></div>
            </div>
            <div className="row mb-2 text-center">{webShowNow}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertySetup;
