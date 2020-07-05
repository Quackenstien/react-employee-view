import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

function Search() {
  return axios.get(BASEURL);
}

export default Search;
