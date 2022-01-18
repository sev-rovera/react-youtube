import axios from 'axios'

const KEY='AIzaSyC3t-B7VzO7WsfOpl635yQcMofGfMbtcIs'

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

