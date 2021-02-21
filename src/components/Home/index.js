import React from 'react';
import { Hatem , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './Style.js';
const Home = () =>{
    return(
        <Hatem>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Hamza Nabil</HomeTitle>
                <HomeInfo >Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
    </Hatem>
    )
}
export default Home;