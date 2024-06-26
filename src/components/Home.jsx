import React from 'react'
import Content from './Content'
const Home = () => {
    return (
        <div>
            <div className='home'>
                <h1 className='h-welcome'>Welcome to Our Online Store</h1>
                <p className='h-para'>BUY STYLE has a collection that invites you into design wear. Celebrate the visions that art inspires in Muzlin. We have array of summer tints and relaxing pattern incorporated in each article speaks of the days filled with fun along with small moments of delight. It presents you with the beautiful styles for this summer and Eid season and also browse through our ready-to-wear collection for getting your wardrobe essentials at affordable prices</p>
                <button className="h-btn">Order Now</button>
            </div>
            <div>
                <Content/>
            </div>
        </div>
    )
}

export default Home
