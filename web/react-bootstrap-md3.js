//@ts-check
const fs = require('fs'); const path = require("path")
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
const DEFAULT_PATH_TO_THEME = path.join("src", "styles", "theme.json")
class ReactBootstrapMD3Plugin {
  path_to_theme
  constructor(path_to_theme=DEFAULT_PATH_TO_THEME){
    this.path_to_theme = path_to_theme
  }
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      const theme = this.getTheme()
    });
  }

  getTheme(){
    const setThemePath = (path) => {this.path_to_theme = path}
    getTheme(setThemePath, this.path_to_theme)
  }
}


/** Look for the theme.json file */
/**
 * 
 * @param {string} filePath 
 * @returns {any}
 */
const getTheme = (setThemePath, filePath) => {

  try{
    if(!fs.existsSync(filePath)){
      logger.warning(`Verify the path to your MD3 theme file: ${filePath} is empty`)
      logger.info(`Initializing a theme file at ${DEFAULT_PATH_TO_THEME}`)
      return initTheme(setThemePath)
    } else if(!checkJSONExtension(filePath)){
      logger.warning(`Invalid file type`)
      logger.info(`Initializing a theme file at ${DEFAULT_PATH_TO_THEME}`)
      return initTheme(setThemePath)
    }
    else {
      const theme = require(filePath)
      return theme
    }
  } catch(e){
      throw new Error(`${"\x1b[31mreact-bootstrap-MD3-plugin\x1b[0m"} ${e}`)
  }
}


const initTheme = (setThemePath) => {
  const destPath = path.join(process.cwd(),DEFAULT_PATH_TO_THEME)
  fs.writeFileSync(destPath, JSON.stringify(INITIAL_THEME, null, 2))
  setThemePath(destPath)
  return require(destPath)
}


const logger = {
  ...console,
  warning: (...args) => console.error("\x1b[33mreact-bootstrap-MD3-plugin\x1b[0m", ...args),
  info: (...args) => console.error("\x1b[34mreact-bootstrap-MD3-plugin\x1b[0m", ...args),
};

/**
 * 
 * @param {string} filePath 
 * @returns {boolean}
 */
const checkJSONExtension = (filePath) => { 
  const extension = filePath.substring(filePath.lastIndexOf('.') + 1)
  return extension == "json"
}


const INITIAL_THEME = {
  "seed": "#FFA500",
  "description": "TYPE: CUSTOM",
  "coreColors": {
    "primary": "#FFA500"
  },
  "schemes": {
    "light": {
      "primary": "#855400",
      "onPrimary": "#FFFFFF",
      "primaryContainer": "#FFDDB7",
      "onPrimaryContainer": "#2A1700",
      "primaryFixed": "#FFDDB7",
      "onPrimaryFixed": "#2A1700",
      "primaryFixedDim": "#FFB95C",
      "onPrimaryFixedVariant": "#653E00",
      "secondary": "#705B41",
      "onSecondary": "#FFFFFF",
      "secondaryContainer": "#FCDEBC",
      "onSecondaryContainer": "#281805",
      "secondaryFixed": "#FCDEBC",
      "onSecondaryFixed": "#281805",
      "secondaryFixedDim": "#DFC2A2",
      "onSecondaryFixedVariant": "#57432B",
      "tertiary": "#53643E",
      "onTertiary": "#FFFFFF",
      "tertiaryContainer": "#D6E9B9",
      "onTertiaryContainer": "#121F03",
      "tertiaryFixed": "#D6E9B9",
      "onTertiaryFixed": "#121F03",
      "tertiaryFixedDim": "#BACD9F",
      "onTertiaryFixedVariant": "#3C4C28",
      "error": "#BA1A1A",
      "onError": "#FFFFFF",
      "errorContainer": "#FFDAD6",
      "onErrorContainer": "#410002",
      "outline": "#827568",
      "background": "#FFFBFF",
      "onBackground": "#1F1B16",
      "surface": "#FFF8F4",
      "onSurface": "#1F1B16",
      "surfaceVariant": "#F0E0D0",
      "onSurfaceVariant": "#504539",
      "inverseSurface": "#352F2A",
      "inverseOnSurface": "#F9EFE7",
      "inversePrimary": "#FFB95C",
      "shadow": "#000000",
      "surfaceTint": "#855400",
      "outlineVariant": "#D4C4B5",
      "scrim": "#000000",
      "surfaceContainerHighest": "#EBE1D9",
      "surfaceContainerHigh": "#F0E6DE",
      "surfaceContainer": "#F6ECE4",
      "surfaceContainerLow": "#FCF2EA",
      "surfaceContainerLowest": "#FFFFFF",
      "surfaceBright": "#FFF8F4",
      "surfaceDim": "#E2D8D1"
    },
  }
}
 
module.exports = ReactBootstrapMD3Plugin;