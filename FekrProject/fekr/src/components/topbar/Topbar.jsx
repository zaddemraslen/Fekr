import { Search, Person, Chat, Notifications } from "@mui/icons-material";
//import { ProfileImage } from "../.";
import { Link } from "react-router-dom";
import "./topbar.css";
//import { mediaConfig } from "../../configurations/.";

export default function Topbar() {
  return (
    <div className="topbarcontainer ">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarlogo">LamaSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"></Search>
          <input
            placeholder="Search for friend, post or vedio"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person></Person>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat></Chat>
            <span className="topbarIconBadge">9+</span>
          </div>
          <div className="topbarIconItem">
            <Notifications></Notifications>
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        {/*<ProfileImage
          prefixPath={mediaConfig.DefaultProfilePicFolder}
          path={user.profilePicture}
          username={user.username}
          defaultPath={mediaConfig.PublicFolder + "alt/default_profile_pic.jpg"}
          dimension="48px"
          aligning={{
            isReversed: false,
            direction: "column",
            horizontalAlign: "center",
          }}
          margin="5"
        />*/}
        <img src="/assets/profile/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
