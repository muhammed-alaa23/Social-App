import {Navbar as HeroUiNavbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {


  const navigate  = useNavigate();
  const {isLoggedIn,setisLoggedIn}=useContext(AuthContext)




  function signOut(){
    localStorage.removeItem("token")
    setisLoggedIn(false)
    navigate("/login")
  }

  function signIn(){
    navigate("/login")
  }
  function signUp(){
    navigate("/register")
  }

  return (
    
    <HeroUiNavbar shouldHideOnScroll>
      <NavbarBrand  >
       <div  onClick={() => navigate("/")} className="cursor-pointer flex items-center">
        <i className="fa-solid fa-ghost mr-1 text-2xl" />
        <h1 className=" font-bold text-inherit">SocialAppp</h1>
       </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <div  onClick={() => navigate("/")} className="cursor-pointer flex items-center mr-5">
        <i className="fa-solid fa-house mr-1"></i>
        <h1 className="text-[14px] ">Home</h1>
       </div>

       <div  onClick={() => navigate("/profile")} className="cursor-pointer flex items-center">
        <i className="fa-solid fa-user mr-1"></i>
        <h1 className="text-[14px]">Profile</h1>
       </div>

      </NavbarContent>
      <NavbarContent justify="end">
        {
            isLoggedIn ?

          <NavbarItem className="flex">
            <Button onPress={signOut} color="danger"  variant="light" className="bg-white font-bold text-inherit">
              Sign out
            </Button>
          </NavbarItem>
        :
        <>
            <NavbarItem className="flex">
              <Button onPress={signIn} color="default" variant="flat">
                Sign in
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button onPress={signUp} color="primary" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
        </>
            
          }
      </NavbarContent>
    </HeroUiNavbar>
  )
}
