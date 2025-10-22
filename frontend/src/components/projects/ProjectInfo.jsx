import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectsContext } from '../../context/ProjectsContext';
import { motion } from 'framer-motion';

const ProjectInfo = () => {
    const { slug } = useParams();
    const { projects } = useContext(ProjectsContext);

    const project = projects.find((p) => p.slug === slug);
    console.log('Loaded project:', project);

    if (!project || !project.ProjectInfo) return <p>Projet introuvable</p>;

    const { ProjectInfo } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-14 px-4 sm:px-0"
        >
            <div className="block sm:flex gap-0 sm:gap-10">
                {/* Left Column */}
                <div className="w-full sm:w-1/3 text-left">
                    {/* Client Info */}
                    <div className="mb-7">
                        <p className="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                            {ProjectInfo.ClientHeading}
                        </p>
                        <ul className="leading-loose">
                            {ProjectInfo.CompanyInfo.map((info) => (
                                <li
                                    className="text-ternary-dark dark:text-ternary-light"
                                    key={info.id}
                                >
                                    <span>{info.title}: </span>
                                    <a
                                        href={info.details}
                                        className={
                                            info.title === 'Website' || info.title === 'Phone'
                                                ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                                                : ''
                                        }
                                        aria-label={`Project ${info.title}`}
                                    >
                                        {info.details}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Objectives */}
                    <div className="mb-7">
                        <p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {ProjectInfo.ObjectivesHeading}
                        </p>
                        <p className="text-primary-dark dark:text-ternary-light">
                            {ProjectInfo.ObjectivesDetails}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-7">
                        <p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {ProjectInfo.Technologies[0].title}
                        </p>
                        <p className="text-primary-dark dark:text-ternary-light">
                            {ProjectInfo.Technologies[0].techs.join(', ')}
                        </p>
                    </div>

                    {/* Live Site Button */}
                    <div className="mt-8">
  <a
    href={ProjectInfo.LiveSiteLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
    aria-label="View Live Site Button"
  >
    View Live Site
  </a>
</div>


                </div>

                {/* Right Column */}
                <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {ProjectInfo.ProjectDetailsHeading}
                    </p>
                    {ProjectInfo.ProjectDetails.map((details) => (
                        <motion.p
                            key={details.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: details.id * 0.1 }}
                            className="mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                        >
                            {details.details}
                        </motion.p>
                    ))}

                    {/* Screenshots */}
                    <div className="mt-10">
                        <p className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4">
                            Screenshots
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {ProjectInfo.ProjectImages.map((img) => (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        src={img.img}
                                        alt={img.title}
                                        className="w-full h-auto object-cover"
                                    />
                                    <p className="mt-2 text-sm text-center text-ternary-dark dark:text-ternary-light">
                                        {img.title}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectInfo;
