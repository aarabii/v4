import React, { useState, useEffect } from "react";
import { FiFolder, FiGithub } from "react-icons/fi";
import config from "../../config.json";
const URL = `https://api.github.com/users/${config.githubUsername}/repos?&sort=pushed&per_page=100&page=1`;

const RepoStats = () => {
  const [reposData, setReposData] = useState([]);
  const [query, setQuery] = useState("");

  const getRepoData = async () => {
    const responce = await fetch(URL);
    setReposData(await responce.json());
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <div className="Projects">
      <form class="search-box">
        <input
          type="text"
          placeholder="Search for a project..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="reset"></button>
      </form>
      <div className="Projects_list">
        {reposData
          .filter((repo) => repo.name.toLowerCase().includes(query))
          .map((repo) => (
            <article key={repo.id} className="Projects_list_item">
              <div className="project_logo">
                <FiFolder />
                <a
                  className="view_btn"
                  target="_blank"
                  href={repo.html_url}
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              </div>
              <h1>{repo.name}</h1>
              <h4>
                {(repo.description || "No description").substring(0, 100)}
              </h4>
              <small className="langData">
                {(repo.language || "Markdown").substring(0, 100)}
              </small>
            </article>
          ))}
      </div>
    </div>
  );
};

export default RepoStats;
