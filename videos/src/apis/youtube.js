import axios from "axios";

const KEY = "AIzaSyAimNJQV7B1gQibUn4Tz8fb_8XqYWR3paA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
