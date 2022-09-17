import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reserInpName, setReserInpName] = useState("");

  // useSelector is used to access your state's value
  const reservations = useSelector((state:RootState)=> state.reservations.value)
  const customers = useSelector((state:RootState)=> state.customer.value)

  const dispatch = useDispatch();

  const handleAddReservations = ()=>{
    if(!reserInpName) return;
    dispatch(addReservation(reserInpName));
    setReserInpName("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
            {reservations.map((name, index)=>{
              return <ReservationCard name={name} index={index} key={`${name}.1++`}/>
            })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reserInpName} onChange={(e)=> setReserInpName(e.target.value)}/>
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer)=>{
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food} key={`${customer.id + 1}`}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;