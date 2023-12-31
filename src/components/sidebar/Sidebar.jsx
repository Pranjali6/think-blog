import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar(){

    return (
        <div className="sidebar">
           <div className="sidebarItem">
            <span className="sidebarTitle"> About Me</span>
           <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"></img>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem. Laudantium, natus? Unde laborum porro vel dolore fugiat rem eum aspernatur sed sunt maiores, qui impedit dicta quam. Aut, illo?</p>
           </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li> 

            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
    )


}