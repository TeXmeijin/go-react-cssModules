import * as React from 'react';

import Header from './components/Header';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: ''
        };
    }
    
    componentDidMount() {
        fetch('./api/home')
            .then(x => x.json())
            .then(json => {
                this.setState({
                    message: json.message
                });
            })
    }
    
    render() {
        const { message } = this.state;
        
        return (
            <div className="frame-contents">
                <Header />
                <div>{ message }</div>
            </div>
        );
    }
}
