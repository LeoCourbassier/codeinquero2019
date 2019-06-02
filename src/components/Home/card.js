import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class CardC extends React.Component {
    render() {
        return (
            <div className="App">
                <Row>
                    <Col m={6} s={12}>
                        <Card header={<CardTitle />} actions={[<a>Link</a>]}>
                            Here is the standard card with an image thumbnail.
</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

const styleCard = {

}