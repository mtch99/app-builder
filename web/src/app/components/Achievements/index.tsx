import { CSSProperties } from "react"
import { Container } from "react-bootstrap"

export default function Achievements(){
	return (
		<Container style={styles.container} fluid className='h-100'>
            <p className='fs-5 p-3' style={{fontWeight:"600"}}> Accomplissements </p>
        </Container>
	)
}

const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}
