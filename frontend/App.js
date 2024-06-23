import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={EmployeeList} />
          <Route path="/adicionar-colaborador" component={AddEmployee} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
