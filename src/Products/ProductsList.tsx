import React from 'react'
import { useSelector } from 'react-redux'
import { getProducts } from './product.slice'

const ProductsList: React.FC<{}> = () => {
    const products = useSelector(getProducts)

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg">
                    <div>
                        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            setProducts(prevProducts => [{
                title: 'another',
                price: 30,
                id: 'asdfasdf'
            }, ...prevProducts])
        }}>Add mor</button> */}

                        {products.map((product) => (
                            <div key={product.id}>
                                <span>
                                    {product.title} {product.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList
