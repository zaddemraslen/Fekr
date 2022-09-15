import "./sidebar.css";
import { Users } from "../../dummyData";
//TODO switch from static data to dynamic data : dummy data => mongo cluster

import { ProfileImage } from "../.";
import { mediaConfig } from "../../configurations/.";

import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import SchoolIcon from "@mui/icons-material/School";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon"></RssFeedIcon>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <InsertInvitationIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <ProfileImage
              key={u.id}
              prefixPath={mediaConfig.DefaultProfilePicFolder}
              path={u.profilePicture}
              username={u.username}
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
          ))}
        </ul>
      </div>
    </div>
  );
}
