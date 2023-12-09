import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";


export type Props = {
    title: string;
    children?: React.ReactNode
}


export default function Section({title, children}: Props){
    return (
        <Container className="h-100 m-0 overflow-auto" style={styles.container} fluid>
            <p className='fs-5 p-2 m-0' style={{fontWeight:"600"}}> {title} </p>
            {children}
        </Container>
    )
}


const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}