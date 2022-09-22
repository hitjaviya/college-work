import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const Navigate = useNavigate();
    const myapi = "https://631eb53222cefb1edc387a02.mockapi.io/Product/";
    const [data, setdata] = useState({ ProductName: "" });
    return (
        <div className="p-3">
             <h1 className='text-center'>Update Product Info
    </h1>
    <div className='container border border-primary'>

        <div className="row g-3">
            <div className="col-md-6 ">
                <label for="inputtext" className="form-label mt-3">Product Name</label>
                <input type="test" className="form-control" id="inputText"

                    onChange={(e) => {
                        setdata({ ...data, ProductName: e.target.value });
                    }}
                />
            </div>
            
            <div className="col-12">
                <label for="inputtext" className="form-label">Product Description</label>
                <input type="text" className="form-control" id="inputAddress"

                    onChange={(e) => {
                        setdata({ ...data, ProductDescription: e.target.value });
                    }}
                />
            </div>
            <div className="col-md-3">
                <label for="inputState" className="form-label">Product Price</label>
                <input type="text" className="form-control" id="inputCity"

                    onChange={(e) => {
                        setdata({ ...data, ProductPrice: e.target.value });
                    }}
                />
            </div> 
            <div className="col-md-3">
                <label for="inputtext" className="form-label">Product Category</label>
                <input type="text" className="form-control" id="inputcity"

                    onChange={(e) => {
                        setdata({ ...data, ProductCategory: e.target.value });
                    }}
                />
            </div>
                    
                    <div className="col-12">
                        <button type="" className="btn btn-primary mb-3" onClick={
                            () => {
                                fetch(myapi, {
                                    method: "Post",
                                    body: JSON.stringify(data),
                                    headers: { "Content-Type": "application/json" }
                                })
                                .then(()=>{Navigate('/products');})
                            }

                        }>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
