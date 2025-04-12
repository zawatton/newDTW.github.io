import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func011(this: any) {
        Adap.dbgprt(11);
        Gvar.var_268 = 0;

        if (Gvar.equip_disc[316] == 0) {
            if (Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                if (Gvar.var_263[0] == 0 && Gvar.var_263[1] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_267] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_267];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 1;
                            Gvar.var_263[1] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[2] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_267] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_267];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 2;
                            Gvar.var_263[2] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[3] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_267] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_267];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 3;
                            Gvar.var_263[3] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[4] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_67] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_67];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 4;
                            Gvar.var_263[4] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[6] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_67] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_67];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 6;
                            Gvar.var_263[6] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[7] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_266] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_266];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 7;
                            Gvar.var_263[7] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[8] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_266] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_266];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 8;
                            Gvar.var_263[8] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[9] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_266] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_266];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 9;
                            Gvar.var_263[9] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0) {
                    if (Gvar.var_263[1] == 1 || Gvar.var_263[2] == 1 || Gvar.var_263[3] == 1 || Gvar.var_263[4] == 1 || Gvar.var_263[6] == 1 || Gvar.var_263[7] == 1 || Gvar.var_263[8] == 1 || Gvar.var_263[9] == 1) {
                        Gvar.var_268 = 0;
                        Gvar.var_263 = Adap.dim(10);
                        await Func.func011();
                        return;
                    }
                }
            }
        }
        if (Gvar.equip_disc[316] == 1) {
            if (Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                if (Gvar.var_263[0] == 0 && Gvar.var_263[1] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_267] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_267];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 1;
                            Gvar.var_263[1] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[2] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_267] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_267];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 2;
                            Gvar.var_263[2] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[3] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_267] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_267];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 3;
                            Gvar.var_263[3] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[4] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_67] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_67];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 4;
                            Gvar.var_263[4] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[6] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_67] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_67];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 6;
                            Gvar.var_263[6] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[7] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_266] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_266];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 7;
                            Gvar.var_263[7] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[8] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_266] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_266];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 8;
                            Gvar.var_263[8] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0 && Gvar.var_263[9] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_266] > 0) {
                    Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_266];
                    if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                        if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                            Gvar.var_199 = 9;
                            Gvar.var_263[9] = 1;
                            Gvar.var_263[0] = 1;
                            Gvar.var_268 = Gvar.var_269;
                        }
                    }
                }
                if (Gvar.var_263[0] == 0) {
                    if (Gvar.var_263[1] == 1 || Gvar.var_263[2] == 1 || Gvar.var_263[3] == 1 || Gvar.var_263[4] == 1 || Gvar.var_263[6] == 1 || Gvar.var_263[7] == 1 || Gvar.var_263[8] == 1 || Gvar.var_263[9] == 1) {
                        Gvar.var_268 = 0;
                        Gvar.var_263 = Adap.dim(10);
                        await Func.func011();
                        return;
                    }
                }
            }
        }
        await Func.func012();
}

export {func011}
