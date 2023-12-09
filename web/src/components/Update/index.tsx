import feedData from "../../data/feed"
import FeedContentView, { IFeedItem } from "../Feed/FeedItem"
import Section from "../Section"


export default function UpdateSection () {
    return (
        <Section title="Updates">
            <UpdateSectionContent/>
        </Section>
    )
}


function UpdateSectionContent(){
    return (
        <FeedContentView {...{feedData}}/>
    )
}