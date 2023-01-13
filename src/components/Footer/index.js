import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
}


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/banking-app">How it works</FooterLink>
              <FooterLink to="/banking-app">Testimonials</FooterLink>
              <FooterLink to="/banking-app">Careers</FooterLink>
              <FooterLink to="/banking-app">Invertors</FooterLink>
              <FooterLink to="/banking-app">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/banking-app">Contact</FooterLink>
              <FooterLink to="/banking-app">Support</FooterLink>
              <FooterLink to="/banking-app">Destinations</FooterLink>
              <FooterLink to="/banking-app">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/banking-app">Submit Video</FooterLink>
              <FooterLink to="/banking-app">Ambassadors</FooterLink>
              <FooterLink to="/banking-app">Agency</FooterLink>
              <FooterLink to="/banking-app">Influencers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/banking-app">Instagram</FooterLink>
              <FooterLink to="/banking-app">Facebook</FooterLink>
              <FooterLink to="/banking-app">Youtube</FooterLink>
              <FooterLink to="/banking-app">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/banking-app" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/banking-app" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
              <SocialIconLink href="/banking-app" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
              <SocialIconLink href="/banking-app" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
              <SocialIconLink href="/banking-app" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/in/anastasia-pirus/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>

  )
}

export default Footer