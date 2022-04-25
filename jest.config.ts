const config = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|sass|scss|svg|png|jpg)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "\\.svg$": "<rootDir>/src/svgTransform.js",

  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.js"],
  setupFiles: ["<rootDir>/src/test-shim.js", "<rootDir>/src/test-setup.js",],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testURL: "https://localhost:8080",
};

export default config;
