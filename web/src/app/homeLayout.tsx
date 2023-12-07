'use client';
import { Navbar, Container, Col, Nav, Row } from "react-bootstrap"
import style from "styled-jsx/style"

interface ILayoutProps {
	children: React.ReactNode
}

export default function HomeLayout({ children }: ILayoutProps){
	return (
		<Container fluid={true} className='d-flex flex-column vh-100'>
			<TopBar/>
			<Row className='h-100'>
				<SideBar/>
				{children}
			</Row>
		</Container>
	)
		
}

const TopBar = () => {
	return(
		<Navbar>
			<Container className='m-0'>
				<Navbar.Brand>Casa Grecque Icon</Navbar.Brand>
			</Container>
		</Navbar>
	)
}
		
		
const SideBar = () => {
	return (
		// Background color here is surfaceContainerLowest
		<Col style={{backgroundColor:"#FFFAFA", borderTopRightRadius:".5rem"}} xs={1} className='nav flex-column h-100'>
			<Nav.Link href="/home">Active</Nav.Link>
			<Nav.Link eventKey="link-1">Link</Nav.Link>
			<Nav.Link eventKey="link-2">Link</Nav.Link>
			<Nav.Link eventKey="disabled" disabled>
				Disabled
			</Nav.Link>
		</Col>
	)
}
