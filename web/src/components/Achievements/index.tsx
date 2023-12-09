import { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import FeedContentView, { IFeedItem } from "../Feed/FeedItem"
import Section from "../Section"

const feedData: IFeedItem[] = [
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

]

export default function Achievements(){

	return (
		<Section title="Achievements">
            <FeedContentView {...{feedData}}/>
        </Section>
	)
}
