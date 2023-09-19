import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://dummyjson.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((res) => setProducts(res.data.products));
  }, []);

  // console.log(products);
  return (
    <main>
      <div className='pg=header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>Products</h1>
            </div>
            <div className='col-lg-5'>
              <nav>
                <ol className='breadcrumb justify-content-end'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active'> Products </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='container content'>
        <div className='row products-row'>
          {products.map((product) => {
            return (
              <div className='col-lg-4' key={product.id}>
                <div className='card'>
                  <div className='img-wrap'>
                    <img src={product.images[0]} alt='images loading' />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>
                        Price:
                        <strong className='price'>{product.price}</strong>
                      </span>
                      <Link
                        to={`/products/${product.id}`}
                        className='btn btn-dark'
                      >
                        DETAILS &#8594;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
