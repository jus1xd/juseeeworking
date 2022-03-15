import siteConfigModel, {ISiteConfig} from "../models/siteConfigModel";

class SiteConfigService {
    async addConfig ( config: ISiteConfig ) {
        return siteConfigModel.create ( config )
    }
    async getConfig(){
        return siteConfigModel.findOne ();
    }
    async addCategory ( category ) {
        const config = await siteConfigModel.find ()
        config[0].categories.push ( category.text )
        return config
    }
    async updateConfig ( config: ISiteConfig) {
        if (!config._id) {
            throw new Error ( "Id не указан" );
        }
        return siteConfigModel.findByIdAndUpdate ( config._id, config, {new: true} );
    }
    async deleteCategory ( category: string ) {
        const config = await siteConfigModel.find ()
        config[0].categories.filter ( item => item != category )
        return config
    }
}

export default new SiteConfigService ()