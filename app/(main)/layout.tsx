import MainNav from '@/components/header/main-nav';
import Footer from '@/components/site-footer';
const navLinks = [
  {
    title: 'Features',
    href: '/#features',
    disabled: true,
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Documentation',
    href: '/docs',
  },
];
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed left-0 right-0 top-0 z-40 border-b bg-background/60 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={navLinks} />
        </div>
      </header>
      <main className="flex flex-1 flex-col pt-20">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
