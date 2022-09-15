import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ProfileImage } from "../.";
import { useState, useEffect } from "react";
import axios from "axios";
import { mediaConfig } from "../../configurations/.";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLike] = useState(false);
  const [user, setUser] = useState({});

  //TODO reaction
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        //`${mediaConfig.RootPath}users?userId="${post.userId}"`
        `${mediaConfig.RootPath}users?userId=${post.userId}`
        //`${mediaConfig.RootPath}users?userId=62dba2c0e0759c487bf6a06a`
      );
      console.log("ya m3allem : " + post.userId);
      console.log("fetched user: *****");
      console.log(res.data ? res.data : "unvalid");
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopleft">
            <Link to={`profile/`} style={{ textDecoration: "none" }}>
              <ProfileImage
                key={user.id}
                prefixPath={mediaConfig.DefaultProfilePicFolder}
                path={user.profilePicture}
                username={user.username}
                defaultPath={
                  mediaConfig.PublicFolder + "alt/default_profile_pic.jpg"
                }
                dimension="48px"
                aligning={{
                  isReversed: false,
                  direction: "row",
                  horizontalAlign: "flex-start",
                }}
                margin="10"
              />
            </Link>
          </div>
          <div className="posttoright">
            <span className="postDate"> {format(post.createdAt)} </span>
            <MoreVertIcon></MoreVertIcon>
          </div>
        </div>

        <div className="postcenter">
          <span className="postText">{post?.desc}</span>
          <img
            src={`${mediaConfig.DefaultPostImgFolder}${post.img}`}
            alt=""
            className="postImg"
          />
        </div>

        <div className="postbottom">
          <div className="postbottomLeft">
            <img
              className="reaction"
              src={`${mediaConfig.PublicFolder}like.png`}
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="reaction"
              src={`${mediaConfig.PublicFolder}heart.png`}
              alt="heart"
              onClick={likeHandler}
            />
            <span className="postReactionCounter">
              {" "}
              {like
                ? like > 0
                  ? like + (like > 1 ? " reactions" : " reaction")
                  : ""
                : ""}
            </span>
          </div>
          <div className="postbottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
