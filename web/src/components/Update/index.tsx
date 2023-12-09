import FeedContentView, { IFeedItem } from "../Feed/FeedItem"
import Section from "../Section"

const feedData: IFeedItem[] = [
    {
        title: "Denis Monet",
        body: "Salut Véronique!"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique! \u{1F601} asd"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique!"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique! \u{1F601} asd"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique!"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique! \u{1F601} asd"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique!"
    },
    {
        title: "Denis Monet",
        body: "Salut Véronique! \u{1F601} asd"
    },

]

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