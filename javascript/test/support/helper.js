global.requireLib = function(name) {
  return require(process.env.PWD + '/lib/' + name)
}
