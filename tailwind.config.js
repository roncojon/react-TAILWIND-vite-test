/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// const twPreset = require("./src/constants/twPreset.ts/index.js");

/** @type {import('tailwindcss').Config} */
import { twPresett } from "./src/constants/twPreset.cjs";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [twPresett],
  plugins: [],
}

