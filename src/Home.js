import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
                alt="Banner"
            />
            <div className="home__row">
                <Product
                key="123415"
                    id="123415"
                    title="HuaDaWei High Speed 32GB Memory Stick PRO Duo Flash Memory Card MSMT32G for Sony PSP 1000 2000 3000 Cards"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61YeYxDP0AL._AC_UY218_.jpg"
                />
                <Product
                key="123452"
                    id="123452"
                    title="HuaDaWei High Speed 32GB Memory Stick PRO Duo Flash Memory Card MSMT32G for Sony PSP 1000 2000 3000 Cards"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51LuUVyHDzL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                  key="123453"
                    id="123453"
                    title="HuaDaWei High Speed 32GB Memory Stick PRO Duo Flash Memory Card MSMT32G for Sony PSP 1000 2000 3000 Cards"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61YeYxDP0AL._AC_UY218_.jpg"
                />
                <Product
                key="123454"
                    id="123454"
                    title="HuaDaWei High Speed 32GB Memory Stick PRO Duo Flash Memory Card MSMT32G for Sony PSP 1000 2000 3000 Cards"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61YeYxDP0AL._AC_UY218_.jpg"
                />
                <Product
                key="123455"
                    id="123455"
                    title="HuaDaWei High Speed 32GB Memory Stick PRO Duo Flash Memory Card MSMT32G for Sony PSP 1000 2000 3000 Cards"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61YeYxDP0AL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    key="123456"
                    id="123456"
                    title="HuaDaWei High Speed 32GB Memory Stick PRO Duo Flash Memory Card MSMT32G for Sony PSP 1000 2000 3000 Cards"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61YeYxDP0AL._AC_UY218_.jpg"
                />

            </div>

        </div>
    )
}

export default Home
