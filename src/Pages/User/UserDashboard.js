import React from 'react'
import './UserStyle.css'

const UserDashboard = () => {
  return (
    <>
    
    <div className='main'>
        
        {/* Sidebar  */}
<aside className="fixed md:block hidden top-0 left-0 w-36 h-full bg-gray-800 p-4 flex flex-col justify-between sidebar">

	<img style={{width:'10%',borderRadius: '100px', marginTop:'20px', marginLeft:'20px'}} src="https://avatars.githubusercontent.com/u/492000?v=4" alt="Profile" className="rounded-full w-20 mb-4 mx-auto"/>
	<h2 className="text-sm font-bold text-center" style={{marginLeft:'20px'}}>Pete Benoit</h2>
	<nav className="mt-4">
    <ul>
        <li className="flex items-center p-2 nav-hover rounded-md"><span className="text-sm"><a href='/profile' >Profile</a></span></li>
        <li className="flex items-center p-2 nav-hover rounded-md"><span className="text-sm"><a href='/discover' >Discover</a></span></li>
    </ul>
</nav>

	{/* Settings and Logout Links */}
	<div className="mt-auto space-y-2">
		<ul>
			<li className="flex items-center p-2 nav-hover rounded-md"><span className="text-sm"><a href='/settings' >Settings</a></span></li>
			<li className="flex items-center p-2 nav-hover rounded-md"><span className="text-sm"><a href='/accueil'> Logout</a></span></li>
		</ul>
	</div>
</aside>

 {/* Main Content */}
<div className="md:ml-36 flex-grow flex flex-col md:flex-row main-content min-h-screen">

	{/* Center Section for Events */}
	<div>

		{/* Events Section */}
		
			<div className="flex justify-center mb-4">
			<img style={{width:'100%'}} src="https://assets.codepen.io/252820/party.webp" alt="party" className="w-2/3" />
			</div>
			<h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
			<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				
        {/* Event Card 1 */}
				<div className="event-card p-4 rounded-lg shadow-md relative fancyborder">
					<div className="relative">
						<img style={{width:'40%'}} src="https://assets.codepen.io/252820/stars.webp" alt="Acoustic Serenade Under the Stars" className="rounded-lg"/>
						<div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
							March 19, 8:00 PM
						</div>
					</div>
					<div className="mt-4">
						<h3 className="text-white text-lg font-bold">Acoustic Serenade Under the Stars</h3>
						<p className="text-gray-400 mb-4">Skyline <span className="text-white">Amphitheater</span></p>
						<div className="flex justify-between items-center">
							<span className="bg-yellow-500 text-xs px-2 py-1 rounded-full text-black">Concert</span>
							<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-full flex items-center">
								Reservez vos tickets
								<i className="bx bx-share-alt ml-2"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
</div>
</>

  )
}

export default UserDashboard