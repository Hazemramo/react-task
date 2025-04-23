import { IoClose } from "react-icons/io5";

import './cart.css'
import { Link } from 'react-router-dom';

export const Cart = ({ cartdetails, setcartdetails }: any) => {


    const incqty = (elm: any) => {
        const exist = cartdetails.find((x: any) => {
            return x.Id === elm.Id
        })


        setcartdetails(cartdetails.map((curntelm: any) => {

            return curntelm.Id === elm.Id ? { ...exist, qty: elm.qty + 1 } : curntelm
        }))


    }




    const decqty = (elm: any) => {
        const exist = cartdetails.find((x: any) => {
            return x.Id === elm.Id
        })


        if (exist.qty < 2) {
            setcartdetails(cartdetails.filter((x: any) => {
                return x.Id !== elm.Id
            }))

        } else {
            setcartdetails(cartdetails.map((curnelm: any) => {
                return curnelm.Id === elm.Id ? { ...curnelm, qty: elm.qty - 1 } : curnelm
            }))
        }

    }





    // remove method


    const remove = (product: any) => {


        const exist = cartdetails.find((e: any) => {
            return e.Id === product.Id
        })

        if (exist.qty > 0) {
            setcartdetails(cartdetails.filter((x: any) => {
                return x.Id !== product.Id
            }))

        }




    }


    // change input num

    const qtychange = (e: any, elm: any) => {
        const newQty = e.target.value;

        setcartdetails(cartdetails.map((curnelm: any) => {
            return curnelm.Id === elm.Id
                ? { ...curnelm, qty: newQty }
                : curnelm;
        }));
    };





    // total price 


    const Totalprice = cartdetails.reduce((price: number, item: any) => price + item.Price * item.qty, 0)

    return (
        <>


            {




                <div className="productbox-cart">

                    {
                        cartdetails.length === 0 && <div className='emptycart' >
                            <h1 className="empty">Cart is Empty</h1>
                            <Link className='emptybtn' to={"/product"} >Shop Now</Link>
                        </div>
                    }



                    {/* new */}



                    <div className="products-cart">

                        <div className="productbox">
                            <div className="content">

                                {cartdetails.map(((elm: any) => {
                                    return (
                                        <div className="box" key={elm.Id}>
                                            <div onClick={() => remove(elm)} className='cross'>
                                                <IoClose />
                                            </div>

                                            <div className="img-box">
                                                <img src={elm.Img} alt={elm.Title} />
                                            </div>
                                            <div className="details-box">
                                                <p> {elm.Cat} </p>
                                                <h3> {elm.Title} </h3>
                                                <h4> {elm.Price} </h4>


                                                <div className="qty">
                                                    <button onClick={() => incqty(elm)} className="incqty">+</button>

                                                    <input onChange={(e) => qtychange(e, elm)} type="text" value={elm.qty} />
                                                    <button onClick={() => decqty(elm)} className="decqty">-</button>
                                                </div>
                                                <h4 className='subtotal'>Sub total: ${elm.Price * elm.qty}</h4>


                                            </div>
                                        </div>
                                    )
                                }))}
                            </div>
                        </div>

                    </div >




                    {/* new */}



                    {cartdetails.length > 0 &&
                        <>
                            <div className='total' >

                                <button className='checked-btn' > Checked</button>
                                <h2 className='total_price'> total price:   ${Totalprice} </h2>


                            </div>




                        </>




                    }



                </div>


            }



        </>
    )
}
