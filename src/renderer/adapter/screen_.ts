import * as Adap from '../adapter/index'
import { Gvar } from '../variable'

//let display_width: number = 340;
//let display_height: number = 340;
function screen_(id: any, display_width: any, display_height: any, init_mode: any, pos_x: any = null, pos_y: any = null) {
    //if (id == 0) {
    //    display_width = 340;
    //    display_height = 340;
    //    Gvar.canvasSize = display_width;
    //    document.getElementById("pad").style.top = "720px";
    //}
    Adap.buffer(id, display_width, display_height, init_mode);
    Gvar.canvases[id].style.top = pos_x;
    Gvar.canvases[id].style.left = pos_y;
    document.body.appendChild(Gvar.canvases[id]);
    Gvar.canvases[id].style.display = "none";
}

export {screen_}