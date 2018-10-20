import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid black;
    display: inline-block;
    padding: 1rem;
    border-radius: 3px;
    font-size: ${(props => props.fontSize)};
    ${props => props.big && `font-size: 2rem; padding: 2rem`}
    &:hover {
        background: black;
        color: white;
  }
`;


// console.log(Wrapper)
const StyledButton = ({children, ...rest}) => {
    return(
        <Wrapper fontSize="1.25rem" {...rest}>
            {children}
        </Wrapper>
    )
}

export default StyledButton;