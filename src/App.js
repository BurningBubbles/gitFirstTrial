import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./store";

class App extends Component {
    render() {
        console.log('store:', store.getState());
        return (
            <div className="App">
                <Sidebar/>
                <Main/>
            </div>
        );
    }
}

export default App;
