import { useRoutes } from 'react-router-dom';
import { Products } from '../pages/Products';
import ProductItem from '../pages/ProductItem';

function AppRouter() {

    let publicRoute = useRoutes([
        { path: "/", element: <Products/> },
        { path: "/products/:id", element: <ProductItem/> },
    ]);
  
  return (
    publicRoute
  )
}

export default AppRouter