import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func857
async function func0916(this: any) {
    await Func.func0917();
    Gvar.y_axis_map_image = Gvar.var_3560;
    Gvar.var_3562 = Gvar.y_axis_map_image;
    Adap.objsel(0);
    await Func.func0911();
    return;
}

export {func0916}
