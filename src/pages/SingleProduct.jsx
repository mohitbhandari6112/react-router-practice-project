import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => setProduct(res.data));
  }, [productId]);

  // console.log(product);

  return (
    <main className="pg-header">
      <div className="container">
        <div className="row aligh-items-center">
          <div className="col-lg-7">
            <h1>Product Details Page</h1>
          </div>
        </div>
        <div className="col-lg-5">
          <nav>
            <ol className="breadcrumb justify-content-end">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                title
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container content">
        {/* {Object.keys(product).length > 0 ? ( */}
        <div className="row">
          <div className="col-lg-5">
            <img
              src={product?.images}
              className="img-fluid"
              alt="images of prod"
            />
          </div>
          <div className="col-lg-7">
            <h2>{product.title}</h2>
            <p className="price">Price:${product.price}</p>
            <p>
              {product.description}
              {product.description}
              {product.description}
            </p>
            <br />
            <button
              className="btn btn-dark btn-sm"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            &nbsp;
            <button
              className="btn btn-dark btn-sm"
              onClick={() => navigate('/products')}
            >
              Navigate to products
            </button>
            &nbsp;
            <Link to="/products" className="btn btn-dark btn-sm">
              Products
            </Link>
          </div>
        </div>
        {/* ) : (
          ''
        )} */}
      </div>
    </main>
  );
};

export default SingleProduct;
