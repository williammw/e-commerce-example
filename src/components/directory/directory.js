import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component{
    constructor() { 
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://app1.legco.gov.hk/gallery/photo/325/11281398304_o.jpg',
                  id: 1,
                  linkUrl: 'hats'                  
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://app1.legco.gov.hk/gallery/photo/325/11281374526_o.jpg',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://app1.legco.gov.hk/gallery/photo/327/16152971745_o.jpg',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://app1.legco.gov.hk/gallery/photo/328/45692388182_o.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://app1.legco.gov.hk/gallery/photo/327/15949717277_o.jpg',                  
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
              ]
        }
    }
   
    render() { 
        return (
            <div className='directory-menu'>
            {
              // important
                    this.state.sections.map(({id,...otherSectionProps}) => (
                      <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default Directory;

// const sections = [
//     {
//       title: 'hats',
//       imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//       id: 1,
//       linkUrl: 'shop/hats'
//     },
//     {
//       title: 'jackets',
//       imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//       id: 2,
//       linkUrl: 'shop/jackets'
//     },
//     {
//       title: 'sneakers',
//       imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//       id: 3,
//       linkUrl: 'shop/sneakers'
//     },
//     {
//       title: 'womens',
//       imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//       size: 'large',
//       id: 4,
//       linkUrl: 'shop/womens'
//     },
//     {
//       title: 'mens',
//       imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//       size: 'large',
//       id: 5,
//       linkUrl: 'shop/mens'
//     }
//   ];