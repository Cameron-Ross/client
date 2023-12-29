import { NavLink as Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {

  return (
    <nav className={'nav'}>
      <Link to="/" className={'navtitle'}>Demo</Link>
      <div className={'navmenu'}>
        <Link to="/" className={'navlink'}>Home</Link>
        <Link to="/countdown" className={'navlink'}>Countdown</Link>
        <Link to="/classrooms" className={'navlink'}>Classrooms</Link>
        <Link to="/courses" className={'navlink'}>Courses</Link>
      </div>
    </nav>
  );
}
