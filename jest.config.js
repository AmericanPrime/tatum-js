module.exports = {
  roots: ['/home/kwhite/tatum-js/tatum-js/src/src'],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testTimeout: 30000,
  setupFilesAfterEnv: ['/home/kwhite/tatum-js/tatum-js/jest.setup.ts'],
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: "reports",
      outputName: "jest-junit.xml",
      ancestorSeparator: " › ",
      uniqueOutputName: "false",
      suiteNameTemplate: "{filepath}",
      classNameTemplate: "{classname}",
      titleTemplate: "{title}"
    }]
  ]
}

