import React, {Component} from 'react'

class AddNinja extends Component {
    state = {
        name: null, 
        age: null, 
        belt: null
    }

    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNinjas(this.state);
    }
    render(){
        return(
            <div className="formName">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age : </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt">Belt : </label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;