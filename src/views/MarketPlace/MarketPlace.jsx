import React from 'react';
import MarketplaceHeader from './MarketplaceHeader/MarketplaceHeader';
import MarketplaceList from './MarketplaceList/MarketplaceList';


const MarketPlace = () => {
    return (
        <section className='marketplace'>
            <MarketplaceHeader />

            <MarketplaceList />
            
        </section>
    )
}

export default MarketPlace;