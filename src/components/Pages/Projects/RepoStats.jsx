import React, { useState, useEffect } from "react";
import { FiFolder, FiGithub } from "react-icons/fi";

const URL = `https://api.github.com/users/losier/repos?&sort=pushed&per_page=100&page=1`;

const RepoStats = () => {
  const [reposData, setReposData] = useState([]);

  const getRepoData = async () => {
    const responce = await fetch(URL);
    setReposData(await responce.json());
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <div>
      {reposData.map((repo) => (
        <article key={repo.id} className="Projects_list_item">
          <div className="project_logo">
            <FiFolder />
            <a className="view_btn" href={repo.url}>
              <FiGithub />
            </a>
          </div>
          <h1>{repo.name}</h1>
          <h4>{repo.description}</h4>
          <small className="langData">{repo.language}</small>
        </article>
      ))}
    </div>
  );
};

export default RepoStats;
