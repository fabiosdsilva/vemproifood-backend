import axios from "axios";

class ApiSpotify {

   async getPlayList(name?: string) {
       try {
           const pushData = await axios({
               method: 'get',
               url: 'https://api.spotify.com/v1/playlists/',
               responseType: "json",
           })
       } catch (e) {
           
       }
   }
}