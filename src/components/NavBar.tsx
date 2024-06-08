import { HStack, Image } from "@chakra-ui/react"
import SearchInput from "./SearchInput"
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"

const NavBar=()=>{
    return(
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' />
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar;