import axios from 'axios'
import config from '../config'

class DAL_Pages {
    static getData(data) {
        return axios.post(config.API_URL[config.LANG], data)
    }
}
export default DAL_Pages