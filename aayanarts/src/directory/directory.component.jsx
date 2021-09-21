import React from 'react';
import MenuItem from '../components/menu-item/menu-item.component';

class directory extends React.Component{
    constructor(){
     super()

     this.state = {
        sections:[{
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            size:'small'
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            size:'small'
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            size:'small'
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            size:'large'
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            size:'large'
        }]
     }
    }

    
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
                        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default directory;

