import { Stack,Box } from "@mui/system"
import { logo } from "../../constants"
import { Link } from "react-router-dom"
import { SearchBar } from "../"




const Navbar = () => {
  return (
    <Stack direction={'row'} 
    alignItems={'center'} 
    justifyContent={'space-between'} 
    p={2} 
    bgcolor={'#fff'}
    sx={{position:'sticky',top: 0, zIndex:999}}>
    <Link to={'/'}>
      <img src={logo} alt="logo" className="logo" height={40} />
    </Link>
    <SearchBar />
    
    
    <Box /> 
    </Stack>
  )
}

export default Navbar