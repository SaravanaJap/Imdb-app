
import { Link } from 'react-router';
import CountContext from '../context/counter-countext'
import {useContext} from 'react'
import WatchListContext from '../context/watch-list';

const Layout = (props) => {
    const {watchlist} = useContext(WatchListContext)
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">

            {/* Header */}
            <header className="bg-gray-900 text-white shadow-md">
                <nav className="w-[80%] mx-auto flex items-center justify-between py-4">
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link to="/" className="text-2xl font-bold text-yellow-400">
                                TMDB
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-yellow-400 transition">
                                Trending Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/watchlist" className="hover:text-yellow-400 transition">
                                watchlist:<sup>{watchlist.length}</sup>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="w-[80%] mx-auto py-8 min-h-[80vh]">
                {props.children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center py-4">
                <p className="text-sm">
                    All rights reserved © 2026 TMDB
                </p>
            </footer>

        </div>
    );
};

export default Layout;