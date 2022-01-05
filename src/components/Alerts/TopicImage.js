import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Image, Signpost, SignpostContent, SignpostTrigger  } from "@tmc/clr-react";

import "./TopicImage.scss";

const IMAGE_HOST = "http://localhost:8080/assets/alert/";

export default function TopicImage({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <Signpost className="topic-image">
      <SignpostTrigger onClick={clickHandler} />
      <SignpostContent closable open={isOpen} position="right-bottom" onClose={clickHandler}>
        <Image src={`${IMAGE_HOST}${id}.png`} />
      </SignpostContent>
    </Signpost>
  );
}

TopicImage.propTypes = {
  id: PropTypes.string.isRequired
};