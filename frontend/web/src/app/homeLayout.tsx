'use client';
import Link from "next/link";
import { Navbar, Container, Col, Nav, Row } from "react-bootstrap"
import style from "styled-jsx/style"
import useRouter from "./router";
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
	const router = useRouter()
	return (
		// Background color here is surfaceContainerLowest
		<Col style={{backgroundColor:"#F5F5F5", borderTopRightRadius:".5rem"}} xs={1} className='nav flex-column h-100'>
			<Nav.Link onClick={() => {router.push("home")}} style={{color:'black'}} className="">Link</Nav.Link>
			<Nav.Link onClick={() => {router.push("page2")}} style={{color:'black'}} active>Active</Nav.Link>
			<Nav.Link href="link-2" style={{color:'black'}}>Link</Nav.Link>
			<Nav.Link href="disabled" disabled style={{color:'grey'}}>
				Disabled
			</Nav.Link>
		</Col>
	)
}
