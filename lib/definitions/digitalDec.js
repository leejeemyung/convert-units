var bytesDec;
bytesDec = {
  N: {
    name: {
      singular: "",
      plural: "",
    },
    to_anchor: 1,
  },
  K: {
    name: {
      singular: "Kilo",
      plural: "Kilo",
    },
    to_anchor: 1000,
  },
  M: {
    name: {
      singular: "Mega",
      plural: "Mega",
    },
    to_anchor: 1000000,
  },
  G: {
    name: {
      singular: "Giga",
      plural: "Giga",
    },
    to_anchor: 1000000000,
  },
  T: {
    name: {
      singular: "Tera",
      plural: "Tera",
    },
    to_anchor: 1000000000000,
  },
};

module.exports = {
  bytesDec: bytesDec,
  _anchors: {
    bytesDec: {
      unit: "N",
      ratio: 1,
    },
  },
};
