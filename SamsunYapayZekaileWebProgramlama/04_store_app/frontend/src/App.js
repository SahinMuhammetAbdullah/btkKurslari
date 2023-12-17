import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Counter from './basic/Counter';
import EmployeeList from './basic/EmployeeList';

function App() {

    return (
        <div>
            merhaba react
            <Counter/>
            <EmployeeList/>
        </div>
    );
}

export default App;
