import React from 'react';
import { FormGroup, Col, Row, Form, Button, Input } from 'reactstrap';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onTermChange = (e) => {
        const term = e.target.value;
        this.setState(() => ({ term }));
    };

    render() {
        return (
            <div className="search-bar">
                <Form inline onSubmit={this.onSubmit}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Input className=" search-bar__input"
                                    value={this.state.term}
                                    onChange={this.onTermChange}
                                    type="text"
                                    placeholder="Search.. Lists, Friends, Events"
                                />&nbsp;
                                <Button className="search-bar__button ">Search</Button>
                            </FormGroup>                            
                        </Col>
                    </Row>
                </Form>
            </div>
        );

    }
}


export default SearchBar;