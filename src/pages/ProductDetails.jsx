import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getPicById } from '../data/pablopics.js'
export default function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product,setProduct] = useState(null)
    
    useEffect(() => {
        const foundProduct = getPicById(id)
        if (!foundProduct) {
            navigate('/')
            return
        } 
        setProduct(foundProduct)
    }, [id])
    if(!product) {
        return <div>Loading...</div>
    }
    return (
        <div className='page'>
            <div className='container'>
                <div className='product-detail'>
                    
                    <div className='product-detail-image'>
                        {product && <img src={product.image} alt={product.name} />}

                    </div>
                    <div className='product-detail-content'>
                        <h1 className='product-detail-name'>{product && product.name}</h1> 
                        <p className='product-detail-price'>This picture was taken on: {product && product.date}</p>
                        <p className='product-detail-description'>{product && product.description}</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                    </div>
                    <div />
                </div>
            </div>
            
        </div>
    )
}