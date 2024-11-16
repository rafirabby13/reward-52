import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext } from "../Providers/BookmarksProvider.jsx";
import { UserContext } from "../Providers/UserProvider.jsx";

const Navbar = () => {
    const {bookmarks} = useContext(BookmarkContext)
    const {user} = useContext(UserContext)
    console.log(user);
    return (
        <div>
            <ul style={{display: 'flex', justifyContent: 'end', gap: '20px', fontSize: '20px', padding: '0px 10rem'}}>
                <Link to='/'>Home</Link>
                <Link >Booksmarks: ({bookmarks.length})</Link>
                <Link >Hi: {user?.name}</Link>

                {/* <Link to='/common/contact/true'>Contact</Link>
                <Link to='/common/about'>About</Link> */}
            </ul>
        </div>
    );
};

export default Navbar;