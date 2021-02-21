import React, { useState, useEffect} from 'react';
import './Style.js';
import axios from 'axios';
import { PortfolioSection , PortfolioTitle , Span , PortfolioList , PortfolioItem , ImageWrapper 
    , ImgStyle , OverLay , BoxSpan} from './Style.js';
const Portfolio = () =>{


const [ Image , SetImages ] = useState([])

useEffect( () => {
    axios.get("data.json").then (res => {SetImages(res.data.portfolio) } )
    } , [])


    const PortfolioImages = Image.map((imageItem)=>{
        return(
            <ImageWrapper key={imageItem.id}>
            <ImgStyle src= {imageItem.image} alt=""/>
            <OverLay>
                <BoxSpan>
                    Show Image
                </BoxSpan>
            </OverLay>
        </ImageWrapper>
        )
    })


    return(
        <PortfolioSection>
            
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>

                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div class="box">
                
              {PortfolioImages}
                
            </div>
            
        </PortfolioSection>
    )
}
export default Portfolio;