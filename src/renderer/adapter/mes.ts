import { Gvar } from '../variable'
import { t } from '../i18n'

// @ts-ignore
function mes(text: string, red: number = null, green: number = null, blue: number = null) {
    const ga = Gvar.context.globalAlpha;
    Gvar.context.globalAlpha = 1;
    // Gvar.context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
    Gvar.context.fillText(t(text), Gvar.position[0], Gvar.position[1] + Gvar.line_size * 0.9);
    Gvar.context.globalAlpha = ga;
    Gvar.position[1] += Gvar.line_size;
}

export {mes}