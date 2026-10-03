import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  function handleAddReact() {
    setSkills((preSkills) => [
      ...preSkills,
      "React"
    ]);
  }

  function handleRemoveCSS() {
    setSkills((preSkills) => preSkills.filter((skill) => skill !== "CSS"));
  }

  function handleUpgradeJS() {
    setSkills((preSkills) =>
      preSkills.map((skill) =>
        skill === "JavaScript" ? "JavaScript ES6+" : skill
      )
    );
  }

  return (
    <article>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <button onClick={handleAddReact}>Add React</button>
      <button onClick={handleRemoveCSS}>Remove CSS</button>
      <button onClick={handleUpgradeJS}>Upgrade JavaScript</button>
    </article>
  );
}

export default Skills;