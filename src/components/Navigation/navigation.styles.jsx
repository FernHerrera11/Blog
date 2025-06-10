import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div`


`


export const NavLink = styled(Link)`
display: inline-block;
text-decoration: none;

padding: 10px;
color: red; 
font-weight: bold;
&:hover {
    color: blue;
}


`