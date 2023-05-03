import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch} = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input value={budget} type='number' step={10} onChange={(e)=>dispatch({type: "SET_BUDGET", payload: e.target.value})}  />
        </div>
    );
};
export default Budget;