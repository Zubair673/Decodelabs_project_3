import { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [likes, setLikes] = useState([0, 0, 0, 0, 0]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  return (
    <section id="projects" className="projects">

      <div className="card">
        <h3>Project 1</h3>
        <p>Static Webpage Design</p>
        <button onClick={() => handleLike(0)}>
          ❤️ Like ({likes[0]})
        </button>
      </div>

      <div className="card">
        <h3>Project 2</h3>
        <p>Responsive Portfolio Website</p>
        <button onClick={() => handleLike(1)}>
          ❤️ Like ({likes[1]})
        </button>
      </div>

      <div className="card">
        <h3>Project 3</h3>
        <p>Interactive React Portfolio</p>
        <button onClick={() => handleLike(2)}>
          ❤️ Like ({likes[2]})
        </button>
      </div>

      <div className="card">
        <h3>Project 4</h3>
        <p>Calculator App</p>
        <button onClick={() => handleLike(3)}>
          ❤️ Like ({likes[3]})
        </button>
      </div>

      <div className="card">
        <h3>Project 5</h3>
        <p>Responsive Image Gallery</p>
        <button onClick={() => handleLike(4)}>
          ❤️ Like ({likes[4]})
        </button>
      </div>

    </section>
  );
}

export default Projects;