import React from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

class MyLists extends React.Component {
    constructor(props){
        super(props);            
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.props.lists.length ===0?(
                                <ListGroupItem>No Expenses</ListGroupItem>
                            ):(
                                this.props.lists.map((list)=>{
                                    return <ListGroupItem key={list.id}> {list.name}</ListGroupItem>
                                })
                            )}
                            
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    lists: state.lists
});
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps,mapDispatchToProps)(MyLists);