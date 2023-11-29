import { Link } from "react-router-dom";
import { MainDiv, Logo, DivNav, Button } from "./styles";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
        <MainDiv>
          <Logo/>
          <DivNav>
            <Button>
              <Link 
              to="PreviewPage" 
              relative="path"
              >Preview
              </Link>
              </Button>
            <Button>Logout</Button>
          </DivNav>
        </MainDiv>
        
    </>
  );
}
export default Navbar;