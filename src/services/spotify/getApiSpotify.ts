import SpotifyWebApi from "spotify-web-api-node";
import scopes from "./scopes";

class ApiSpotify {

    protected readonly clientId = '4507ee0b3b24462fadb8d10a868b2cee';
    protected readonly clientSecret = process.env.SECRET;
    public spotifyApi;

    constructor() {
        this.spotifyApi = new SpotifyWebApi({
            clientId: this.clientId,
            clientSecret: this.clientSecret,
            redirectUri: 'http://localhost:8081'
        });
    };

    public getToken() {
        const result = this.spotifyApi.createAuthorizeURL(scopes);
        console.log(result);
        return result;
    }

    public async getPlayList(name?: string) {
       try {
           const playlist = await this.spotifyApi.getPlayList(name);

           if (playlist) {
               return playlist;
           }
       } catch (e) {
           return e;
       };
   };
};

export default new ApiSpotify();