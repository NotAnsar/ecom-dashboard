import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Products/Products';
import Users from './components/Users/Users';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders';
import Brands from './components/Brands/Brands';
import SideNav from './components/SideNav/SideNav';
import Login from './components/Login/Login';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<SideNav />}>
					<Route index element={<Dashboard />} />
					<Route path='products' element={<Products />} />
					<Route path='users' element={<Users />} />
					<Route path='categories' element={<Categories />} />
					<Route path='orders' element={<Orders />} />
					<Route path='brands' element={<Brands />} />
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
