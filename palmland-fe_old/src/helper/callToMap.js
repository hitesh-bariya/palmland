import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
export default function calltoMap() {
  // var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
  // var MapboxWorker = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker.js");

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmF2LXNwZXgiLCJhIjoiY2t4aHgwOXdnNG03dTJvbzFidzlxZmJubSJ9.AuZbLXv9Du6ag6sNaVmr-w";

  // mapboxgl.workerClass = MapboxWorker;
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/bav-spex/ckxlc42gr07mw14od1jxoqzcf",
    scrollZoom: true,
    center: [55.2721637,25.2093024],
    zoom: 12,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  //   // locations.forEach((loc) => {
  //   // Create marker
  const el = document.createElement("div");
  el.className = "marker";

  //   // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: "bottom",
  })
    .setLngLat([55.2721637,25.2093024])
    .addTo(map);

  //   // Add Popup
  new mapboxgl.Popup({
    offset: 25,
  })
    .setHTML(`<p>Palmland Real Estate</p>`)
    .setLngLat([55.2721637,25.2093024])
    .addTo(map);

  //   // Extends map bounds to include current location
  //   bounds.extend([25.2087346,55.2723835]);
  //   // });
  //   map.fitBounds(bounds, {
  //     padding: {
  //       top: 220,
  //       bottom: 220,
  //       // left: 250,
  //       // right: 250,
  //     },
  //   });
}
