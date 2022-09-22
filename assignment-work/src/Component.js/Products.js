import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Products = () => {
    const Navigate = useNavigate();
    const myapi = "https://631eb53222cefb1edc387a02.mockapi.io/Product";

    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch(myapi)
            .then(res => res.json())
            .then(res => setdata(res))
    },);
    const productes = data.map((product, index) => {
        return (
            <>
                <div className="card" style={{ width: 19 + "rem" }}>
                    <img src={product.ProductImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.ProductName}</h5>
                        <p className="card-text">{product.ProductCategory}</p>
                        <button className="btn btn-primary card-link"
                         onClick={() => { Navigate('/Product_detail/' + product.id) }}
                        >view</button>
                    </div>
                </div>
            </>)
    }
    )
    return (
        <>
            <div className="container text-center">
                <div className="row   g-lg-3 p-3 justify-content-evenly">
                    {productes}
                </div>
            </div>
        </>

    )
}
