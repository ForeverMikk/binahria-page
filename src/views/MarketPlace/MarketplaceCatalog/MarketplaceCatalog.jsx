import React from 'react';

import './MarketplaceCatalog.css';
import img from '../../../assets/images/blank_image.png'
import MarketplaceProduct from './MarketplaceProduct/MarketplaceProduct';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const MarketplaceCatalog = () => {
    return (
        <div className="marketplace-catalog">

            <h2>/ TOP EN INVESTIGACIÓN</h2>

            <Tabs>
                <TabList className='selectors'>
                    <Tab className='underline'>
                        <h3 className="politic">Política</h3>
                    </Tab>
                    
                    <Tab className='underline' >
                        <h3 className="economy">Economía</h3>
                    </Tab>

                    <Tab className='underline' >
                        <h3 className="fintech">Fintech</h3>
                    </Tab>                   
                </TabList>
                
                <TabPanel className="products" style={{background: '#E8E8E8'}}>
                    <MarketplaceProduct
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                </TabPanel>

                <TabPanel className="products" style={{background: '#1E1E1E'}}>
                    <MarketplaceProduct
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                </TabPanel>

                <TabPanel className="products">
                    <MarketplaceProduct
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                    <MarketplaceProduct 
                        title='Investigación y Ciencia' 
                        description='Ofrece información más importante sobre la ciencia y la técnica en todo  el mundo'
                        date='SEPTIEMBRE 2022'
                        img={img}
                        />
                </TabPanel>
            </Tabs>
                
        </div>
    )
}


export default MarketplaceCatalog;