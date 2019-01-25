import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list/todo-list';

class App extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />
                <TodoList />
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);