import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import {Videos} from '../'
import { useParams } from "react-router-dom"
import { ApiService } from "../../servis/api.servis"
const Search = () => {
  const [videos, setVideos]= useState([])
  const {id} = useParams()
  useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [id])

  return (
    <Box p={2} sx={{height:'90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant="h4" fontWeight={'bold'} mb={2}>
          Search result for <span style={{color:'rgb(223, 0, 0)'}}>{id}</span> videos
        </Typography>
        <Videos videos = {videos} />
      </Container>
    </Box>
  )
}

export default Search