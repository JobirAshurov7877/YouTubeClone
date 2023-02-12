import {Routes,Route} from 'react-router-dom'
import { Box } from "@mui/system"
import {Main,Channel,Navbar,VideoDetail,Search} from '../'
    
const App = ()=>{
      return(
          <Box bgcolor={'rgba(0,0,0,0.04)'}>
           <Navbar />
              <Routes>
               <Route path='/' element={<Main />} />
               <Route path='/channel/:id' element={<Channel />} />              
               <Route path='/video/:id' element={<VideoDetail />} />              
               <Route path='/search/:id' element={<Search />} />              
              </Routes>  
          </Box>
      )
 }
 export default App