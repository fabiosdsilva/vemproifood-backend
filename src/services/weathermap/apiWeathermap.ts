import axios from "axios";

class ApiWeatherMap {

    public key = process.env.KEY_WEATHER;

    async index() {
        try {
            const getTemp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=campinas&appid=${this.key}`)

            if (getTemp) {
                return getTemp.data;
            };

        } catch (e) {
            return e;
        };
    };
};

export default new ApiWeatherMap();