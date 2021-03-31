import React from 'react'

const ProductForm = () => {
    return (
        <form className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">Game title</span>
                    <input
                        type="text"
                        name="title"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Price</span>
                    <input
                        type="number"
                        name="price"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">When is your event?</span>
                    <input
                        type="text"
                        name="id"
                        className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                </label>
                <button type="submit">Add game</button>
            </div>
        </form>
    )
}

export default ProductForm
