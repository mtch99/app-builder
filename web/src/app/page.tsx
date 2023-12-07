export default function Home() {
  return (
    <Body/>
  )
}

import Link from 'next/link'
import { Button, Col, Container, Row, Card, Navbar, Nav, ButtonGroup } from "react-bootstrap";


const Body = () => {
	return (
		<Col style={{backgroundColor:"transparent"}}>
			{/** Background color here is surfaceContainer */}
			<Container className='mb-3 h-100' style={{backgroundColor:"#F6ECE4", borderRadius:"1rem"}} fluid={true}>
				{/** Background color here is surfaceContainerHighest  */}
					<Row>
            
					</Row>
				</Container>
		</Col>
	)
}

