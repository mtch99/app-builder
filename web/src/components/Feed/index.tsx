import { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import FeedContentView, { IFeedItem } from "./FeedItem";
import Section from "../Section";
import feedData from "../../data/feed";





export default function Feed(){

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