import { defineConfig } from "tsup";

const config = defineConfig({
  splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  target: "es2017",
  outDir: "dist",
  entry: ["src/**/*.ts"], //include all files under src
});

export default config;
