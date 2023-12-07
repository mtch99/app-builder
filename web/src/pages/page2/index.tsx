import { Col, Container, Row } from "react-bootstrap"

const Body = () => {
	return (
		<Col style={{backgroundColor:"transparent"}} className='h-100'>
			{/** Background color here is surfaceContainer */}
			<Container className='mb-3 h-100' style={{backgroundColor:"white", borderRadius:"1rem"}} fluid={true}>
				{/** Background color here is surfaceContainerHighest  */}
					<Row>

					</Row>
				</Container>
		</Col>
	)
}


export default Body;