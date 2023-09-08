import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";

import React from 'react'
import styled from "styled-components";
import { mobile } from "../pages/responsive";



const Container = styled.div`
    height: 250px;
    display: flex;
    background-color:lightseagreen;
    font-family: Segoe UI;
    color:white;
    ${mobile({ flexDirection: "column" })}
`;

const SocialContainer = styled.div`
  padding: 20px;
  display: flex;
  height: 50px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Left = styled.div`
    flex:1;
    flex-drection:column;
    margin-left: 40px;
    padding: 30px;
`;

const AboutGem = styled.span`
    color:white;
    margin: 20px 0px;
    font-weight: normal;
`;
const Title = styled.h2`
    color:white;
    margin-bottom: 20px;
    margin-top: 0px;
`;

const Center = styled.div`
    flex:1;
`;

const Copyright = styled.h4`
    margin-left: 80px;
    align-items: center;
    color:khaki;
    margin-top: 2px;
    background-color: transparent;
`;

const Right = styled.div`
    margin-left: 30px;
    padding: 30px;
    flex: 1;
    justify-content: flex-end;
`;

const Logo = styled.img`
    margin-left: 170px;
    padding: 30px;
    height: 120px;
    width: 140px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <div>
      <Container>
            <Left>
                 <AboutGem>
                    <Title>About Gem Story <br/></Title>
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.
                        <SocialContainer>
                            <SocialIcon color = "3B5999">
                                <Facebook/>
                            </SocialIcon>
                            <SocialIcon color="E4405F">
                                <Instagram />
                            </SocialIcon>
                        </SocialContainer>
                </AboutGem>        
        </Left>
        <Center>
            <Logo src={require('./logo.png')} >
            </Logo>
            <Copyright>
                Copyright @ 2023 GemStory. All Rights Reserved
            </Copyright>    
        </Center> 
        <Right>
            <Title>Contact{'\n'}</Title>
            <ContactItem>
                <Room style={{marginRight:"20px"}}/> 919/1 Si Lom, Silom, Bang Rak, Bangkok 10500 {'\n'}
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"20px"}}/> +1 234 56 78 {'\n'}
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"20px"}} /> GemStory@gmail.com {'\n'}
            </ContactItem>
        </Right>
      </Container>
    </div>
  )
}

export default Footer
