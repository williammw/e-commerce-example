import React, { Component } from 'react';
import './collection-preview.scss';
import { findAllByTitle } from '@testing-library/react';
const CollectionsPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(item => (
                    <div>{item.name}</div>
                ))   
            }
        </div>         
    </div>
)