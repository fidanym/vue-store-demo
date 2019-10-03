// Add real API calls here and just swap out import path
import axios from 'axios'

export default {
    fetchUsers () {
        return axios
            .get('')
            .then(response => response.data)
    }
}