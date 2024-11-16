/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BookmarkContext = createContext(null)

const BookmarksProvider = ({children}) => {
    const [bookmarks, setBookmarks] = useState([]);

    const authInfo={
        bookmarks,
        setBookmarks
    }
    return (
        <BookmarkContext.Provider value={authInfo}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarksProvider;