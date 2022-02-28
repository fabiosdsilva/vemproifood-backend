import axios from "axios";

class ApiWeatherMap {

    private key = process.env.KEY_WEATHER;

    async index(city?: string, lon?: string, lat?: string) {
        try {
            const getTemperature = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=campinas&appid=${this.key}`)

            if (getTemperature) {
                return getTemperature.data;
            };

        } catch (e) {
            return e;
        };
    };
};

export default new ApiWeatherMap();