import {
	RxDashboard,
	RxPerson,
	RxStack,
	RxArchive,
	RxFileText,
	RxExit,
} from 'react-icons/rx';

const liStyle =
	'pl-3 pr-7 py-2 flex gap-4 items-center  hover:bg-[#242424] cursor-pointer rounded';
function SideNav() {
	return (
		<div className='h-screen  pl-8 text-white w-fit pr-8 bg-[#141414] '>
			<aside className='flex flex-col	h-full '>
				<div className='mb-6 flex items-center gap-4 '>
					<h1 className='text-3xl cursor-pointer font-medium py-5 pl-3 flex '>
						E-Com
					</h1>
				</div>
				<nav className='h-full '>
					<ul className='grid gap-1'>
						<li className={liStyle}>
							<RxDashboard />
							<p>Dashboard</p>
						</li>
						<li className={liStyle}>
							<RxPerson />
							<p>Users</p>
						</li>
						<li className={liStyle}>
							<RxArchive />
							<p>Products</p>
						</li>
						<li className={liStyle}>
							<RxFileText />
							<p>Orders</p>
						</li>

						<li className={liStyle}>
							<RxStack />
							<p>Brands</p>
						</li>
						<li className={liStyle}>
							<RxStack />
							<p>Categories</p>
						</li>
					</ul>
				</nav>

				<div className='border-t border-white border-solid'>
					<div className='mb-8 flex py-3 justify-center cursor-pointer items-center gap-2 hover:bg-red-900 rounded mt-12'>
						<RxExit />
						<p>Log Out</p>
					</div>
				</div>
			</aside>
		</div>
	);
}

export default SideNav;
