import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import type { NextPage } from "next";
import { Button, Col, Container, Row, Card, Navbar, Nav, ButtonGroup } from "react-bootstrap";

export default function Home() {
	return (
		<Container fluid={true} className='d-flex flex-column vh-100'>
			<TopBar/>
			<Row className='h-100'>
					<SideBar/>
					<Body/>
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
		<Col style={{backgroundColor:"#FFFAFA", borderTopRightRadius:".5rem"}} xs={1} className='nav flex-column'>
			<Nav.Link href="/home">Active</Nav.Link>
			<Nav.Link eventKey="link-1">Link</Nav.Link>
			<Nav.Link eventKey="link-2">Link</Nav.Link>
			<Nav.Link eventKey="disabled" disabled>
				Disabled
			</Nav.Link>
		</Col>
	)
}
	
	
const Body = () => {
	return (
		<Col style={{backgroundColor:"transparent"}} className='h-100'>
			{/** Background color here is surfaceContainer */}
			<Container className='mb-3 h-100' style={{backgroundColor:"#F6ECE4", borderRadius:"1rem"}} fluid={true}>
				{/** Background color here is surfaceContainerHighest  */}
					<Row>

					</Row>
				</Container>
		</Col>
	)
}
