import Home from "./pages/Home.jsx";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
        <Link to="/" className="navbar-btn">
  Home
</Link>
      <h1>About Travis</h1>
      <h2>Hello, my name is Travis Jones and I am currently trying to wrap my head around React, Javascript, and routing. 
        I am training in the coding school called Frontend Simplified. The mentors are helping me understand how the code works.
        The more I analyse what is working right with my site I can then memorize how it all works.
        It's when there is something wrong with the code I usually get confused.
        I said I was bad at CSS and one mentor told me, "That is what coders do, they constantly are changing 
        the CSS and debugging what is going on and what's wrong with it. That's coding."
        The more I understand coding, the more I like it, but what's difficult is understanding where and when
        to put the code. It seems like there is no end to the learning. 

      </h2>
    </div>
  );
}

export default About;