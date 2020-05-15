import React from "react";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
	return (
		<header className="border-b border-red-900 bg-red-600 h-10 z-50 fixed top-0 w-full shadow">
			<nav className="grid items-center grid-cols-2 grid-rows-1 gap-0 max-w m-auto h-10 w-922">
				<div className="pl-2 col-start-1 row-start-1">
					<img src="/images/logo.png" alt="Logo" className="w-6" />
				</div>
				<div className="row-start-1 col-start-2 text-right">
					<ul className="float-right">
						<li className="text-white text-3xl flex float-left justify-center items-center text-center align-middle cursor-pointer w-8 h-8 mr-4 list-none hover-radius hover:bg-opacity-25 hover:bg-white">
							+
						</li>
						<li className="text-white flex float-left justify-center items-center text-center align-middle cursor-pointer w-8 h-8 list-none hover-radius hover:bg-opacity-25 hover:bg-white">
							<FaMoon className="w-6 h-6" />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
