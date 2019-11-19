import React from 'react';
import {render} from 'react-dom';
// import azhu from "../../lib/index";
// import { Button } from "generator-azhu-ui";
// import "../../lib/azhu.min.css";

import {Button, Container, Row, Col} from '../../src';
import '../../scss/index.scss';

function App() {
    return (
        <div>
            <Button tag="link" outline disabled>
                test bTN
            </Button>
            <Container size="container-md">
                <Row>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

render(<App />, document.getElementById('app'));
