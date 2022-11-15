import { Home } from '../features/home/container';
import { Login, ForgotPassword } from '../features/login/container'
import { List } from '../features/lists/container'
import { Inventory } from '../features/inventory/container'
import { Purchases } from '../features/purchases/container'
import { Profile } from '../features/profile/container';

export default {
    Home: Home,
    Login: Login,
    Profile: Profile,
    ForgotPassword: ForgotPassword,
    List: List,
    Inventory: Inventory,
    Purchases: Purchases
}
