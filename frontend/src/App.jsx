import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addproducts from './pages/Addproduct';
import Products from './pages/Products.jsx';
import Sidebar from './pages/Sidebar.jsx';
import Addbrands from './pages/Addbrand.jsx'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Sidebar />
                <Routes>

                    <Route path={'/addproducts'} element={<Addproducts />} />
                    <Route path={'/products'} element={<Products />} />
                    <Route path={'/addbrands'} element={<Addbrands />} />





                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;