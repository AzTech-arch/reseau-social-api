
const Sidebar = () => {
    return (
        <div className="fixed  left-0 w-64 h-full bg-gray-800 text-gray-200">
            <div className="flex flex-col flex-grow p-4">
                <a className="flex items-center p-2 mt-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Dashboard
                </a>
                <div className="mt-4">
                    <span className="text-gray-400">Contents</span>
                    <a className="flex items-center p-2 mt-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                        Posts
                    </a>
                    <a className="flex items-center p-2 mt-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m-4 4h8"></path>
                        </svg>
                        Categories
                    </a>
                    <a className="flex items-center p-2 mt-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7H8m0 4h8m-8 4h8"></path>
                        </svg>
                        Tags
                    </a>
                </div>
                <div className="mt-4">
                    <span className="text-gray-400">Settings</span>
                    <a className="flex items-center p-2 mt-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0h8m-8 0l-2.293-2.293c-.63-.63-.184-1.707.707-1.707H17m0 0a2 2 0 100-4 2 2 0 000 4m-9 0a2 2 0 100-4 2 2 0 010 4m-2 12a2 2 0 100-4 2 2 0 000 4m8-2a2 2 0 110-4 2 2 0 010 4m0 0v2m0-6V4"></path>
                        </svg>
                        Users
                    </a>
                    <a className="flex items-center p-2 mt-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                        Account
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center h-16 border-t border-gray-700">
                <a className="flex items-center p-2 text-gray-400 rounded hover:bg-gray-700 hover:text-white" href="#">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm font-medium">Sign out</span>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
