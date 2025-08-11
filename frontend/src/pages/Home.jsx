import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import ScrollButton from '../components/ScrollButton'; // ✅ 1. import

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner />

			<ProjectsProvider>
				<ProjectsGrid />
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>

			<ScrollButton /> {/* ✅ 2. ajout ici */}
		</div>
	);
};

export default Home;
