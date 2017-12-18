import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';


//this is a comment

const Dashboard = () => <div>  D</div>;
const SurveyNew = () => <div>  S</div>;
const Landing = () =>   <h1> Landing </h1>;


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}/>
          <Route path="/surveys" component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
    </div>
  );
};



export default App;
