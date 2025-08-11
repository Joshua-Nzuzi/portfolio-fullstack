// Import images
import Image1 from '../images/twitter-ui-project.png';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
	FiGithub,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2025',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Twitter Clone UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Twitter Clone Inc.',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://joshua-tweter-882a65fq9-joshua-nzuzis-projects.vercel.app/',
			},
			{
				id: 4,
				title: 'Phone',
				details: '+243 85 484 6249',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'The goal of this project was to replicate the core layout and functionalities of Twitter using React and Tailwind CSS. It simulates features such as user profiles, tweet feeds, likes, retweets, and comments — all built with dummy data. The application emphasizes component-based architecture, state management, and a fully responsive design to ensure consistent UX across all screen sizes.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'React Router',
					'TailwindCSS',
					'FontAwesome',
					'Vite',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'One of the main challenges was accurately replicating Twitter user interface while maintaining responsiveness across all device sizes.',
			},
			{
				id: 2,
				details:
					'Designing reusable and responsive components required careful planning to ensure a consistent user experience on mobile, tablet, and desktop.',
			},
			{
				id: 3,
				details:
					'Another challenge involved simulating dynamic interactions such as likes, retweets, and comments using only static dummy data, which demanded effective state management to mimic real user behavior.',
			},
			{
				id: 4,
				details:
					'Additionally, organizing the codebase to remain clean, scalable, and maintainable as the project grew was an essential part of the development process.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://x.com/JoshuaNzuzi',
				
			
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiGithub />,
				url: 'https://github.com/Joshua-Nzuzi',
				
				
			},
			{
				
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/joshua-mavinga-370a7721a/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
