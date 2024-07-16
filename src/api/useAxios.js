import axios from "axios";

function createInstance() {
  const token = "asjdadnsaödakdnsadmalkdjakfnakjbn";
  return axios.create({
    baseURL: "https://66965f740312447373c2468d.mockapi.io/",
    headers: {
      authorization: token,
    },
  });
}

export const API = createInstance();
