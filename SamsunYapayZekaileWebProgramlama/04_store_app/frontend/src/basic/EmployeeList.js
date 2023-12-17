import Employee from "./Employee";

const EmployeeList = () => {
    const employees = [
        { id: 1, name: 'Ahmet', position: 'Software Developer', salary: 40000 },
        { id: 2, name: 'Ayşe', position: 'UX Designer', salary: 41000 },
        { id: 3, name: 'Mehmet', position: 'Data Scientist', salary: 80000 },
        { id: 4, name: 'Zeynep', position: 'Product Manager', salary: 58600 },
        { id: 5, name: 'Ali', position: 'Frontend Developer', salary: 45600 },
    ]
    return (
        <div>
            <h2>Employee List</h2>
            {/* {JSON.stringify(employees)} */}
            <ul>
                {employees.map((emp) => (
                    <Employee employee={emp}/>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;