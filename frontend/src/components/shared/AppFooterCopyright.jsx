import { FaGithub } from 'react-icons/fa';

function AppFooterCopyright() {
    return (
        <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-center space-y-2 md:space-y-0 md:space-x-4">
                <span className="text-lg text-gray-700 dark:text-gray-300">
                    &copy; {new Date().getFullYear()} Joshua Nzuzi
                </span>
                <a
                    href="https://github.com/Joshua-Nzuzi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                    <FaGithub className="mr-2" />
                    GitHub
                </a>
            </div>
        </footer>
    );
}

export default AppFooterCopyright;
