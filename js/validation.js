const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04'))
ajv.addSchema(require('../json/fermentation'))
ajv.addSchema(require('../json/fermentation_step'))
ajv.addSchema(require('../json/fermentable'))
ajv.addSchema(require('../json/hop'))
ajv.addSchema(require('../json/mash_step'))
ajv.addSchema(require('../json/mash'))
ajv.addSchema(require('../json/measureable_units'))
ajv.addSchema(require('../json/misc'))
ajv.addSchema(require('../json/recipe'))
ajv.addSchema(require('../json/style'))
ajv.addSchema(require('../json/water'))
ajv.addSchema(require('../json/culture'))
ajv.addSchema(require('../json/equipment'))
ajv.addSchema(require('../json/packaging'))
ajv.addSchema(require('../json/packaging_vessel'))
ajv.addSchema(require('../json/boil'))
ajv.addSchema(require('../json/boil_step'))
ajv.addSchema(require('../json/timing'))

module.exports = ajv.compile(require('../json/beer'))