import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection,Logo,LogoText,UlList,ListItem, Acchor} from './Style.js';

const Navbar = () =>{
    return(
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
      
                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="/contact">Contact</Link></ListItem>
                    <ListItem><Acchor href="#">Work</Acchor></ListItem>
                    <ListItem><Acchor href="#">Portfolio</Acchor></ListItem>
                    <ListItem><Acchor href="#">Resume</Acchor></ListItem>
                    <ListItem><Acchor href="#">About</Acchor></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}
export default Navbar;