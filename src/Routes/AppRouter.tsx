import { useRoutes } from 'react-router-dom';
import { Products } from '../pages/Products';
import ProductItem from '../pages/ProductItem';
import { Cart } from '../pages/Saved';

function AppRouter() {

    let publicRoute = useRoutes([
        { path: "/", element: <Products/> },
        { path: "/products/:id", element: <ProductItem/> },
        { path: "/saved", element: <Cart/> },
    ]);
  
  return (
    publicRoute
  )
}

export default AppRouter