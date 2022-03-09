import bcrypt from 'bcrypt';
import adminModel from "../models/adminModel";

class adminService {
    async registration ( username: string, password: string ) {
        const candidate = await adminModel.findOne ( {username} );
        if (candidate) {
            throw new Error ( 'Пользователь с таким email уже существует' );
        }
        const hashPassword = await bcrypt.hash ( password, 3 );
        return await adminModel.create ( {
            username,
            password: hashPassword
        } )
    }

    async login ( username: string, password: string ) {
        const user = await adminModel.findOne ( {username} );
        if (!user) {
            throw new Error ( 'Пользователь не найден' );
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw new Error('Неверный пароль');
        }
        return user
    }
}

export default new adminService ();