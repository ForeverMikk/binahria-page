import React from 'react';
import MarketplaceBody from './MaketplaceBody/MarketplaceBody';
import MarketplaceCatalog from './MarketplaceCatalog/MarketplaceCatalog';
import MarketplaceHeader from './MarketplaceHeader/MarketplaceHeader';
// import MarketplaceList from './MarketplaceList/MarketplaceList';


const MarketPlace = () => {
    return (
        <section className='marketplace'>
            <MarketplaceHeader />
            <MarketplaceBody />
            <MarketplaceCatalog />
            {/* <MarketplaceList /> */}
        </section>
    )
}

export default MarketPlace;