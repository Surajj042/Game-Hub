import { HStack, Image } from "@chakra-ui/react"
import SearchInput from "./SearchInput"
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"

interface Props{
    onSearch:(searchText:string)=>void;
  }

const NavBar=({onSearch}:Props)=>{
    return(
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar;