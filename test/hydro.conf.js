
/**
 * Hydro configuration
 *
 * @param {Hydro} hydro
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'eval-as-module',
    timeout: 500,
    plugins: [
      require('hydro-bdd')
    ]
  })
}
