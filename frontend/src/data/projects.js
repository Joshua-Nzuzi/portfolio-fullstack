// Import images
import WebImage2 from '../images/Twitter-Clone.png';
import WebImage2b from '../images/twitter-ui-project.png';
import AlikinImage1 from '../images/Alikin.png';
import AlikinImage2 from '../images/Alikin-project.png';
import MakEnergyImage from '../images/Mak-Energy.png';

export const projectsData = [
    {
        id: 1,
        title: 'Twitter Clone UI',
        category: 'Web Application',
        img: WebImage2,
        slug: 'twitter-clone-ui',
        ProjectInfo: {
            ClientHeading: 'About Client',
            CompanyInfo: [
                { id: 1, title: 'Name', details: 'Twitter Clone Inc.' },
                { id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
                { id: 3, title: 'Website', details: 'https://joshua-tweter-882a65fq9-joshua-nzuzis-projects.vercel.app/' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Replicate the core layout and features of Twitter using React and Tailwind CSS. Includes tweet feeds, profiles, likes, and comments — all built with dummy data.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: ['HTML', 'CSS', 'JavaScript', 'React Router', 'TailwindCSS', 'FontAwesome', 'Vite'],
                },
            ],
            ProjectDetailsHeading: 'Challenges',
            ProjectDetails: [
                { id: 1, details: 'Replicating Twitter’s UI while maintaining responsiveness across devices.' },
                { id: 2, details: 'Designing reusable components for consistent UX.' },
                { id: 3, details: 'Simulating dynamic interactions with static data.' },
                { id: 4, details: 'Keeping the codebase clean and scalable.' },
            ],
            ProjectImages: [
                { id: 1, title: 'Login & Feed', img: WebImage2 },
                { id: 2, title: 'Tweet Layout', img: WebImage2b },
            ],
            LiveSiteLink: 'https://joshua-tweter-882a65fq9-joshua-nzuzis-projects.vercel.app/',
        },
    },
    {
        id: 2,
        title: 'Alikin Marketplace UI',
        category: 'Web Application',
        img: AlikinImage1,
        slug: 'alikin-marketplace-ui',
        ProjectInfo: {
            ClientHeading: 'Client Overview',
            CompanyInfo: [
                { id: 1, title: 'Name', details: 'Alikin Marketplace' },
                { id: 2, title: 'Services', details: 'E-commerce SaaS Platform' },
                { id: 3, title: 'Website', details: 'https://alikin-marketplace-fullstack.vercel.app/' },
            ],
            ObjectivesHeading: 'Project Objective',
            ObjectivesDetails:
                'Build a scalable, mobile-first e-commerce platform tailored for Kinshasa. Phase 1 focuses on core SaaS functionality including multi-vendor shopping, Mobile Money integration, and real-time order tracking.',
            Technologies: [
                {
                    title: 'Technology Stack',
                    techs: [
                        'React 18',
                        'Vite',
                        'Tailwind CSS',
                        'React Router v6',
                        'Google Maps API',
                        'Lucide React',
                        'React Context',
                    ],
                },
            ],
            ProjectDetailsHeading: 'Development Highlights',
            ProjectDetails: [
                { id: 1, details: '✅ 6 of 8 principal screens completed: Landing, Auth, Product Discovery, Cart, Vendor Dashboard, Order Tracking.' },
                { id: 2, details: '❌ Remaining: Admin Dashboard and Vendor Onboarding.' },
                { id: 3, details: '🔧 Phase 2 includes Product Management, Delivery Dashboard, and Support Center.' },
                { id: 4, details: '🚀 Phase 3 will introduce BI dashboards, loyalty programs, and financial analytics.' },
            ],
            ProjectImages: [
                { id: 1, title: 'Landing Page', img: AlikinImage1 },
                { id: 2, title: 'Checkout Flow', img: AlikinImage2 },
            ],
            LiveSiteLink: 'https://alikin-marketplace-fullstack.vercel.app/',
        },
    },
    {
  id: 3,
  title: 'Mak Energy Website',
  category: 'Corporate Website',
  img: MakEnergyImage,
  slug: 'mak-energy-website',
  ProjectInfo: {
    ClientHeading: 'Client Overview',
    CompanyInfo: [
      { id: 1, title: 'Name', details: 'Mak Energy' },
      { id: 2, title: 'Services', details: 'Électricité, froid, climatisation, énergie solaire' },
      { id: 3, title: 'Website', details: 'https://comforting-genie-a4dbdb.netlify.app/' },
    ],
    ObjectivesHeading: 'Project Objective',
    ObjectivesDetails:
      'Créer une vitrine professionnelle pour Mak Energy, mettant en valeur ses services en électricité, climatisation, froid industriel et énergie solaire, avec un design clair, responsive et orienté client.',
    Technologies: [
      {
        title: 'Technology Stack',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
      },
    ],
    ProjectDetailsHeading: 'Development Highlights',
    ProjectDetails: [
      { id: 1, details: 'Design épuré et responsive adapté aux besoins d’un prestataire énergétique.' },
      { id: 2, details: 'Mise en avant des services clés avec une navigation fluide.' },
      { id: 3, details: 'Optimisation pour Netlify avec déploiement rapide et sécurisé.' },
      { id: 4, details: 'Structure modulaire pour faciliter les futures évolutions.' },
    ],
    ProjectImages: [
      { id: 1, title: 'Hero Section', img: MakEnergyImage },
    ],
    LiveSiteLink: 'https://comforting-genie-a4dbdb.netlify.app/',
  },
},
];
