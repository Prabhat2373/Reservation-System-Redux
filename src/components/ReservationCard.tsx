import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'
import {addCustomers} from "../features/customerSlice"
import {v4 as uuid} from 'uuid';

interface Props {
  name: string,
  index: number
}

const ReservationCard = ({ name, index }: Props) => {
  
  const dispatch = useDispatch()
  return (
    <>
      <div className="reservation-card-container" onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomers({
          id:uuid(),
          name:name,
          food:[]
        }))
      }}
      >{name}</div>
    </>
  )
}

export default ReservationCard