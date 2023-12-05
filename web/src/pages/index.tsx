import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import type { NextPage } from "next";
import { Button, Col, Container, Row, Card, Navbar, Nav, ButtonGroup } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid={true} className='d-flex flex-column vh-100'>
      <TopBar/>
        <Row className='h-100'>
          <Col style={{paddingLeft:0}} xxl={1}>
            <SideBar/>
          </Col>
          <Col style={{backgroundColor:"#FFF8F4"}} xxl={true}>
            <Body/>
          </Col>
        </Row>
    </Container>
  )

}


const TopBar = () => {
  return(
    <Navbar>
      <Container>
        <Navbar.Brand style={{backgroundColor: "white"}}>Casa Grecque Icon</Navbar.Brand>
        <ButtonGroup>
        </ButtonGroup>
      </Container>
    </Navbar>
  )
}


const SideBar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-lg-column flex-shrink-1" navbar={true}>
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  )
}


const Body = () => {
  return (
    <Container fluid={true} style={{backgroundColor:"#FCF2EA"}}>
    </Container>
  )
}
