import './App.css';
import Counter from './basic/Counter';
import EmployeeList from './basic/EmployeeList';
import { Route, Routes } from 'react-router-dom';
import Contact from './basic/Contact';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import ResponsiveAppBar from './components/navbar/ResponsiveAppBar';


function App() {
    return (
        <div>
            <center>
                <header>
                    <ResponsiveAppBar />
                </header>
                <main>
                    <Routes>
                        <Route path='/' exact element={<Home />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/productdetail/:id' element={<ProductDetail />}></Route>
                        <Route path='/counter' element={<Counter />}></Route>
                        <Route path='/employees' element={<EmployeeList />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                    </Routes>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </center>

        </div>
    );
}

export default App;