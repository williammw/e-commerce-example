import React from 'react';
import '../../components/collections-preview/collections-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview  />
    </div>
)




export default ShopPage;