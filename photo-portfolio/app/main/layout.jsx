import Nav from '@/components/Nav';
import ScrollToTopButton from '@components/ScrollToTopButton';

export default function MainLayout({children}) {
  return (
    <>
    <Nav />
    {children}
    <ScrollToTopButton />
    </>
  )
}
