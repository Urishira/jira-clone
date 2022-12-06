import { Card, CardHeader, Grid, Typography } from '@mui/material';
import { CardJira } from '../components/common';

import Layout from '../components/layout/Layout';

export default function Home() {
	return (
		<div>
			<Layout title='jira-clone'>
				<Grid container spacing={2}>
					<CardJira title='In progress'>
						
					</CardJira>
				</Grid>
			</Layout>
		</div>
	);
}
