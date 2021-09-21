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
            size:'small',
            linkUrl:'hats'
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:2,
            size:'small',
            linkUrl:''
            
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:3,
            size:'small',
            linkUrl:''
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:4,
            size:'large',
            linkUrl:''
        },
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:5,
            size:'large',
            linkUrl:'x'
        }]
     }
    }

    
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
                        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default directory;

