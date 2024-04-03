import React, { Component } from 'react'

export class Search extends Component {

    constructor(props){
        super(props);
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            keyword : ''
        }
    }

    change(e){
        this.setState({
            keyword : e.target.value,
        });
    }

    submit(e){
        e.preventDefault();
        if(this.state.keyword === ""){
            this.props.setAlert("Geçerli Bir Metin Giriniz","danger")
        }else {
            this.props.searchUsers(this.state.keyword);
            this.setState({
            keyword: ''
        })
        }
        
    }

  render() {
    return (
        <div className="container my-2">
            <form onSubmit={this.submit}>
                <div className="input-group">
                    <input type="text" onChange={this.change} value={this.state.keyword} className='form-control' />
                    <div className="input-group-append">
                        <button type='submit' className='btn btn-danger'>Search</button>
                    </div>
                </div>
            </form>
            <button className='btn btn-secondary btn-sm btn-block' onClick={this.props.clearUsers}>Clear Users</button>
        </div>
    )
  }
}

export default Search