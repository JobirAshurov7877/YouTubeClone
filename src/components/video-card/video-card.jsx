
import { Avatar, Card,CardContent,CardMedia, Typography } from "@mui/material"
import { colors } from '../../constants/colors'
import moment from "moment/moment"
import { Stack } from "@mui/system"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
const VideoCard = ({video}) => {
     
  return (
     <Card sx={{width:{sx:'100%',sm:'360px',md:'320px '},borderRadius:'12px',
         boxShadow:'-webkit-box-shadow: -1px 5px 26px 6px rgba(127, 127, 127, 0.2); -moz-box-shadow: -1px 5px 26px 6px rgba(127, 127, 127, 0.2); box-shadow: -1px 5px 26px 6px rgba(127, 127, 127, 0.2);'}}>
         <Link to={`/video/${video.id.videoId}`}>
         <CardMedia sx={{borderRadius:'12px'}} component= {'img'} image={video.snippet.thumbnails.high.url}  />
         </Link>
         

         <CardContent sx={{color:colors.textColor ,height:'200px' ,position:'relative'}} >

         <Link to={`/video/${video.id.videoId}`}>
         <Typography my={'3px'} sx={{opacity:'.4' ,fontSize:'.9rem'}}>
           {moment(video?.snippet?.publishedAt).fromNow()}
           </Typography>
           <Typography variant="subtitle1" fontWeight={'bold'} lineHeight={'20px'} fontSize={'1.1rem'}>
            {video?.snippet?.title.slice(0,40)}...    
           </Typography>
           <Typography variant="subtitle2" sx={{opacity:'.6' ,marginTop:'5px'}}>
            {video?.snippet?.description.slice(0,70)}...    
           </Typography>
         </Link>

         <Link to={`/channel/${video?.snippet?.channelId}`}>
            <Stack direction={'row'} 
            position={'absolute'}
            bottom={'10px'} 
            alignItems={'center'}
            gap={'5px'}>
            <Avatar src={video.snippet.thumbnails.high.url}/>
            <Typography variant={'subtitle2'} color='gray'>
               {video?.snippet?.channelTitle}
               <CheckCircle sx={{fontSize:'12px', color:'gray',ml:'5px'}} />
            </Typography>
            </Stack>
         </Link>




         </CardContent>
     </Card>
  )
}

export default VideoCard
