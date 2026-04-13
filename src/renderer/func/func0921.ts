import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func862
async function func0921(this: any) {
    if (Gvar.mousex < 330 && Gvar.mousex > 10 && Gvar.mousey > 10 && Gvar.mousey < 330 && await Adap.ginfo(2) == 0 && await Adap.ginfo(0) > Gvar.var_3583 && await Adap.ginfo(0) < Gvar.var_3585 && await Adap.ginfo(1) > Gvar.var_3584 && await Adap.ginfo(1) < Gvar.var_3586) {
        Gvar.var_3614 = Gvar.var_3578;
        Gvar.var_3615 = Gvar.var_3579;
        if (Gvar.var_3614 < 5 || Gvar.var_3614 > 56 || Gvar.var_3615 < 5 || Gvar.var_3615 > 37) {
            await Func.func0910();
            return;
        }
        if (Gvar.var_82[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3565 = 7;
            Gvar.var_3140 = Gvar.var_82[Gvar.var_3614][Gvar.var_3615];
            Gvar.enemy_list = Gvar.var_83[Gvar.var_3140].Var0;
            Gvar.var_3616 = "p" + Gvar.enemy_list + "e";
            Gvar.var_3617 = Adap.instr(Gvar.var_3618, 0, Gvar.var_3616);
            Gvar.var_3619 = Math.floor(Gvar.var_3617 / 12);
            Gvar.var_3545 = Gvar.var_3619;
            Gvar.var_3546 = Gvar.var_3545;
            Adap.clrobj(Gvar.data0 = 2, Gvar.data1 = 2);
            Adap.objsize(135);
            Adap.pos(Gvar.var_3528 + 44, Gvar.var_3529);
            Adap.combox(Gvar.var_3545, 100, Gvar.var_890);
            Gvar.var_3574 = Gvar.var_83[Gvar.var_3140].Var16;
            Gvar.var_3592 = Gvar.var_3574;
            Gvar.var_3577 = Gvar.var_3591[Gvar.var_3545];
            await Func.func0907();
            Gvar.var_3546 = Gvar.var_3545;
            Gvar.var_3565 = 7;
            Adap.objsel(0);
            await Func.func0910();
            return;
        }
        if (Gvar.var_65[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3565 = 6;
            await Func.func0910();
            return;
        }
        if (Gvar.var_77[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3565 = 8;
            Gvar.var_3140 = Gvar.var_77[Gvar.var_3614][Gvar.var_3615];
            Gvar.var_3620 = Gvar.var_78[Gvar.var_3140].Var0;
            Gvar.var_3616 = "p" + Gvar.var_3620 + "e";
            Gvar.var_3617 = Adap.instr(Gvar.var_3621, 0, Gvar.var_3616);
            Gvar.var_3619 = Math.floor(Gvar.var_3617 / 12);
            Gvar.var_873 = Gvar.var_3619;
            Gvar.var_3547 = Gvar.var_873;
            Adap.clrobj(Gvar.data0 = 3, Gvar.data1 = 3);
            Adap.objsize(135);
            Adap.pos(Gvar.var_3524 + 44, Gvar.var_3525);
            Adap.combox(Gvar.var_873, 100, Gvar.var_874);
            Gvar.var_3550 = 0;
            if (Gvar.var_3620 >= 100 && Gvar.var_3620 < 400) {
                Gvar.var_3550 = 1;
                Gvar.var_3553 = Gvar.var_78[Gvar.var_3140].Var4;
                Gvar.var_3556 = Gvar.var_3553;
            }
            if (Gvar.var_3620 >= 400 && Gvar.var_3620 < 500) {
                Gvar.var_3550 = 2;
                Gvar.var_3554 = Gvar.var_78[Gvar.var_3140].Var3;
                Gvar.var_3557 = Gvar.var_3554;
            }
            if (Gvar.var_3620 >= 800 && Gvar.var_3620 < 900) {
                Gvar.var_3550 = 3;
                Gvar.var_3554 = Gvar.var_78[Gvar.var_3140].Var7;
                Gvar.var_3557 = Gvar.var_3554;
            }
            if (Gvar.var_3620 == 1) {
                Gvar.var_3550 = 4;
                Gvar.var_3555 = Math.floor(Gvar.var_78[Gvar.var_3140].Var13 / 100);
                Gvar.var_3558 = Gvar.var_3555;
            }
            if (Gvar.var_3550 == 0) {
                await Func.func0904();
            }
            if (Gvar.var_3550 == 1) {
                await Func.func0901();
            }
            if (Gvar.var_3550 == 2) {
                await Func.func0902();
            }
            if (Gvar.var_3550 == 3) {
                await Func.func0902();
            }
            if (Gvar.var_3550 == 4) {
                await Func.func0903();
            }
            Gvar.var_3551 = Gvar.var_3550;
            await Func.func0910();
            return;
        }
        if (Gvar.var_80[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3565 = 9;
            Gvar.var_3140 = Gvar.var_80[Gvar.var_3614][Gvar.var_3615];
            Gvar.var_3323 = Gvar.var_81[Gvar.var_3140][0];
            Gvar.var_3616 = "p" + Gvar.var_3323 + "e";
            Gvar.var_3617 = Adap.instr(Gvar.var_3324, 0, Gvar.var_3616);
            Gvar.var_3619 = Math.floor(Gvar.var_3617 / 12);
            Gvar.var_3548 = Gvar.var_3619;
            Gvar.var_3549 = Gvar.var_3548;
            Adap.clrobj(Gvar.data0 = 4, Gvar.data1 = 4);
            Adap.objsize(135);
            Adap.pos(Gvar.var_3526 + 44, Gvar.var_3527);
            Adap.combox(Gvar.var_3548, 100, Gvar.var_886);
            await Func.func0910();
            return;
        }
        if (Gvar.var_73[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3565 = 5;
            await Func.func0910();
            return;
        }
        if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 14 || Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 21 || Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 22 || Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 23 || Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 24) {
            Gvar.var_3565 = 1;
            await Func.func0910();
            return;
        }
        if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 0) {
            Gvar.var_3565 = 2;
            await Func.func0910();
            return;
        }
        if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 13) {
            Gvar.var_3565 = 3;
            await Func.func0910();
            return;
        }
        if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] != 0 && Gvar.var_71[Gvar.var_3614][Gvar.var_3615] <= 12) {
            Gvar.var_3565 = 0;
            Gvar.var_3569 = Gvar.var_71[Gvar.var_3614][Gvar.var_3615];
            Gvar.var_3544 = Gvar.var_3569;
            Gvar.var_3566 = Gvar.var_3544;
    
            Adap.clrobj(1, 1);
            Adap.objsize(50);
            Adap.pos(Gvar.var_3510 + 45, Gvar.var_3511);
            Adap.combox(Gvar.var_3544, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
            await Func.func0910();
            return;
        }
    }
    await Func.func0910();
    return;
}

export {func0921}
