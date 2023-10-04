import { Router } from "express"

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({message: "Helo World"})
})

export default routes