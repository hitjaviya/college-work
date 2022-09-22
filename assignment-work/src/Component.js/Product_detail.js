import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Product_detail() {
    const Navigate = useNavigate();
    const param = useParams();
    const myapi = "https://631eb53222cefb1edc387a02.mockapi.io/Product";
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(myapi + "/" + param.id)
            .then(res => res.json())
            .then(res => setdata(res))
    }, []);
    const date = data.updated / 100;
    return (<><div className='container p-5'>
        <div className='row'>
            <div className='col align-self-center'>
                <div className="card mb-3" style={{ maxwidth: 490 + "px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.ProductImage} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body m-2 mx-4">
                                <h5 className="card-title mt-4 rounded-3"> ProductName : {data.ProductName}</h5>
                                <p className="card-text mt-2 rounded-3"> Description : {data.ProductDescription}</p>
                                <p className="card-text mt-2 rounded-3"> ProductPrice : {data.ProductPrice}</p>
                                <button type="button" class="btn btn-primary  me-md-2" data-bs-toggle="button" autocomplete="off" onClick={() => { Navigate('/Product/edit/' + param.id) }}>Edit Product</button>
                                <button type="button" class="btn btn-primary  me-md-2" data-bs-toggle="button" autocomplete="off" onClick={() => {
                                    fetch(myapi + "/" + param.id, { method: "DELETE" })
                                    .then(res => {
                                        Navigate('/Product');
                                    });
                                }}>Delete product</button>
                                <button type="button" class="btn btn-primary " data-bs-toggle="button" autocomplete="off" onClick={() => { Navigate("/Cart")}}>Add to cart</button>
                                <div class="footer pt-4 text-bottom"><small className="text-muted">Last updated {date} sec ago</small></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>


    )

};


