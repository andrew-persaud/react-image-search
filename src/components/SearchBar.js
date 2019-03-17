import React from 'react';


class SearchBar extends React.Component {
   state = {term : ''};

   onFormSubmit = (e) => {
       e.preventDefault();
       this.props.onSubmit(this.state.term);
   }
    render() {
        return (
            <div className="ui segment" style={{marginTop: '10px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="input-field">Image Search</label>
                        <input 
                            type="text" 
                            name="input-field"
                            placeholder="Search"
                            onChange={(e) => this.setState({term : e.target.value})}
                            value={this.state.term}
                            autoComplete="off"
                        ></input>
                    </div>
                   
                </form>
            </div>
        )
    }
}


export default SearchBar;