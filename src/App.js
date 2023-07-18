import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotels/Hotel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/hotels',
    element: <List />,
  },

  {
    path: '/hotels/:id',
    element: <Hotel />,
  },
]);

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/hotels" element={<List />} />
    //     <Route path="/hotels/:id" element={<Hotel />} />
    //   </Routes>
    // </BrowserRouter>

    <RouterProvider router={router} />
  );
}

export default App;
