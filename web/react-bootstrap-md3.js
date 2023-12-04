//@ts-check
const fs = require('fs'); const path = require("path")
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
const DEFAULT_STYLES_PATH = path.join(process.cwd(),"src", "styles")
const THEME_FILE_NAME = "theme.json"
const SASS_FILE_NAME = "md3-bootstrap.theme.scss"
const DEFAULT_THEME_PATH = path.join(DEFAULT_STYLES_PATH, THEME_FILE_NAME)
const DEFAULT_SASS_PATH = path.join(DEFAULT_STYLES_PATH, SASS_FILE_NAME)
class ReactBootstrapMD3Plugin {
  path_to_theme
  constructor(path_to_theme=DEFAULT_THEME_PATH){
    this.path_to_theme = path_to_theme
  }
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      const theme = this.getTheme()
      generateGlobalSass(theme)
    });
  }

  getTheme(){
    const setThemePath = (path) => {this.path_to_theme = path}
    return getTheme(setThemePath, this.path_to_theme)
  }
}

/*** MD3THEME  */
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
      logger.info(`Initializing a theme file at ${DEFAULT_THEME_PATH}`)
      return initTheme(setThemePath)
    } else if(!checkJSONExtension(filePath)){
      logger.warning(`Invalid file type`)
      logger.info(`Initializing a theme file at ${DEFAULT_THEME_PATH}`)
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
  const destPath = path.join(process.cwd(),DEFAULT_THEME_PATH)
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
/*** !MD3Theme */


/*** GlobalSass */

/**
 * 
 * @param {*} theme 
 */
const generateGlobalSass = (theme) => {
  const content = generateGlobalSassContent(theme)
  fs.writeFileSync(DEFAULT_SASS_PATH, content)
}

// TODO: refactor: Map Theme object to sass file line (or commands)
const generateGlobalSassContent = (theme) => {
  let content=""
  console.log(theme)
  const light = theme.schemes.light
  const setPrimary = `$primary: ${light.primary}`
  const setBodybg  = `$body-bg: ${light.surfaceContainer}`
  const setBodyColor = `$body-color: ${light.onSurface}`
  const setBorderColor = `$border-color: ${light.outlineVariant}`
  const lines = [
    setPrimary,
    setBodybg,
    setBodyColor,
    setBorderColor
  ]

  for(const line of lines){
    const write = line.concat(';\n')
    content = content.concat(write)
  }

  content = content.concat(`@import "~bootstrap/scss/bootstrap";`)
  return content
}
/*** GlobalSass */
module.exports = ReactBootstrapMD3Plugin;