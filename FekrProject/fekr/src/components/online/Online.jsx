import "./online.css";
import { mediaConfig } from "../../configurations/.";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfielImgContainer">
        <img
          src={`${mediaConfig.DefaultProfilePicFolder}${user.profilePicture}`}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}

//TODO delete componnent if not yet nedded
