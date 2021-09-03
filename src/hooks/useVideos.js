import { useState } from "react";
import API from "./../components/API";
const useVideos = (term) => {
  const [videos, setVideo] = useState([]);
  const onSearch = async (term) => {
    const response = await API.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: "AIzaSyDCcc98KZKLoE5K3JisCV_JAXaZLOwMGKQ",
      },
    });
    setVideo(response.data.items);
  };

  return [videos, onSearch];
};

export default useVideos;
