import './collection-preview.styles.scss';

import React, { Component } from 'react';
import '../collection-item/collection-item.component';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionsPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4)
                    .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>         
    </div>
)

export default CollectionsPreview;