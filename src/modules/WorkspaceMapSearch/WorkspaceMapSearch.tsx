import * as React from 'react';
import { Clusterer, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { useCallback, useState } from 'react';
import WorkspaceDrawer from './components/WorkspaceDrawer';
import { workspaceMocks } from '../../mocks/workspaces';

const center = [56.836927, 60.599308]; // TODO: центр Еката, надо получать координаты пользователя

const WorkspaceMapSearch: React.FC = () => {
	const [open, setOpen] = useState(false);
	const showDrawer = useCallback(() => setOpen(true), []);
	const closeDrawer = useCallback(() => setOpen(false), []);

	const [currentWorkspaceId, setCurrentWorkspaceId] = useState<string | undefined>(undefined);

	const openWorkspaceInfo = (workspaceId: string) => {
		setCurrentWorkspaceId(workspaceId);
		showDrawer();
	};

	return (
		<>
			<Map
				state={{
					center,
					zoom: 9,
					controls: [],
				}}
				height="80vh"
				width={'100%'}
			>
				<Clusterer>
					{workspaceMocks.map(ws => {
						return <Placemark
							key={ws.id}
							geometry={[ws.latitude, ws.longitude]}
							onClick={() => openWorkspaceInfo(ws.id)}
						/>;
					})}
				</Clusterer>
				<ZoomControl/>
			</Map>
			<WorkspaceDrawer workspaceId={currentWorkspaceId} open={open} onClose={closeDrawer} />
		</>
	);
};

export default React.memo(WorkspaceMapSearch);
