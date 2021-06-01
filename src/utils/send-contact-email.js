import { API_CONTACT } from "../constants";

const DEFAULT_CONTACT_OPTIONS = {
  method: "POST",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
};

const sendContactEmail = async (data) => {
  try {
    const response = await fetch(API_CONTACT, {
      ...DEFAULT_CONTACT_OPTIONS,
      body: JSON.stringify(data),
    });

    return response;
  } catch (e) {
    console.log(e)
  }
};

export default sendContactEmail;
