import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Header from './Layout/Header'
import ProductForm from './Products/ProductForm'
import ProductsList from './Products/ProductsList'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <main>
                    <div className="md:container md:mx-auto">
                        <ProductsList />
                        <ProductForm />
                    </div>
                </main>
            </div>
        </Provider>
    )
}

export default App
