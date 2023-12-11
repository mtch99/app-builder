"use client";
import { CSSProperties } from "react";
import { Card, Container } from "react-bootstrap";
import { IFeedItem } from "../../../models";


type IFeedItemViewProps = {
    feedItem: IFeedItem
}
export function FeedItemView({feedItem}: IFeedItemViewProps){
    return (
        <Container style={{borderColor: 'grey', borderTopWidth:"2rem"}} className="border-bottom border-dark-subtle mt-2 p-0">
            <p className="fs-6 m-0" style={{fontWeight: "400"}}>
                {feedItem.title}
            </p>
            <p className="fs-8 m-0" style={{fontWeight: "lighter"}}>
                {feedItem.body}
            </p>
        </Container>
    )
}

type FeedContentViewProps = {
    feedData: IFeedItem[]
}

export default function FeedContentView({feedData}: FeedContentViewProps){
    
    return (
        <Container fluid className="overflow-auto m-0 pb-3">
            {
                feedData.map((feedItem, index) => {
                    return <FeedItemView {...{feedItem}} key={index}/>
                })
            }
        </Container>
    )
}


const styles: {[key:string]: CSSProperties} = {
    container: {
        borderRadius: ".5rem",
        backgroundColor:"#F5F5F5"
    },
}