import axios from "axios";
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;

// const BASE = "appT3MFdDqZ1ffo0F";
// const KEY = "keyTjUsCNhmZEhcjL";
// const GOOGLE_API_KEY="AIzaSyBWbZEn81M6IfRrQGKStEguuAA3kV5WxfM"


const baseURL = `https://api.airtable.com/v0/${BASE}/Books`;

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${KEY}`,
  }
})

export default api;
