import React, { useState, useEffect } from "react";
// import axios from "axios";
import SearchBar from "./SearchBar";
// import API from "./API";
import VideoList from "./VideoList";
import VideoDetail from "./video/VideoDetails";
import useVideos from "../hooks/useVideos";
// import axios from "axios";

const App = () => {
  // const [videos, setVideo] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);
  const [videos, onSearch] = useVideos("");
  useEffect(() => {
    setselectedVideo(videos[0]);
  }, [videos]);
  // state = { videos: [], selectedVideo: null };
  // const onSearch = async (term) => {
  //   const response = await API.get("/search", {
  //     params: {
  //       q: term,
  //       part: "snippet",
  //       maxResults: 5,
  //       type: "video",
  //       key: "AIzaSyDCcc98KZKLoE5K3JisCV_JAXaZLOwMGKQ",
  //     },
  //   });
  // console.log(response.data.items);
  // setVideo(response.data.items);
  // setselectedVideo(response.data.items[0]);

  // this.setState({
  //   videos: response.data.items,
  //   selectedVideo: response.data.items[0],
  // });
  // };
  // const onVideoSelect = (video) => {

  //   // this.setState({ selectedVideo: video });
  // };

  // render() {

  // select PRODUCT_ID,CATEGORY,DISCOUNT
  // from PRODUCT
  // where DISCOUNT=(
  //   select max(DISCOUNT)
  //   from PRODUCT
  // )
  // group by CATEGORY
  return (
    <div className="ui container">
      <SearchBar onSubmit={onSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {" "}
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setselectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
  // }
};
export default App;
