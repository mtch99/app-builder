import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";


export type Props = {
    title: string;
    content?: React.ReactNode
}


export default function Section({title, content}: Props){
    return (
        <Container className="h-100 m-0" style={styles.container} fluid>
            <p className='fs-5 p-3' style={{fontWeight:"600"}}> {title} </p>
            {content}
        </Container>
    )
}


const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}