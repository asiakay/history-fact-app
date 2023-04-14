import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const Links = () => {
  const [links, setLinks] = useState([]);
  const API_ENDPOINT = "http://localhost:3001/api/articles";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <ListGroup>
        {links.map((link, index) => (
          <ListGroup.Item key={index} action href={link.url} target="_blank">
            {link.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Links;
