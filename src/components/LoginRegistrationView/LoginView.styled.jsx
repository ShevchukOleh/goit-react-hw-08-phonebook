import styled from "styled-components";
import photo from '../../image/pexels-christian-heitz-842711.jpg'
import mobileBG from '../../image/mobile.jpeg'
import tabletBg from '../../image/tablet.jpeg'

export const Section = styled.div`
    background-color: #0b0b32;
    max-width: 767px;
    height: 100vh;
    display: grid;
    justify-content: center;
    background-image: url(${mobileBG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (min-width: 768px) {
        max-width: 1199px;
        background-image: url(${tabletBg});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media screen and (min-width: 1200px) {
        display: flex;
        max-width: 1440px;
        background-image: url(${photo});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
export const LogInContainer = styled.div`
   padding-top: 50px;
   padding-left: 15px;
   padding-right: 15px;
   @media screen and (min-width: 1200px) {
    padding-top: 130px;
   }
`;
export const RegistrationContainer = styled.div`
   padding-top: 20px;
   padding-left: 15px;
   padding-right: 15px;
   @media screen and (min-width: 1200px) {
    padding-top: 60px;
   }
`;
export const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    width: calc(100vw - 30px);
    max-width: 400px;
    padding: 30px 5px 20px 5px;
    @media screen and (min-width: 1200px) {
        width: 400px;
        padding: 30px 20px 50px 20px;
    }

`;
export const Title = styled.h2`
    color: black;
    justify-content: center;
    display: flex;
    margin-bottom: 60px;
    font-size: 25px;
`;
export const Form = styled.form`
    padding-left: 30px;
    padding-right: 30px;
`;

export const Link = styled.a`
    margin-top: 60px;
    color: #21219e;
    justify-content: center;
    display: flex;
    cursor: pointer;
`;
export const ButtonContainer = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 60px;
`;
export const Text = styled.h1`
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 50px;
    @media screen and (min-width: 768px) {
        font-size: 70px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 100px;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (min-width: 1200px) {
        align-items: center;
        padding-left: 150px;
    }
`