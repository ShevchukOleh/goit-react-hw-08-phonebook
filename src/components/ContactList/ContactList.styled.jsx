import styled from "styled-components";

export const List = styled.ul`
    font-size: 16px;
    line-height: 1.2;
    margin: 0;
    padding: 15px;
    padding-top: 30px;
`;

export const ListItem = styled.li`
    align-items: center;
    max-width: 480px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    border-bottom: 1px solid #071896;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    @media screen and (min-width: 768px) {
        max-width: 800px;
    }
    @media screen and (min-width: 1200px) {
        width: 600px;
    }
`;
export const Title = styled.h2`
    display: flex; 
    justify-content: center;
    @media screen and (min-width: 768px) {
        display: block;
        padding-left: 20px;
    }
    @media screen and (min-width: 1200px) {
        isplay: flex; 
    }
`;
export const Container =styled.div`
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    max-width: 480px;
    @media screen and (min-width: 768px) {
        max-width: 800px;
    }
    @media screen and (min-width: 1200px) {
        width: 600;
    }
`

export const Loading = styled.div`
    position: absolute;
    height: 20px;
    top: 5px;
    left: 20px;
`