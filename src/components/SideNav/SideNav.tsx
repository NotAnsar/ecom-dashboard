import {
	RxDashboard,
	RxPerson,
	RxStack,
	RxArchive,
	RxFileText,
	RxExit,
} from 'react-icons/rx';
import { Link, Outlet } from 'react-router-dom';

const liStyle =
	'pl-3 pr-7 py-2 flex gap-4 items-center  hover:bg-[#242424] cursor-pointer rounded';
function SideNav() {
	return (
		<>
			<div className='h-screen pl-8 text-white w-fit pr-8 bg-[#141414] fixed ease-in -translate-x-full duration-300 sm:translate-x-0'>
				<aside className='flex flex-col	h-full '>
					<div className='mb-6 flex items-center gap-4 '>
						<h1 className='text-3xl cursor-pointer font-medium py-5 pl-3 flex '>
							E-Com
						</h1>
					</div>
					<nav className='h-full '>
						<ul className='grid gap-1'>
							<Link to='/' className={liStyle}>
								<RxDashboard />
								<p>Dashboard</p>
							</Link>

							<Link to='users' className={liStyle}>
								<RxPerson />
								<p>Users</p>
							</Link>
							<Link to='products' className={liStyle}>
								<RxArchive />
								<p>Products</p>
							</Link>
							<Link to='orders' className={liStyle}>
								<RxFileText />
								<p>Orders</p>
							</Link>

							<Link to='brands' className={liStyle}>
								<RxStack />
								<p>Brands</p>
							</Link>
							<Link to='categories' className={liStyle}>
								<RxStack />
								<p>Categories</p>
							</Link>
						</ul>
					</nav>

					<div className='border-t border-white border-solid'>
						<Link
							to='/login'
							className='mb-8 flex py-2 justify-center cursor-pointer items-center gap-2 hover:bg-red-900 rounded mt-12'
						>
							<RxExit />
							<p>Log Out</p>
						</Link>
					</div>
				</aside>
			</div>
			<div className='ml-0 sm:ml-60  p-4 duration-300'>
				<Outlet />
			</div>
			;
		</>
	);
}

export default SideNav;
