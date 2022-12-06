import { FC } from 'react';
import { Card, CardHeader, Grid } from '@mui/material';

type Props = {
	title: string;
	children: React.ReactNode;
};
const CardJira: FC<Props> = ({ children, title }) => {
	return (
		<Grid item xs={12} sm={4}>
			<Card sx={{ height: 'calc(100vh - 100px)' }}>
				<CardHeader title={title} />
				{children}
			</Card>
		</Grid>
	);
};

export default CardJira;
