const SVG_NS = "http://www.w3.org/2000/svg";

const addRect = (svg, span, x, width) => {
  const rect = document.createElementNS(SVG_NS, "rect");
  rect.setAttributeNS(null, "x", -x);
  rect.setAttributeNS(null, "y", span.offsetTop);
  rect.setAttributeNS(null, "width", width);
  rect.setAttributeNS(null, "height", 24);
  rect.setAttributeNS(null, "fill", span.style.backgroundColor);
  svg.appendChild(rect);
};

export const drawFilterHighlights = () => {
  const parent = document.getElementsByClassName("alerts-container")[0];
  const mapContainer = document.getElementsByClassName("filter-map")[0];
  const spans = document.getElementsByClassName("highlighted");
  const svg = document.getElementsByClassName("filter-svg")[0]

  if (parent.offsetHeight === parent.scrollHeight || spans.length === 0) {
    mapContainer.style.display = "none";
    return;
  } else {
    mapContainer.style.display = "";
  }

  // clear svg
  while(svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }

  // set svg scale height
  svg.setAttribute("viewBox", `0 0 20 ${parent.scrollHeight}`);

  // calculate ratio
  const ratio = parent.scrollHeight / 750;


  const width = 24 * ratio
  const x = width / 2

  for(let i = 0; i < spans.length; i++) {
    addRect(svg, spans[i], x, width);
  }
};

export const syncScroll = () => {
  const parent = document.getElementsByClassName("alerts-container")[0];
  const block = document.getElementsByClassName("block")[0];
  const ratio = parent.scrollTop / parent.scrollHeight;
  const y = parent.offsetHeight * ratio + block.offsetHeight;

  block.style.top = `${y}px`
};