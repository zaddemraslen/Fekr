import "./profile.css";

import { TopBar, SideBar, Feed, RightBar } from "../../components/.";
import { useParams } from "react-router-dom";
import { mediaConfig } from "../../configurations/.";
export default function Profile() {
  const { username } = useParams();

  return (
    <>
      <TopBar></TopBar>
      <div className="profile">
        <SideBar></SideBar>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${mediaConfig.PublicFolder}post/images(1).jpg`}
                alt=""
              />

              <div className="profileInfo">
                <img
                  className="profileUserImg"
                  src={`${mediaConfig.PublicFolder}profile/1.jpg`}
                  alt=""
                />
                <h4 className="profileInfoName">{username ?? "Username"}</h4>
                <span className="profileInfoDesc">N'IMPORTE QUOI</span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed iSHome={false}></Feed>
            <RightBar profile></RightBar>
          </div>
        </div>
      </div>
    </>
  );
}
