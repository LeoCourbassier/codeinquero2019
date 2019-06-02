import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class CardC extends React.Component {
    render() {
        return (
            <div >
                    <Col m={2} s={12} style={styleCard}>
                        <Card header={<CardTitle />} actions={[<a>Link</a>]}>
                            Here is the standard card with an image thumbnail.
</Card>
                    </Col>
                    
            </div>
        );
    }
}

const styleCard = {
    width:"250px",
    align:"center"
}