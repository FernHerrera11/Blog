import { Outlet } from "react-router-dom";
import { NavigationContainer, NavLink } from "./navigation.styles";



const Navigation = () => {
    return (
       <>
         <NavigationContainer>
            
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
                <NavLink to="/blog"> Blog </NavLink>
                <NavLink to="/shop"> Shop </NavLink>

         </NavigationContainer>


            <Outlet /> 
        
        
        </>
    );


}


export default Navigation;