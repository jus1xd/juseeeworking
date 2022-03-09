import adminService from "../services/adminService";

class adminController {
    async registration ( req, res) {
        try {
            const {username, password} = req.body;
            const userData = await adminService.registration ( username, password );
            res.status ( 200 ).json ({username, password: userData.password});
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

    async login ( req, res ) {
        try {
            const {username, password} = req.body;
            const userData = await adminService.login ( username, password);
            res.status ( 200 ).json ( {username, password: userData.password} );
        } catch (e) {
            res.status ( 500 ).json ( e );
        }
    }

}

export default new adminController ();