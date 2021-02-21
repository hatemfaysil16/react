import React, { Component } from 'react';
import axios from 'axios';
import { WorkShop , WorkTitle , Span , WorkPart , Icon , PartTitle , Line , PartDesc } from './Style.js';
class Work extends Component{
        state = {
            work: [],
        };

        componentDidMount(){
            axios.get("data.json").then ((e)=>{
               this.setState({
                work:e.data.works
               })
            })
        }

    render(){

        const {work} = this.state;
        const workList = work.map((WorkTitle)=>{
            return(
                <WorkPart key={WorkTitle.id}>
                <Icon className={WorkTitle.icon_name}></Icon>
                <PartTitle>{WorkTitle.title}</PartTitle>

                <Line/>
                <PartDesc>
                    {WorkTitle.body}
                </PartDesc>
            </WorkPart>
            )
        })
    return(
        <WorkShop>
        <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>

                {workList}
            </div>
        </WorkShop>
    )
 }
}
export default Work;








// <WorkPart first="1">
// <Icon className="icon fa fa-chain fa-2x"></Icon>
// <PartTitle>Mobile Ux</PartTitle>
// <Line/>
// <PartDesc>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
// </PartDesc>
// </WorkPart>

// <WorkPart>
// <Icon className="icon fa fa-chain fa-2x"></Icon>
// <PartTitle>Mobile Ux</PartTitle>
// <Line/>
// <PartDesc>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
// </PartDesc>
// </WorkPart>

// <WorkPart>
// <Icon className="icon fa fa-chain fa-2x"></Icon>
// <PartTitle>Mobile Ux</PartTitle>
// <Line/>
// <PartDesc>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
// </PartDesc>
// </WorkPart>