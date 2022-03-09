import Router from 'express'
import siteConfigController from "../controllers/siteConfigController";
import {adminMiddleware} from "../middleware/adminMiddleware";

const siteConfigRouter = Router ()

siteConfigRouter.get('/getConfig', siteConfigController.getConfig)
siteConfigRouter.put('/updateConfig', adminMiddleware, siteConfigController.updateConfig)
siteConfigRouter.post ( '/addConfig', adminMiddleware, siteConfigController.addConfig )
siteConfigRouter.post ( '/addCategory', adminMiddleware, siteConfigController.addCategory )
siteConfigRouter.delete ( '/deleteCategory', adminMiddleware, siteConfigController.deleteCategory )

export default siteConfigRouter