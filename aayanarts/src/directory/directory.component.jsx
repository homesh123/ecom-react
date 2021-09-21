import React from 'react';
import MenuItem from '../components/menu-item/menu-item.component';

class directory extends React.Component{
    constructor(){
     super()

     this.state = {
        sections:[{
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
        }]
     }
    }

    
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
                        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default directory;

