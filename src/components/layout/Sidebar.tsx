import React from "react";

import {
	FaChevronDown,
	FaInbox,
	FaRegCalendarAlt,
	FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => (
	<div className="fixed pt-16 w-64 h-screen select-none overflow-hidden border-r border-gray-200 bg-gray-100 lg:hidden">
		<ul className="flex flex-col p-2 pr-0 list-none text-base text-gray-800 cursor-pointer">
			<li className="flex flex-row pl-3 pr-4 pb-3 leading-6">
				<span>
					<FaInbox className="mr-4 w-5 h-5 text-gray-700" />
				</span>
				<span>Inbox</span>
			</li>
			<li className="flex flex-row pl-3 pr-4 pb-3 leading-6">
				<span>
					<FaRegCalendar className="mr-4 w-5 h-5 text-gray-700" />
				</span>
				<span>Today</span>
			</li>
			<li className="flex flex-row pl-3 pr-4 pb-3 leading-6">
				<span>
					<FaRegCalendarAlt className="mr-4 w-5 h-5 text-gray-700" />
				</span>
				<span>Next 7 Days</span>
			</li>
		</ul>
		{/* "Middle" */}
		<div className="flex my-3 pb-4 pl-3 cursor-pointer border-b border-gray-200">
			<span className="self-center mr-3 text-black">
				<FaChevronDown />
			</span>
			<h2 className="m-0 text-gray-800 text-base font-medium">Projects</h2>
		</div>

		<ul className="pl-1">Projects will be here</ul>
	</div>
);
