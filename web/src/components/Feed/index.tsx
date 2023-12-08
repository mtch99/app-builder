import { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import FeedContentView, { IFeedItem } from "./FeedItem";



export default function Feed(){
    const feedData: IFeedItem[] = [
        {
            title: "Denis Monet",
            body: "Salut Véronique!"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique! \u{1F601} asd"
        }
    ]
    return (
        <Container className="h-100 m-0" style={styles.container} fluid>
            <p className='fs-5 p-2 m-0' style={{fontWeight:"600"}}> Feed </p>
            <FeedContentView {...{feedData}}/>
        </Container>
    )
}



const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}