import { CSSProperties } from "react"
import { Container } from "react-bootstrap"
import FeedContentView, { IFeedItem } from "../Feed/FeedItem"
import Section from "../Section"
import feedData from "../../data/feed"

export default function Achievements(){

	return (
		<Section title="Achievements">
            <FeedContentView {...{feedData}}/>
        </Section>
	)
}
