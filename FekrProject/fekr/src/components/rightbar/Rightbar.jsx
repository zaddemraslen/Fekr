import "./rightbar.css";
import { ProfileImage } from "../.";
import { Users } from "../../dummyData";
import { mediaConfig } from "../../configurations/.";
//TODO switch from static data to dynamic data : dummy data => mongo cluster

export default function rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightBarTop">
          <div className="birthdayContainer">
            <img src="../assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Pola </b>
              and
              <b> three other friends </b>
              have birthday today
            </span>
          </div>
          <img
            className="rightbarAd"
            src={mediaConfig.PublicFolder + "books.jpg"}
            alt=""
          />
        </div>
        <div className="rightBarButtom">
          <h4 className="rightbarTitle"> Online Friends</h4>
          <div className="rightbarFriendListWrapper">
            <ul className="rightbarFriendList">
              {Users.map((u) => (
                <>
                  <ProfileImage
                    prefixPath={mediaConfig.DefaultProfilePicFolder}
                    path={u.profilePicture}
                    username={u.username}
                    defaultPath={
                      mediaConfig.PublicFolder + "alt/default_profile_pic.jpg"
                    }
                    dimension="52px"
                    status="on"
                    aligning={{
                      isReversed: false,
                      direction: "row",
                      horizontalAlign: "flex-start",
                    }}
                    margin="10"
                  ></ProfileImage>
                  <ProfileImage
                    prefixPath={mediaConfig.DefaultProfilePicFolder}
                    path={u.profilePicture}
                    username={u.username}
                    defaultPath={
                      mediaConfig.PublicFolder + "alt/default_profile_pic.jpg"
                    }
                    dimension="52px"
                    status="on"
                    aligning={{
                      isReversed: false,
                      direction: "row",
                      horizontalAlign: "flex-start",
                    }}
                    margin="10"
                  ></ProfileImage>
                </>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbatInfoKey">City:</span>
            <span className="rightbatInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbatInfoKey">From:</span>
            <span className="rightbatInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbatInfoKey">Relationship:</span>
            <span className="rightbatInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Following</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${mediaConfig.PublicFolder}profile/2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${mediaConfig.PublicFolder}profile/4.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${mediaConfig.PublicFolder}profile/5.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${mediaConfig.PublicFolder}profile/7.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${mediaConfig.PublicFolder}profile/3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
