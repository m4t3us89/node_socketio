const UserRoutes = require('./user/routes')
const AuthRoutes = require('./auth/routes')
let routes = []

routes = [...routes,
    UserRoutes,
    AuthRoutes
]

module.exports = routes