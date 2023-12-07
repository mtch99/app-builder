import { Button, Col, Container, Row, Card, Navbar, Nav, ButtonGroup } from "react-bootstrap";
import Calendar from './components/Calendar';
import { CSSProperties } from 'react';
import Achievements from "./components/Achievements";


export default function Home() {
  return (
    <Body>
		<BodyContent/>
	</Body>
  )
}


const Body = ({children} : {children: React.ReactNode}) => {
	return (
		<Col style={{backgroundColor:"transparent"}}>
			{/** Background color here is surfaceContainer */}
			<Container className='mb-3 h-100 p-4' style={{backgroundColor:"#F6ECE4", borderRadius:"1rem"}} fluid={true}>
				{/** Background color here is surfaceContainerHighest  */}
				{children}
			</Container>
		</Col>
	)
}


const BodyContent = () => {
	return(
		<Row className='h-50'>
			<Col className='h-100' style={{flex:3}}>
				<Calendar/>
			</Col>
			<Col className='h-100' style={{flex: 1}}>
				<Achievements/>
			</Col>
		</Row>
	)
}