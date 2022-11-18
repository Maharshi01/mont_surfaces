import { Home } from '../features/home/container';
import { Login, ForgotPassword, ResetPassword } from '../features/login/container'
import { Inventory } from '../features/inventory/container'
import { Cart } from '../features/cart/container'
import { Opportunities } from '../features/opportunities/container'
import { Profile } from '../features/profile/container';

export default {
    Home: Home,
    Login: Login,
    Profile: Profile,
    ForgotPassword: ForgotPassword,
    ResetPassword: ResetPassword,
    Inventory: Inventory,
    Cart: Cart,
    Opportunities: Opportunities
}
