import React from "react";
import "./ProfileImage.css";
import defaultImage from "./resources/default_profile_pic.jpg";

function ProfileImage({
  prefixPath,
  path,
  status,
  defaultPath,
  dimension = "48px",
  username = "userName",
  aligning: {
    direction = "column",
    verticalAlign = "center",
    horizontalAlign = "center",
    isReversed = false,
  },
  margin = 10,
}) {
  const textMargins = {
    row: "0 0 0 " + margin + "px",
    "row-reverse": "0 " + margin + "px 0 0",
    column: margin + "px 0 0 0",
    "column-reverse": "0 0 " + margin + "px 0",
  };

  return (
    <div
      className="Profile-Image-Component"
      style={{
        flexDirection: direction + (isReversed ? "-reverse" : ""),
        justifyContent: direction === "row" ? horizontalAlign : verticalAlign,
        alignItems: direction === "column" ? horizontalAlign : verticalAlign,
        fontSize: dimension,
      }}
    >
      <div
        className="profile-photo"
        style={{
          backgroundImage: `url(${
            prefixPath + path
          }),url(${defaultPath}),url(${defaultImage}) `,
          width: dimension,
          height: dimension,
        }}
      >
        {status && <div className="status" user-status={status}></div>}
      </div>
      {username && (
        <div
          style={{
            margin:
              textMargins[`${direction + (isReversed ? "-reverse" : "")}`],
          }}
        >
          <span className="profile-title">{username}</span>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
