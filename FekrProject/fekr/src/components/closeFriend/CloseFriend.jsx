import "./closeFriend.css";

export default function closeFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <img
        src={`${PF}${user.profilePicture}`}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="idebarFriendName">{user.username}</span>
    </li>
  );
}

//TODO delete this module if yet not needed
