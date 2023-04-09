import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import linksData from "../data/links.json";

const Links = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(linksData);
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