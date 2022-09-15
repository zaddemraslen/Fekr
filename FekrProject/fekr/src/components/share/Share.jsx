import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { mediaConfig } from "../../configurations/.";

export default function Share({ onFocus, onBlur }) {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop">
          <img
            className="shareprofilepicture"
            src={`${mediaConfig.PublicFolder}profile/1.jpg`}
            alt=""
          />
          <textarea
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="Whay's in your mind ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBotton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon
                htmlColor="tomato"
                className="shareIcon"
              ></PermMediaIcon>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon"></LabelIcon>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon
                htmlColor="green"
                className="shareIcon"
              ></LocationOnIcon>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                className="shareIcon"
              ></EmojiEmotionsIcon>
              <span className="shareOptionText">Feeling</span>
            </div>

            <button className="sharebutton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
