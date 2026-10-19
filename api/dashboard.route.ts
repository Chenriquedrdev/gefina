import { Router } from "express";

import findDashboard from "./dashboard.service.ts";

const router = Router();

router.get('/', async(_request, response) => {
try {
 const dashboard = await findDashboard();
} catch (error) {
console.error(error);
response.status(500).json({error: {message:' não foi possivel carregar o painel inicinal.'}})
}
});

export default router;
