const AboutClientSingle = ({ title, image }) => {
  return (
    <div
      className="
        w-full max-w-[8rem] h-24
        flex items-center justify-center
        py-4 px-6
        border bg-secondary-light border-ternary-light dark:border-ternary-dark
        shadow-sm rounded-lg mb-6 cursor-pointer
        sm:max-w-[6rem] sm:h-20
      "
      style={{ minWidth: '6rem', minHeight: '6rem' }}
    >
      <img
        src={image}
        alt={title}
        className="max-w-full max-h-full object-contain"
        style={{ maxWidth: '6rem', maxHeight: '4rem' }}
      />
    </div>
  );
};

export default AboutClientSingle;
