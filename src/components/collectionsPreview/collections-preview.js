import React, { Component } from 'react';
import { findAllByTitle } from '@testing-library/react';
import CollectionItem from '../collection-item/collection-item.component.js';

import './collection-preview.styles.scss';

const CollectionsPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4)
                    .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))  
            }
        </div>         
    </div>
)

export default CollectionsPreview;               