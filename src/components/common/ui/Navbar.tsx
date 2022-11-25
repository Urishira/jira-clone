import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerStore } from '../../../store/useDrawerStore';

const Navbar = () => {
	const { setOpen } = useDrawerStore();
	const handleClick = () => {
		setOpen();
	};
	return (
		<AppBar position='sticky' elevation={0}>
			<Toolbar>
				<IconButton aria-label='' onClick={handleClick}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
