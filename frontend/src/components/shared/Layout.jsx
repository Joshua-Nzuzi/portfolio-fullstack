import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Layout = ({ children }) => {
  const headerHeight = 80; // px, à ajuster selon la taille réelle du header

  return (
    <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
      <AppHeader fixed />
      <main className="pt-[80px] sm:pt-[100px] pb-10 px-4 sm:px-8" style={{ paddingTop: `calc(80px + ${headerHeight}px)` }}>
        {children}
      </main>
      <AppFooter />
    </div>
  );
};

export default Layout;
