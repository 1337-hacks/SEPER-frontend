import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FooterContainer, 
    Copyright, 
    OtherFooter,
    Seperbaby,
    Aligning,
    AboutUs,
    Evidences,
    Anotherliner,
    Contacts,
} from './footer';

const Footer = () => {
    return (
      // sadas
      <OtherFooter>
        <Aligning>
          <Seperbaby> Seper | Articles & SE Practices </Seperbaby> 
          <Anotherliner>
              <Link to = '/'>
               <AboutUs> About Us</AboutUs>
              </Link>
            <Link to = '/'>
              <Evidences> Evidences </Evidences>
            </Link>
            <Link to = '/'>
              <Contacts> Contact Us </Contacts>
            </Link>
          </Anotherliner>
        </Aligning>
      <FooterContainer>
        <Copyright> © 2021 SEPER </Copyright>
      </FooterContainer>
      </OtherFooter>
    );
};



export default Footer;