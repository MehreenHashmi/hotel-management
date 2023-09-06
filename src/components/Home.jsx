import React from 'react';
import Card from "./Card";
import CardData from './CardData';

const Home = (props) =>{
    return (
        <>
            <div className='home-cards'>
                <Card details={CardData}/>
            </div>
        </>
    )
}

export default Home;