import React, {useState} from 'react';
import logo from '../assets/Subtract.png';
import '../App.css';

const navigation = [
    {name: 'Home', href: '#', current: true},
    {name: 'About', href: '#', current: false},
    {name: 'About', href: '#', current: false}
]

const Navbar = (props) => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        const current = toggle;
        setToggle(!current);
    }

	// can add path directly to here example about page 
    const navigation = [
        {id: 1, name: 'Article', href: '#', current: true},
        {id: 2, name: 'Favorites', href: '#', current: false}
      ];

	console.log(props);

    return (
        <nav className="bg-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/*  Website Logo  */}
							<a href="#" className="flex items-center py-4 px-2">
								<img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
								<span className="font-bold text-blue-500 text-lg">andkit.</span>
							</a>
						</div>
						 {/* Primary Navbar items  */}
						<div className="hidden md:flex items-center space-x-1">
                            {navigation.map((item, i) => (
							    <a key={i} href={item.href} className="py-4 px-2 text-gray font-semibold ">{item.name}</a>
                            ))}
						</div>
					</div>
					 {/* Secondary Navbar items */}
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-700 rounded hover:text-blue transition duration-300 loginText" onClick={(e) => props.show(e,true) }>Login</a>
					</div>
					 {/* Mobile menu button  */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={toggleMenu}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-blue-700"
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			 {/* mobile menu */}
			<div className={toggle ? 'visible' : 'hidden'}>
				<ul className="text-center">
                    {navigation.map((item, i) => (
					    <li key={i} className={item.current !== true ? 'active' : "inactive"}><a href={item.href} className="block text-sm px-2 py-4 font-semibold">{item.name}</a></li>
                    ))}
				</ul>
			</div>
		</nav>
    )
}

export default Navbar;