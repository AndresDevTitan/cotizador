import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 20px;
    font-weight: bold;
    color: #ffffff;
`;

const TextoHeader = styled.header`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
      );
}

export default Header;