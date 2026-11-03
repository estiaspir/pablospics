import { Link } from 'react-router-dom';
import { getPics } from '../data/pablopics.js'
import ProductCard from '../components/ProductCard.jsx';
export default function Home() {
  const pics = getPics();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Pablo's Home Page</h1>
        <p className="home-subtitle">Discover amazing Pictures of Pablo!</p>
      </div>
      <div className="container">
        <h2 className="page-title">Pablo's Pictures</h2>
        <p>Pictures of Pablo are available for free.</p>
        <p>Browse our collection and find the perfect picture to add to your collection.</p> 
        <div className="product-grid">
          {pics.map((pic) => (
           <ProductCard key={pic.id} pic={pic} />
          ))}
        </div>
      </div>
      </div>
  )
}