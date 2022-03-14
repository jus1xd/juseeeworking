import siteConfigService from "../services/siteConfigService";

class siteConfigController {
    async addConfig ( req, res ) {
        try {
            const config = await siteConfigService.addConfig ( req.body )
            res.status ( 200 ).json ( config )
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async getConfig ( req, res ) {
        try {
            const config = await siteConfigService.getConfig ()
            res.status ( 200 ).json ( config );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }
    async updateConfig ( req, res ) {
        try {
            const config = await siteConfigService.updateConfig (req.body.config)
            res.status ( 200 ).json ( config );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async addCategory ( req, res ) {
        try {
            const config = await siteConfigService.addCategory ( req.body )
            res.status ( 200 ).json ( config );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async deleteCategory ( req, res ) {
        try {
            const config = await siteConfigService.deleteCategory ( req.body )
            res.status ( 200 ).json ( config );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }
}

export default new siteConfigController ()