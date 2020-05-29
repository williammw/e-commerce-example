const INITAL_STATE = {
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

const directoryreducer = (state = INITAL_STATE, action) =>{
    switch(action.type){
        default:
        return state;
    }
} 
export default directoryreducer;