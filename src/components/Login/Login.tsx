import DashboardSvg from '../../assets/undraw_web_shopping_re_owap.svg';
const Login = () => {
	return (
		<div className='w-full grid grid-cols-1 h-screen text-white sm:grid-cols-7'>
			<div className='bg-[#141414] col-span-4  items-center justify-center hidden sm:flex'>
				<img src={DashboardSvg} className='sm:w-11/12 h-5/6' alt='Your SVG' />
			</div>
			<div className='col-span-3 bg-[#191919] grid items-center'>
				<div className='mx-auto w-5/6 my-4'>
					<h1 className='text-white text-4xl mb-3'>Sign In</h1>
					<p className='text-[#bbb] mb-4'>Lorem ipsum dolor sit amet.</p>
					<form className='flex flex-col 	'>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='block mb-2 text-sm font-medium text-white'
							>
								Email address
							</label>
							<input
								type='email'
								id='email'
								className='bg-[#242424] bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border-solid focus:border block w-full p-2.5 '
								placeholder='john.doe@company.com'
								required
							/>
							{/* <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
								<span className='font-medium'>Well done!</span> Some success
								message.
							</p> */}
							{/* <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
								<span className='font-medium'>Oh, snapp!</span> Some error
								message.
							</p> */}
						</div>
						<div className='mb-6'>
							<label
								htmlFor='password'
								className='block mb-2 text-sm font-medium  text-white'
							>
								Password
							</label>
							<input
								type='password'
								id='password'
								className='bg-[#242424] bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								placeholder='•••••••••'
								required
							/>
						</div>
						<span className='text-blue-500 hover:text-blue-600 text-sm pb-3 cursor-pointer'>
							Forgot your password?
						</span>
						<button
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
