import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            term:''
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
                <input className="text-input search-bar__input"
                    value={this.state.term}
                    onChange={this.onTermChange}
                    type="text"
                    placeholder="Search.. Lists, Friends, Events"
                />
                <button className="search-bar__button button">Search</button>
            </form>
        
            </div>
        );
        
    }
} 
export default SearchBar