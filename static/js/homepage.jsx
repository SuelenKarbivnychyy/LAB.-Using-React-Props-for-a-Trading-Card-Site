'use strict';

function Homepage() {
  return (
    // <React.Fragments> 
    <div>
      <h2>Welcome, We are so happy you are here!</h2>
      <a href="/cards">Click me to view the trading cards</a>       
      <img src="/static/img/balloonicorn.jpg"/>
      <br></br>  
      <a href="/about"> About me</a>  
      </div>

    
   
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
