const { db } = require('../Schema/config')

const MenuSchema = require('../Schema/article')
const Menu = db.model("menus", MenuSchema)

module.exports = Menu