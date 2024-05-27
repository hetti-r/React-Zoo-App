import { useState } from 'react'
import './App.css'
import { animals, birds, insects, fishes } from './animalsList'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CategoryPage from './routes/CategoryPage'
import Home from './routes/Home'
import Root from './routes/Root'
import ErrorPage from './routes/ErrroPage'
import About from './routes/About'
import SinglePage from './routes/SinglePage';
import { useParams } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  const { category } = useParams();
  let bgImageUrl = 'https://source.unsplash.com/1200x1200/?forest';

  switch (category) {
    case 'animals':
      bgImageUrl = 'https://source.unsplash.com/1200x1200/?forest';
      break;
    case 'birds':
      bgImageUrl = 'https://source.unsplash.com/1200x1200/?sky';
      break;
    case 'fishes':
      bgImageUrl = 'https://source.unsplash.com/1200x1200/?sea';
      break;
    case 'insects':
      bgImageUrl = 'https://source.unsplash.com/1200x1200/?ground';
      break;
    default:
      bgImageUrl = 'https://source.unsplash.com/1200x1200/?forest';
  }

  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const removeHandler = (name, category) => {
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter(el => el.name != name),
    }))
  }

  const likesHandler = (name, category, action) => {
    setZoo((prevZoo) => ({
      ...prevZoo, [category]: prevZoo[category].map(el => el.name === name ? { ...el, likes: el.likes + (action === 'add' ? 1 : -1) } : el) //el = element
    }))
  }

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    {
      path: '/',
      element: <Root bgImageUrl={bgImageUrl} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ':category',
          element: <CategoryPage
            addLikes={likesHandler}
            removeLikes={likesHandler}
            removeCard={removeHandler}
            {...zoo}
          />
        },
        { path: ':category/:name', element: <SinglePage {...zoo} /> },
        { path: ':category', element: <Header bgImageUrl={bgImageUrl} /> },
        { path: '/about', element: <About /> }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
