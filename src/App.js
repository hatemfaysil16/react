import React ,{ Component }from 'react';
import './App.css';
import { BrowserRouter , Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Index from './components/Index';



class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <Navbar/>
                <Route exact path="/"component={Index}/>
                <Route path="/contact"component={Contact}/>
            </BrowserRouter>
        )
    }
}

export default App;