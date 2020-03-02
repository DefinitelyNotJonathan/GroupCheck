import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ListMain from './List/listMain';
import ApiContext from './ApiContext';
import STORE from './store';
import AddList from './List/addList';
import AddItem from './Item/addItem';
import ErrorBoundary from './ErrorBoundary';
import LandingPage from './landingPage/landingPage';
import HomePage from './homePage/homePage';
import Login from './login/login';
import SignUp from './signUp/signUp';


class App extends Component {
  state = {
    items: [],
    lists: []
  }
    componentDidMount() {

      this.setState(STORE);
    }

    renderMainRoutes() {
        return (
            <>
              <Route exact path="/" component={LandingPage} />
              <Route path = "/login" component={Login} />
              <Route path = "/signup" component={SignUp} />
              <Route exact path = "/home" component={HomePage} />
              <Route exact path = "/list/:listId" component = {ListMain} />
              <Route path="/add-list" component={AddList} />
              <Route path="/add-item" component={AddItem} />

            </>
        );
    }

    render() {
        const value = {
            items: this.state.items,
            lists: this.state.lists,
            deleteItem: this.handleDeleteItem,
            addItem: (item) => {
                this.state.items.push(item);
                this.setState(this.state);
            },
            addList: (list) => {
              this.state.lists.push(list);
              this.setState(this.state);
          }
        };

        console.log(this.state.items)
        return (
            <ApiContext.Provider value={value}>
                <div className="App">
                        <header className="App__header">
                            <h1>
                                <Link to="/home">GroupCheck</Link>{' '}
                            </h1>
                        </header>
                    <ErrorBoundary errorMessage='could not display MainRoutes'>
                        <main className="App__main">{this.renderMainRoutes()}
                        </main>
                    </ErrorBoundary>
                    
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;
