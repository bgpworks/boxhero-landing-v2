function simpleHash(seedStr) {
  let i = 0,
    hash = 0,
    chr = null;
  for (i = 0; i < seedStr.length; i++) {
    chr = seedStr.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}

const COLOR_MAP = [
  { backgroundColor: "#3cb9a0", color: "white" },
  { backgroundColor: "#9369e6", color: "white" },
  { backgroundColor: "#55adfd", color: "white" },
];

export const genRandomColorStyleMap = (seedStr) => {
  const hash = simpleHash(seedStr);

  return COLOR_MAP[hash % COLOR_MAP.length];
};
