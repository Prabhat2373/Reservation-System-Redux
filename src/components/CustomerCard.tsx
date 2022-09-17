import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodArray } from '../features/customerSlice';
interface CustomerCardTypes{
    id: string;
    name: string;
    food:string[];

}

const CustomerCard = ({id,name,food}:CustomerCardTypes) => {
    const dispatch = useDispatch();
    const [customerFoodInp, setCustomerFoodInp] = useState<string>();

    return (

        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food)=>{
                        return <p key={food+1}>{food}</p>
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input value={customerFoodInp} onChange={(e)=>{
                        setCustomerFoodInp(e.target.value)
                    }}/>
                    <button onClick={(e)=>{
                        if(!customerFoodInp) return 
                        dispatch(addFoodArray({
                            id,
                            food:customerFoodInp
                        }))
                        setCustomerFoodInp("")
                    }}>Add</button>
                </div>
            </div>
        </div>

    )
}

export default CustomerCard