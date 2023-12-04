import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import type { NextPage } from "next";
import { Button, Col, Container, Row, Card, Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <Container style={{flex:1, margin:0}}>
      <Row>
        <Navbar style={{backgroundColor: "transparent"}}>

        </Navbar>
      </Row>
      <Row>
        <Col style={{paddingLeft:0}} xxl={1}>
          <Nav defaultActiveKey="/home" className="flex-lg-column flex-shrink-1" navbar={true}>
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Col>
        <Col style={{backgroundColor:"#FFF8F4", paddingRight:0}} className='flex-grow-1' xxl={true}>
          <Container fluid={true}>
            <Row className='vh-100 flex-grow-1'>

            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )

}
