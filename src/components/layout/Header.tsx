import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
	return (
		<header>
			<nav>
				<div>
					<img src="/images/logo.png" alt="Logo" />
				</div>
				<div className="settings">
					<ul>
						<li>+</li>
						<li>
							<FaPizzaSlice />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
