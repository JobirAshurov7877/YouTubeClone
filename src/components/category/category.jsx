import { Stack } from "@mui/material"
import { category } from "../../constants"
import  {colors} from "../../constants/colors"

const Category = ({selectedCategoryHandler,selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll',pl:3}}>
    {category.map(item =>(
      <button key={item.name} 
      style = {{background:item.name === selectedCategory && colors.btnColor,
      color:item.name === selectedCategory && 'rgb(223, 0, 0)' }}
      className='category-btn' 
      onClick={()=>selectedCategoryHandler(item.name)}>
        <span>{item.name}</span>
      </button>
    ))}
    </Stack>
  )
}

export default Category