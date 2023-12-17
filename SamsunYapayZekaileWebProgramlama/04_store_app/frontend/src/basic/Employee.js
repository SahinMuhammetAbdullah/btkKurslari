import React, { useState } from 'react'
import Header from '../components/header/Header';

function Employee({ employee }) {

    const [newSalary, setNewSalary] = useState(employee?.salary)
    return (
        <div>
            <Header data={{title:"Çalışanlar"}}></Header>

            <h1>
                {employee?.firstName}
                {employee?.lastName}
            </h1>
            <p>
                {newSalary}
            </p>
            <button onClick={() => setNewSalary(newSalary + 1000)} >+</button>
            <hr />
        </div>
    )
}

export default Employee;