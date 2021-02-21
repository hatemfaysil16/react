import React ,{ Component }from 'react';

import Home from './../Home';
import About from './../About';
import Profile from './../Profile';
import Protifolio from './../Protifolio';
import SocailMedia from './../SocailMedia';
import Work from './../Work';
import Footer from './../Footer';





class Index extends Component{
    render(){
        return(
            <div>
                <Home/>
                <Work/>
                <Profile/>
                <Protifolio/>
                <About/>
                <SocailMedia/>
                <Footer/>
            </div>
        )
    }
}

export default Index;