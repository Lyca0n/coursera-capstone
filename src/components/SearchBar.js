import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            term:null
        };
    }

    onTermChange = (e) => {
        const term = e.target.value;
        this.setState(() => ({ term }));
    };

    render(){
        return(
            <div className="search-bar">
            <form onSubmit={this.onSubmit}>
                <input className="search-bar__input"
                    value={this.state.term}
                    onChange={this.onTermChange}
                    type="number"
                    placeholder="Amount"
                />
                <button className="search-bar__button">Search</button>
            </form>
        
            </div>
        );
        
    }
} 
export default SearchBar