import React from 'react';
import $ from 'jquery';

import './todo-list.css';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=20")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
            let lenght = 0;
            return (
                <div>{items.map(item => (
                    <div key={item.login.uuid} className="card">
                        <img src={item.picture.medium} alt={'Image'+lenght++} className="card-img-top"/><br/>
                        <div className="card-body">
                            <h5 className="card-title">FirstName: {item.name.first}</h5>
                            <h5 className="card-title">LastName: {item.name.last}</h5>
                            <div>
                                <p class="card-text">Street: {item.location.street}</p>
                                <p class="card-text">City: {item.location.city}</p>
                                <p class="card-text">Postcode: {item.location.postcode}</p>
                            </div><br />
                        </div>
                    </div>
                ))}
                </div>
            );
        }
    };
};

export default TodoList;