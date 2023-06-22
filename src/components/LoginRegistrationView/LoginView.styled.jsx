import styled from "styled-components";
import photo from '../../image/pexels-christian-heitz-842711.jpg'
import mobileBG from '../../image/mobile.jpeg'
import tabletBg from '../../image/tablet.jpeg'


export const Section = styled.div`
    background-color: #0b0b32;
    max-width: 480px;
    height: 100vh;
    display: grid;
    justify-content: center;
    background-image: url(${mobileBG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (min-width: 768px) {
        max-width: 768px;
        background-image: url(${tabletBg});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media screen and (min-width: 1200px) {
        display: flex;
        max-width: 1440px;
        height: 100vh;
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
    padding-top: 100px;
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
    display: grid;
    justify-content: center;
`;
export const Label = styled.label`
    display: grid;
    margin-bottom: 25px;
`;
export const Input = styled.input`
    height: 35px;
    border-radius: 6px;
    border: 2px solid #04045f;
    padding: 2px 5px;
    font-size: 17px;
    width: calc(100vw - 60px);
    max-width: 350px;
    outline: none;
    cursor: pointer;
    &:hover, &:focus {
        border: 2px solid #d19c08;
    }
`;
export const Button = styled.button`
    margin-top: 80px;
    width: 160px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #fff;
    cursor: pointer;
    background-color: #045f1b;
    color: #ffffff;
    font-size: 18px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        background-color: #8b9411;
        color: #ffffff;
    }
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
`;
export const Text = styled.h1`
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 50px;
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
