import axios from 'axios'
const baseURL = "https://zhiminsportfolio.herokuapp.com/airtable_api"
//const baseURL = "http://127.0.0.1:5000/airtable_api"
const Axios = axios.create({
    baseURL
});

//const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY
//Axios.defaults.headers.common = { 'Authorization': `Bearer ` + airtableAPIKey}

export default {
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get(baseURL + "?filterByFormula={Slug}='" + slug + "'")
    }
}
