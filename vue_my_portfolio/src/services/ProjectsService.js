import axios from 'axios'

const Axios = axios.create({
    baseURL: "http://127.0.0.1:5000/airtable_api"
});

//const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY
//Axios.defaults.headers.common = { 'Authorization': `Bearer ` + airtableAPIKey}

export default {
    getProjects() {
        return Axios.get()
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
}
