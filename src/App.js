import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './Components/Navigation/Navbar';
import Footer from './Components/Footer/Footer';
import Error404 from './Components/Error/Error404';
import GridBackground from './Components/UI/GridBackground';
import { ScrollProgress } from './Components/UI/Motion';

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

// One scrolling page. The old tab routes now jump to their sections.
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <Error404 />
      </Layout>
    ),
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/about', element: <Navigate to="/#about" replace /> },
      { path: '/projects', element: <Navigate to="/#experience" replace /> },
      { path: '/contact', element: <Navigate to="/#contact" replace /> },
      { path: '/resume', element: <Navigate to="/#experience" replace /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GridBackground />
      <ScrollProgress />
      <div className="app-content">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
