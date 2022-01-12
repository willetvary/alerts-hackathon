import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Image, Signpost, SignpostContent, SignpostTrigger  } from "@tmc/clr-react";

import "./TopicImage.scss";

const IMAGE_HOST = "http://localhost:8080/assets/alert/";

export default function TopicImage({ id }) {
  const [imageState, setImageState] = useState({
    isOpen: false
  });

  const mouseOverHandler = useCallback((e) => {
    let el;
    if (e.target.type === "button") {
      el = e.target;
    } else if (e.target?.parentElement?.type === "button") {
      el = e.target.parentElement;
    }
    if (el) {
      const { right, top } = el.getBoundingClientRect();
      setImageState({
        isOpen: true,
        right,
        top
      });
    }
  }, []);

  const mouseOutHandler = useCallback(() => {
    setImageState({
      isOpen: false
    });
  }, []);

  const { isOpen, right, top } = imageState;
  const style = {
    top: `${top}px`,
    left: `${right}px`
  };

  return (
    <Signpost className="topic-image">
      <SignpostTrigger onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler} />
      <SignpostContent open={isOpen} position="right-bottom" style={style}>
        <Image src={`${IMAGE_HOST}${id}.png`} />
      </SignpostContent>
    </Signpost>
  );
}

TopicImage.propTypes = {
  id: PropTypes.string.isRequired
};