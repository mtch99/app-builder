import { Container } from "react-bootstrap";
import { CSSProperties } from "react";

export default function Calendar(){
    return (
        <Container className="h-100 m-0 overflow-auto" style={styles.container} fluid>
            <p className='fs-5 p-3' style={{fontWeight:"600"}}> Calendrier des activités </p>
        </Container>
    )
}


const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}