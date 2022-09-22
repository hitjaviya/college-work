import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const myapi="https://631eb53222cefb1edc387a02.mockapi.io/Product/";
  const Navigate=useNavigate();
  const param=useParams();
  const [data,setdata]=useState({});
  useEffect(() => {
    fetch(myapi+"/"+param.id,{method:"GET"})
    .then(res=>res.json())
    .then(res=>setdata(res));
  }, [])
  
  return (
    <>
    <h1 className='text-center'>Update Product Info
    </h1>
    <div className='container border border-primary'>

        <div className="row g-3">
            <div className="col-md-6 ">
                <label for="inputtext" className="form-label mt-3">Product Name</label>
                <input type="test" className="form-control" id="inputText" value={data.ProductName}

                    onChange={(e) => {
                        setdata({ ...data, ProductName: e.target.value });
                    }}
                />
            </div>
            
            <div className="col-12">
                <label for="inputtext" className="form-label">Product Description</label>
                <input type="text" className="form-control" id="inputAddress" value={data.ProductDescription}

                    onChange={(e) => {
                        setdata({ ...data, ProductDescription: e.target.value });
                    }}
                />
            </div>
            <div className="col-md-3">
                <label for="inputState" className="form-label">Product Price</label>
                <input type="text" className="form-control" id="inputCity" value={data.ProductPrice}

                    onChange={(e) => {
                        setdata({ ...data, ProductPrice: e.target.value });
                    }}
                />
            </div> 
            <div className="col-md-3">
                <label for="inputtext" className="form-label">Product Category</label>
                <input type="text" className="form-control" id="inputcity" value={data.ProductCategory}

                    onChange={(e) => {
                        setdata({ ...data, ProductCategory: e.target.value });
                    }}
                />
            </div>
            <div className="col-12">
                <button  className="btn btn-primary mb-3" onClick={
                    () => {
                      fetch(myapi+"/"+param.id,{
                        method:"PUT",
                        body:JSON.stringify(data),
                        headers:{
                          "Content-Type":"application/json"
                        }
                      })
                      .then((res)=>{
                        Navigate('/Product_detail/'+param.id);
                      })
                    }

                }>Update</button>
            </div>
        </div>
    </div>
    </>
  )
}
