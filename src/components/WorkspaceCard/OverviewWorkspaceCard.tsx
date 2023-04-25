import * as React from 'react';
import { Button, Carousel, Col, Image, Rate, Row, Space } from 'antd';
import { type IWorkspace } from '../../types';
import Typography from 'antd/es/typography';
import { AimOutlined } from '@ant-design/icons';
import { useWorkspaceCard } from './hooks/useWorkspaceCard';

interface Props {
	workspace: IWorkspace;
	vertical?: boolean;
}

const OverviewWorkspaceCard: React.FC<Props> = ({ workspace, vertical }) => {
	const { isVertical, navigateToWorkspacePage } = useWorkspaceCard(workspace.id, vertical);

	return (
		<Row gutter={[24, 16]} align={'stretch'}>
			<Col span={isVertical ? 24 : 12}>
				<Carousel autoplay>
					{workspace.images.map((image) => <Image key={ image } src={ image }/>)}
				</Carousel>
			</Col>
			<Col span={isVertical ? 24 : 12}>
				<Space direction={'vertical'} size={'middle'}>
					<Row align={'top'} justify={'space-between'}>
						<Col>
							<Typography.Title
								style={{ margin: 0 }}
								level={4}
							>{workspace.title}
							</Typography.Title>
						</Col>
						<Col>
							<Row>
								<Rate allowHalf defaultValue={workspace.rating} disabled></Rate>
							</Row>
							<Row justify={'end'}>
								<Typography.Text type="secondary">
									{`${workspace.feedback_count as number} отзывов`}
								</Typography.Text>
							</Row>
						</Col>
					</Row>
					<Row>
						<Typography.Paragraph ellipsis={{ rows: 2 }}>
							{workspace.description}
						</Typography.Paragraph>
					</Row>
					<Row gutter={8}>
						<Col span={24}>
							<Space>
								<AimOutlined />
								<Typography.Text>
									{workspace.address.value}
								</Typography.Text>
							</Space>
						</Col>
						{/* <Col span={24}> */}
						{/*	<Row gutter={12}> */}
						{/*		<Col> */}
						{/*			<AimOutlined /> */}
						{/*		</Col> */}
						{/*		<Col> */}
						{/*			<Typography.Text> */}
						{/*				Чкаловская */}
						{/*			</Typography.Text> */}
						{/*		</Col> */}
						{/*	</Row> */}
						{/* </Col> */}
					</Row>
					<Row>
						<Col flex={'auto'}>
							<Button style={{ width: '100%' }} type={'primary'} onClick={navigateToWorkspacePage}>
									Забронировать
							</Button>
						</Col>
					</Row>
				</Space>
			</Col>
		</Row>
	);
};

export default React.memo(OverviewWorkspaceCard);