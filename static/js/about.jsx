'use strict';

function About() {
  return (
    // <React.Fragments> 
    <div>
      <h2>Here you will know a litte more about me!</h2>      
      <img src="/static/img/tango.jpg"/>
      <br></br>
      <a href = "https://github.com/SuelenKarbivnychyy">Click to Github view</a>
      <br></br>
      <a href = "https://www.linkedin.com/in/suelen-matos-586ba4246/">Click for Linkedin view</a>
      <br></br>
      <a href="/"> Back to homepage</a> 
    </div>
   
  );
}

ReactDOM.render(<About />, document.querySelector('#myself'));