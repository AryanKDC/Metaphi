import React from 'react';
import styled from 'styled-components';

const NavbarStyledBtn = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <button className="button">Contact us</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 20px;
    padding: 0.3em 0.6em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
  }

  .container {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #0D47A1, #00C853);
    border-radius: 0.9em;
    transition: all 0.4s ease;
  }

  .container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.9em;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }

  .container:hover::before {
    background: linear-gradient(90deg, #0D47A1, #00C853);
    filter: blur(1.2em);
  }
  .container:active::before {
    filter: blur(0.2em);
  }`;

export default NavbarStyledBtn;
