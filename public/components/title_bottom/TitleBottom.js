import React from 'react';
import {Table, Grid, Row, Col, Button} from 'react-bootstrap';

class TitleBottom extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={8}>
              <div className="panel">
                <Table striped bordered>
                  <thead>
                  <tr>
                    <th>Title 1</th>
                    <th>Title 2</th>
                    <th>Title 3</th>
                    <th>Title 4</th>
                    <th>Title 5</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                  </tr>
                  <tr>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                    <td>Value</td>
                  </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col xs={4}>
              <Button bsStyle="success">Сохранить результаты</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default TitleBottom;