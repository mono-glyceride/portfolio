bubbly({
  colorStart: "#fff",
  colorStop: "#fff",
  blur: 1,
  compose: "source-over",
  radiusFunc: () => Math.random() * 35,
  bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .2)`,
});
