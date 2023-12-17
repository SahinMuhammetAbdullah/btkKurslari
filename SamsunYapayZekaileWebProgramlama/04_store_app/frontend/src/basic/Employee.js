import React from 'react'

function Employee({employee}) {
    return (
        <div>
            <li key={employee?.id}>
                <strong>ID:</strong> {employee.id}, <strong>Name:</strong> {employee.name}, <strong>Position:</strong> {employee.position}, <strong>Salary:</strong> {employee.salary} <hr />
            </li>
        </div>
    )
}
export default Employee;