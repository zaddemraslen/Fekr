import { TopBar, SideBar, Feed, RightBar } from "../../components/.";
import "./home.css";

export default function Home() {
  return (
    <>
      <TopBar></TopBar>
      <div className="homeContainer">
        <Feed isHome={true}></Feed>
        <SideBar></SideBar>
        <RightBar></RightBar>
      </div>
    </>
  );
}
