import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://api.airtable.com/v0/appcQDvLw3YiggMPP/Projects"
});

const airtableAPIKey = process.env.VUE_APP_AIRTABLEKEY
Axios.defaults.headers.common = { 'Authorization': `Bearer ` + airtableAPIKey}

export default {
    getProjects() {
        return Axios.get("?maxRecords=3&view=All%20projects")
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
}
