'use strict'

const gYTKey = 'AIzaSyBqW2gT2IeEfSihSRyF7wU6thhkzh2HVEk';


function getYoutubeResults(val) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${gYTKey}&q=${val}`)
        .then(res => renderYTResults(res.data.items))
}