import styled from 'styled-components';

export const Section = styled.div`
    background-color: aliceblue;
    height: 100vh;
`;
export const Form = styled.form`
    border-radius: 3px;
    padding: 20px;
    @media screen and (min-width: 768px) {
        max-width: 770px;
    }
    @media screen and (min-width: 1200px) {
        width: 600px;
        padding-top: 68px;
    }
`;
export const Container = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    max-width: 480px;
    @media screen and (min-width: 768px) {
        max-width: 1199px;
        margin-left: auto;
    }
    @media screen and (min-width: 1200px) {
        display: flex;
        margin: auto;
    }
`;
