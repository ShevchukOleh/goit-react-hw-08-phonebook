import styled from "styled-components";

export const Container = styled.div`
    max-width: 480px;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width: 768px) {
        max-width: 770px;
    }
    @media screen and (min-width: 1200px) {
        width: 600px;
    }
`;