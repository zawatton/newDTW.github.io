import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func851
async function func0910(this: any) {
    if (Gvar.mousex > 10 && Gvar.mousex < 330 && Gvar.mousey > 10 && Gvar.mousey < 330) {
        Gvar.var_3563 = Math.floor((Gvar.mousex - 10) / 40);
        Gvar.var_3564 = Math.floor((Gvar.mousey - 10) / 40);
    }
    else {
        Gvar.var_3563 = 20;
        Gvar.var_3564 = 20;
    }
    Gvar.var_3578 = Gvar.var_66 + Gvar.var_3563 + 1;
    Gvar.var_3579 = Gvar.var_67 + Gvar.var_3564 + 1;
    Gvar.var_3580 = Math.floor((await Adap.ginfo(10) - await Adap.ginfo(12)) / 2);
    Gvar.var_3581 = Gvar.var_3580;
    Gvar.var_3582 = await Adap.ginfo(11) - 680 - Gvar.var_3581;
    Gvar.var_3583 = await Adap.ginfo(4) + Gvar.var_3580 + 10;
    Gvar.var_3584 = await Adap.ginfo(5) + Gvar.var_3582 + 10;
    Gvar.var_3585 = Gvar.var_3583 + 320;
    Gvar.var_3586 = Gvar.var_3584 + 320;
    Gvar.var_3587 = await Adap.ginfo(4) + Gvar.var_3580;
    Gvar.var_3588 = await Adap.ginfo(5) + Gvar.var_3582;
    Gvar.var_3589 = Gvar.var_3587 + 680;
    Gvar.var_3590 = Gvar.var_3588 + 680;
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_254 == 1 && Gvar.var_66 > 3) {
        Gvar.var_199 = 4;
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_3578 = Gvar.var_66 + Gvar.var_3563 + 1;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_257 == 1 && Gvar.var_66 < 49) {
        Gvar.var_199 = 6;
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_3578 = Gvar.var_66 + Gvar.var_3563 + 1;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_255 == 1 && Gvar.var_67 > 3) { // var_255:入力判定[↑]
        Gvar.var_199 = 8;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_3579 = Gvar.var_67 + Gvar.var_3564 + 1;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_259 == 1 && Gvar.var_67 < 30) { // var_259:入力判定[↓]
        Gvar.var_199 = 2;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_3579 = Gvar.var_67 + Gvar.var_3564 + 1;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func0911();
        }
    }
    if (await Adap.ginfo(2) != (-1) && await Adap.ginfo(0) > Gvar.var_3587 && await Adap.ginfo(0) < Gvar.var_3589 && await Adap.ginfo(1) > Gvar.var_3588 && await Adap.ginfo(1) < Gvar.var_3590) {

        if (Gvar.mousex >= 0 && Gvar.mousex <= 10 && Gvar.var_66 > 3) {
            Gvar.var_199 = 4;
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_3578 = Gvar.var_66 + Gvar.var_3563 + 1;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func0911();
            }
        }

        if (Gvar.mousex >= 330 && Gvar.mousex <= 680 && Gvar.var_66 < 49) {
            Gvar.var_199 = 6;
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_3578 = Gvar.var_66 + Gvar.var_3563 + 1;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func0911();
            }
        }
        if (Gvar.mousey >= 0 && Gvar.mousey <= 10 && Gvar.var_67 > 3) {
            Gvar.var_199 = 8;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_3579 = Gvar.var_67 + Gvar.var_3564 + 1;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func0911();
            }
        }
        if (Gvar.mousey >= 330 && Gvar.mousey <= 680 && Gvar.var_67 < 30) {
            Gvar.var_199 = 2;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_3579 = Gvar.var_67 + Gvar.var_3564 + 1;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func0911();
            }
        }
    }
    Gvar.conf_keyon = Adap.getkey(1); // マウス左ボタン入力確認
    if (Gvar.conf_keyon == 1) {
        await Func.func0922();
        return;
    }
    Gvar.conf_keyon = Adap.stick(null, 1);
    if (Gvar.conf_keyon == 512) {
        await Func.func0921();
        return;
    }
    if (Gvar.var_3545 != Gvar.var_3546) {
        Gvar.var_3577 = Gvar.var_3591[Gvar.var_3545];
        Gvar.var_3574 = 0;
        Gvar.var_3592 = 0;
        await Func.func0907();
        Gvar.var_3546 = Gvar.var_3545;
        Gvar.var_3565 = 7;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_3574 != Gvar.var_3592) {
        Gvar.var_3592 = Gvar.var_3574;
        Gvar.var_3565 = 7;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_873 != Gvar.var_3547) {
        Gvar.var_3550 = 0;
        if (Gvar.var_884[Gvar.var_873] >= 100 && Gvar.var_884[Gvar.var_873] < 400) {
            Gvar.var_3550 = 1;
        }
        if (Gvar.var_884[Gvar.var_873] >= 400 && Gvar.var_884[Gvar.var_873] < 500) {
            Gvar.var_3550 = 2;
        }
        if (Gvar.var_884[Gvar.var_873] >= 800 && Gvar.var_884[Gvar.var_873] < 900) {
            Gvar.var_3550 = 3;
        }
        if (Gvar.var_884[Gvar.var_873] == 1) {
            Gvar.var_3550 = 4;
        }
        if (Gvar.var_3551 != Gvar.var_3550 && Gvar.var_3550 == 0) {
            await Func.func0904();
        }
        if (Gvar.var_3551 != Gvar.var_3550 && Gvar.var_3550 == 1) {
            await Func.func0901();
        }
        if (Gvar.var_3551 != Gvar.var_3550 && Gvar.var_3550 == 2) {
            await Func.func0902();
        }
        if (Gvar.var_3551 != Gvar.var_3550 && Gvar.var_3550 == 3) {
            await Func.func0902();
        }
        if (Gvar.var_3551 != Gvar.var_3550 && Gvar.var_3550 == 4) {
            await Func.func0903();
        }
        Gvar.var_3551 = Gvar.var_3550;
        Gvar.var_3547 = Gvar.var_873;
        if (Gvar.var_884[Gvar.var_873] != 0) {
            Gvar.var_3565 = 8;
        }
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_3553 != Gvar.var_3556) {
        Gvar.var_3556 = Gvar.var_3553;
        Gvar.var_3565 = 8;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_3554 != Gvar.var_3557) {
        Gvar.var_3557 = Gvar.var_3554;
        Gvar.var_3565 = 8;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_3555 != Gvar.var_3558) {
        Gvar.var_3558 = Gvar.var_3555;
        Gvar.var_3565 = 8;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_3548 != Gvar.var_3549) {
        Gvar.var_3549 = Gvar.var_3548;
        Gvar.var_3565 = 9;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
    }
    if (Gvar.var_3544 != Gvar.var_3566) {
        Gvar.var_3566 = Gvar.var_3544;
        Gvar.var_3569 = Gvar.var_3544;
        Gvar.var_3565 = 0;
        Adap.objsel(0);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        if (Gvar.var_3569 == 0) {
            Gvar.var_3569 = 1;
        }
    }
    if (Gvar.var_3559 != Gvar.var_3561) {
        Gvar.var_3561 = Gvar.var_3559;
        await Func.func0916();
    }
    await Func.func0911();
    await Func.func0910();
    return;
}

export {func0910}
