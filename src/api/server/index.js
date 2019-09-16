import axios from 'axios'

export default {
    fetchUsers () {
        return axios
            .get('')
            .then(response => response.data)
    }
}