import { Routes, Route } from 'react-router-dom'
import { Home } from './home'
import { Product } from './pages/product'
import { Cart } from './pages/cart'


const Rout = ({ product, setproduct, details, view, clickedProducts, close, setclose, cartdetails, setcartdetails, Addtocart }: any) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home clickedProducts={clickedProducts} details={details} view={view} close={close} setclose={setclose} Addtocart={Addtocart} />} />
                <Route path='/product' element={<Product clickedProducts={clickedProducts} product={product} setproduct={setproduct} details={details} view={view} setclose={setclose} close={close} Addtocart={Addtocart} />} />
                <Route path='/cart' element={<Cart cartdetails={cartdetails} setcartdetails={setcartdetails} setclose={setclose} close={close} />} />
            </Routes>
        </>
    )
}

export default Rout;