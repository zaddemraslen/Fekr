import "./feed.css";
import { mediaConfig } from "../../configurations/.";
import { useEffect, useState } from "react";
import { Share, Post } from "../.";
import axios from "axios";

export default function Feed({ isHome }) {
  const [posts, setPosts] = useState([]);
  const [inWritingPost, setInWritingPost] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      //TODO timeline path shall be dynamic

      //if isHome is undefnied or null we will consider it false
      const bool1 = isHome ? isHome : false;
      const param1 = bool1.toString();
      const timelinePath =
        mediaConfig.PostPath +
        "timeline/62de127bc240aea62cf58abd" +
        "?isHome=" +
        param1;
      console.log("timelinePath" + timelinePath);
      const res = await axios.get(timelinePath);
      console.log(
        "Postes of user : 62de127bc240aea62cf58abd : isHome ?" + isHome
      );
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [isHome]);

  return (
    <div className="feed" write-post={inWritingPost ? "true" : "false"}>
      <div className="feedwrapper">
        <Share
          onFocus={() => {
            setInWritingPost(true);
          }}
          onBlur={() => {
            setInWritingPost(false);
          }}
        ></Share>
        {
          //TODO shuffled display
          posts.map((p) => (
            <Post key={p._id} post={p}></Post>
          ))
        }
      </div>
    </div>
  );
}
