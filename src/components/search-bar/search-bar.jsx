import { Paper,IconButton } from "@mui/material"
import {colors} from '../../constants/colors'
import { Search } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {

  const[value, setValue] = useState('')
  const navigate= useNavigate()
   
  const submitHandler=(e)=>{
    e.preventDefault()
    if( value){
      navigate(`/search/${value}`)
      setValue('')
    }
  }
  return (
    <Paper 
    component={"form"} 
    onSubmit={submitHandler}
    sx={{pl:2, border:`1px  solid ${colors.primary}`, boxShadow:'none' , borderRadius:20 , color:`${colors.textColor}`}}>


    <input className="search-bar" type="text" placeholder="Search..." onChange={e => setValue(e.target.value)}/>
    <IconButton type='submit '>
    <Search />
    </IconButton>
    </Paper>
  )
}

export default SearchBar