const UserRoutes = require('./user/routes')
let routes = []

routes = [...routes,
    UserRoutes,
]

module.exports = routes