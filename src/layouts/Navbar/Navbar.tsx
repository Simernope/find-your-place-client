import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Navbar: React.FC = () => {
	return (
		<div>
			Навигационная панель
			<Outlet />
		</div>
	);
};

export default Navbar;
