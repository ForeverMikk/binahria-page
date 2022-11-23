import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MarketTabs = () => {
    return(
        <Tabs>
            <TabList>
                <Tab value='t' headers='Titulo 1'>Titulo 1</Tab>
            </TabList>
            <TabPanel>
                <h2>Titulo 1</h2>
            </TabPanel>
        </Tabs>
    )
}

export default MarketTabs;