import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodArray, removeCustomer } from '../features/customerSlice';
interface CustomerCardTypes {
    id: string;
    name: string;
    food: string[];
    index:number;
}

const CustomerCard = ({ id, name, food, index }: CustomerCardTypes) => {
    const dispatch = useDispatch();
    const [customerFoodInp, setCustomerFoodInp] = useState<string>();
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food) => {
                        return <p key={food + 1}>{food}</p>
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input value={customerFoodInp} onChange={(e) => {
                        setCustomerFoodInp(e.target.value)
                    }} />
                    <button onClick={(e) => {
                        if (!customerFoodInp) return
                        dispatch(addFoodArray({
                            id,
                            food: customerFoodInp
                        }))
                        setCustomerFoodInp("")
                    }}>Add</button>
                </div>
                <div style={{cursor:'pointer'}} onClick={()=>{
                    let conf = window.confirm("Confirmation to remove this cursomer?")
                    if(conf === true){
                        dispatch(removeCustomer(index))
                    }
                    
                }}>
                    remove
                </div>
            </div>
        </div>
    )
}

export default CustomerCard