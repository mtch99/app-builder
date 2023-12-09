import { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import FeedContentView, { IFeedItem } from "./FeedItem";
import Section from "../Section";



export default function Feed(){
    const feedData: IFeedItem[] = [
        {
            title: "Denis Monet",
            body: "Salut Véronique!"
        },
        {
            title: "Denis Monet",
            body: "Le sondage est présentement en cours. Tel que discuté hier brièvement au téléphone, nous avons déjà presque 10 000 répondants \u{1F601}"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique!"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique! \u{1F601}"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique!"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique! \u{1F601}"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique!"
        },
        {
            title: "Denis Monet",
            body: "Salut Véronique! \u{1F601}"
        },

    ]
    return (
        <Section title="Feed">
            <FeedContentView {...{feedData}}/>
        </Section>
    )
}



const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}