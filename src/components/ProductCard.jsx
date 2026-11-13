import { Link } from "react-router-dom";
export default function ProductCard({ pic }) {
    return (
        <div className="product-card" key={pic.id}>

            <img src={pic.image} alt={pic.name} className="product-card-image" />
              <div className="product-card-content">
                <h3 className="product-card-name">{pic.name}</h3>
                <p className="product-card-price"> {pic.date}</p>
             
              <div className="product-card-actions">
                <Link className="btn btn-secondary" to={`/products/${pic.id}`}>
                  View Details
                </Link>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
              </div> 
        </div>
    )
}