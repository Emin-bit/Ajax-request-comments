import React, { Component } from 'react'
import CommentsList from './components/CommentsList';
import Navbar from './components/Navbar';

export class App extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                return res.json();
            })
            .then(data => {
               this.setState({comments: data});
            })
    }

    render() {
        return (
            <>
                <Navbar />
                <CommentsList comments={this.state.comments}/>
            </>
        )
    }
}

export default App
