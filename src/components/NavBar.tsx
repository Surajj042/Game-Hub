import { HStack, Image } from "@chakra-ui/react"
import SearchInput from "./SearchInput"
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"
import { Link } from "react-router-dom"

const NavBar=()=>{
    return(
        <HStack padding='10px'>
            <Link to="/">
            <Image src={logo} boxSize='60px' objectFit='cover'/>
            </Link>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar;