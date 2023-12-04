const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ReactBootstrapMD3Plugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('The webpack build process is!');
      console.log(process.cwd())
    });
  }
}


const readJSON = 

module.exports = ReactBootstrapMD3Plugin;