/**
 * func324 — func324 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func324(this: any) {
        Adap.dbgprt(324);
        Adap.gmode(2, null, null, null);
        Gvar.var_1145 = 0;
        if (Gvar.var_585 == 1) {
            Gvar.var_1145 = 2;
        }
        if (Gvar.var_585 == 2) {
            Gvar.var_1145 = 5;
        }
        if (Gvar.var_585 == 3) {
            Gvar.var_1145 = 10;
        }
        if (Gvar.var_409 == 0) {
            Gvar.var_778 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_778 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_778 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_778 = 30;
        }
        if (Gvar.var_409 == 4) {
            Gvar.var_778 = 40;
        }
        if (Gvar.var_217 == 1) {
            Gvar.var_778 = 0;
        }
        Gvar.var_449 = Gvar.var_67 - 5;
        Gvar.var_763 = -1;
        if (Gvar.var_449 < 0) {
            Gvar.var_449 = 0;
        }
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            Gvar.var_447 = Gvar.var_66 - 5;
            Gvar.var_764 = -1;
            if (Gvar.var_447 < 0) {
                Gvar.var_447 = 0;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                Gvar.var_1146 = Gvar.var_447 - 1;
                if (Gvar.var_1146 < 0) {
                    Gvar.var_1146 = 0;
                }
                Gvar.var_1147 = Gvar.var_447 + 1;
                Gvar.var_1148 = Gvar.var_449 - 1;
                if (Gvar.var_1148 < 0) {
                    Gvar.var_1148 = 0;
                }
                Gvar.var_1149 = Gvar.var_449 + 1;
                if (Gvar.var_199 == 4) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 - Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 + Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - Gvar.var_778 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_778 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 - Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_778 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 + Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_778 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 - Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - Gvar.var_778 + Gvar.var_1145;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 + Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - Gvar.var_778 + Gvar.var_1145;
                }
                Adap.pos(Gvar.var_1150, Gvar.var_1151);
                // 床の描写
                if (Gvar.var_71[Gvar.var_447][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_449] <= 12) {
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] <= 4) {
                        Adap.gcopy(5, 0, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] >= 5 && Gvar.var_87[Gvar.var_447][Gvar.var_449] <= 7) {
                        Adap.gcopy(5, 40, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 8 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 9) {
                        Adap.gcopy(5, 80, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                }
                if (Gvar.var_71[Gvar.var_447][Gvar.var_449] == 14) {
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] <= 4) {
                        Adap.gcopy(5, 120, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] >= 5 && Gvar.var_87[Gvar.var_447][Gvar.var_449] <= 7) {
                        Adap.gcopy(5, 160, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 8 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 9) {
                        Adap.gcopy(5, 200, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                }
                if (Gvar.var_349 >= 1 && Gvar.var_71[Gvar.var_447][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_449] != 13 && Gvar.var_71[Gvar.var_447][Gvar.var_449] <= 14) {
                    Gvar.var_1152 = 0;
                    if (Gvar.var_346[0][1] == Gvar.var_447 && Gvar.var_346[0][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[1][1] == Gvar.var_447 && Gvar.var_346[1][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[2][1] == Gvar.var_447 && Gvar.var_346[2][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[3][1] == Gvar.var_447 && Gvar.var_346[3][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[4][1] == Gvar.var_447 && Gvar.var_346[4][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[6][1] == Gvar.var_447 && Gvar.var_346[6][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[7][1] == Gvar.var_447 && Gvar.var_346[7][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[8][1] == Gvar.var_447 && Gvar.var_346[8][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    if (Gvar.var_346[9][1] == Gvar.var_447 && Gvar.var_346[9][2] == Gvar.var_449) {
                        Gvar.var_1152 = 1;
                    }
                    // "img_mychara.gif" の5行目の右側にある土塊
                    if (Gvar.var_1152 == 1) {
                        if (Gvar.var_349 == 1) {
                            Adap.gcopy(3, 1320, 160, 40, 40);
                        }
                        if (Gvar.var_349 == 2) {
                            Adap.gcopy(3, 1360, 160, 40, 40);
                        }
                        if (Gvar.var_349 == 3) {
                            Adap.gcopy(3, 1400, 160, 40, 40);
                        }
                        if (Gvar.var_349 == 4) {
                            Adap.gcopy(3, 1440, 160, 40, 40);
                        }
                        if (Gvar.var_349 == 5) {
                            Adap.gcopy(3, 1480, 160, 40, 40);
                        }
                    }
                }
                // 壁の描写 (明るい箇所と暗い箇所両方)
                if (Gvar.var_71[Gvar.var_447][Gvar.var_449] == 0) {
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] <= 5) {
                        Adap.gcopy(5, 240, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 6 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 7) {
                        Adap.gcopy(5, 280, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 8 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 9) {
                        Adap.gcopy(5, 320, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0) {
                        Adap.gcopy(5, 760, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0) {
                        Adap.gcopy(5, 800, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 840, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 880, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0) {
                        Adap.gcopy(5, 520, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0) {
                        Adap.gcopy(5, 560, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 480, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0) {
                        if (Gvar.var_87[Gvar.var_447][Gvar.var_449] <= 3) {
                            Adap.gcopy(5, 360, Gvar.y_axis_map_image * 40, 40, 40);
                        }
                        if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 4 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 5) {
                            Adap.gcopy(5, 400, Gvar.y_axis_map_image * 40, 40, 40);
                        }
                        if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 6 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 7) {
                            Adap.gcopy(5, 440, Gvar.y_axis_map_image * 40, 40, 40);
                        }
                        if (Gvar.var_87[Gvar.var_447][Gvar.var_449] == 8 || Gvar.var_87[Gvar.var_447][Gvar.var_449] == 9) {
                            if (Gvar.var_1153 == 0 || Gvar.var_1153 == 1 || Gvar.var_1153 == 8) {
                                Adap.gcopy(5, 1240, Gvar.y_axis_map_image * 40, 40, 40);
                            }
                            if (Gvar.var_1153 == 2 || Gvar.var_1153 == 3 || Gvar.var_1153 == 9) {
                                Adap.gcopy(5, 1280, Gvar.y_axis_map_image * 40, 40, 40);
                            }
                            if (Gvar.var_1153 == 4 || Gvar.var_1153 == 5 || Gvar.var_1153 == 10) {
                                Adap.gcopy(5, 1320, Gvar.y_axis_map_image * 40, 40, 40);
                            }
                            if (Gvar.var_1153 == 6 || Gvar.var_1153 == 7 || Gvar.var_1153 == 11) {
                                Adap.gcopy(5, 1360, Gvar.y_axis_map_image * 40, 40, 40);
                            }
                        }
                    }
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 600, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 640, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 680, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 720, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0) {
                        Adap.gcopy(5, 1000, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0) {
                        Adap.gcopy(5, 1040, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 1080, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0) {
                        Adap.gcopy(5, 1120, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] <= 14 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] <= 14 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 0 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] <= 14 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 0 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] <= 14) {
                        Adap.gcopy(5, 1160, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                }
                if (Gvar.var_71[Gvar.var_447][Gvar.var_449] == 13) {
                    if (Gvar.var_1153 == 0 || Gvar.var_1153 == 1 || Gvar.var_1153 == 2 || Gvar.var_1153 == 3) {
                        Adap.gcopy(5, 1520, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_1153 == 4 || Gvar.var_1153 == 5 || Gvar.var_1153 == 6 || Gvar.var_1153 == 7) {
                        Adap.gcopy(5, 1560, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_1153 == 8 || Gvar.var_1153 == 9 || Gvar.var_1153 == 10 || Gvar.var_1153 == 11) {
                        Adap.gcopy(5, 1600, Gvar.y_axis_map_image * 40, 40, 40);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13) {
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                            Adap.pos(Gvar.var_1150 + 8, Gvar.var_1151);
                            Adap.gcopy(5, 1400 + 8, Gvar.y_axis_map_image * 40, 24, 4);
                        }
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13) {
                            Adap.pos(Gvar.var_1150 + 8, Gvar.var_1151);
                            Adap.gcopy(5, 1400 + 8, Gvar.y_axis_map_image * 40, 32, 4);
                        }
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151);
                            Adap.gcopy(5, 1400, Gvar.y_axis_map_image * 40, 32, 4);
                        }
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151);
                            Adap.gcopy(5, 1400, Gvar.y_axis_map_image * 40, 40, 4);
                        }
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13) {
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                            Adap.pos(Gvar.var_1150 + 8, Gvar.var_1151 + 36);
                            Adap.gcopy(5, 1400 + 8, Gvar.y_axis_map_image * 40 + 36, 24, 4);
                        }
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13) {
                            Adap.pos(Gvar.var_1150 + 8, Gvar.var_1151 + 36);
                            Adap.gcopy(5, 1400 + 8, Gvar.y_axis_map_image * 40 + 36, 32, 4);
                        }
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151 + 36);
                            Adap.gcopy(5, 1400, Gvar.y_axis_map_image * 40 + 36, 32, 4);
                        }
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151 + 36);
                            Adap.gcopy(5, 1400, Gvar.y_axis_map_image * 40 + 36, 40, 4);
                        }
                    }
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13) {
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151 + 8);
                            Adap.gcopy(5, 1440, Gvar.y_axis_map_image * 40 + 8, 4, 24);
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151);
                            Adap.gcopy(5, 1440, Gvar.y_axis_map_image * 40, 4, 32);
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151 + 8);
                            Adap.gcopy(5, 1440, Gvar.y_axis_map_image * 40 + 8, 4, 32);
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13) {
                            Adap.pos(Gvar.var_1150, Gvar.var_1151);
                            Adap.gcopy(5, 1440, Gvar.y_axis_map_image * 40, 4, 40);
                        }
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13) {
                            Adap.pos(Gvar.var_1150 + 36, Gvar.var_1151 + 8);
                            Adap.gcopy(5, 1440 + 36, Gvar.y_axis_map_image * 40 + 8, 4, 24);
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13) {
                            Adap.pos(Gvar.var_1150 + 36, Gvar.var_1151);
                            Adap.gcopy(5, 1440 + 36, Gvar.y_axis_map_image * 40, 4, 32);
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13) {
                            Adap.pos(Gvar.var_1150 + 36, Gvar.var_1151 + 8);
                            Adap.gcopy(5, 1440 + 36, Gvar.y_axis_map_image * 40 + 8, 4, 32);
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13) {
                            Adap.pos(Gvar.var_1150 + 36, Gvar.var_1151);
                            Adap.gcopy(5, 1440 + 36, Gvar.y_axis_map_image * 40, 4, 40);
                        }
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13) {
                        Adap.pos(Gvar.var_1150, Gvar.var_1151);
                        Adap.gcopy(5, 1480, Gvar.y_axis_map_image * 40, 8, 8);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != 13) {
                        Adap.pos(Gvar.var_1150, Gvar.var_1151 + 32);
                        Adap.gcopy(5, 1480, Gvar.y_axis_map_image * 40 + 32, 8, 8);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] != 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                        Adap.pos(Gvar.var_1150 + 32, Gvar.var_1151);
                        Adap.gcopy(5, 1480 + 32, Gvar.y_axis_map_image * 40, 8, 8);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] != 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != 13) {
                        Adap.pos(Gvar.var_1150 + 32, Gvar.var_1151 + 32);
                        Adap.gcopy(5, 1480 + 32, Gvar.y_axis_map_image * 40 + 32, 8, 8);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1146][Gvar.var_1148] != 13) {
                        Adap.pos(Gvar.var_1150, Gvar.var_1151);
                        Adap.gcopy(5, 1480 + 16, Gvar.y_axis_map_image * 40 + 16, 4, 4);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_1148] != 13) {
                        Adap.pos(Gvar.var_1150 + 37, Gvar.var_1151);
                        Adap.gcopy(5, 1480 + 21, Gvar.y_axis_map_image * 40 + 16, 4, 4);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1146][Gvar.var_1149] != 13) {
                        Adap.pos(Gvar.var_1150 - 1, Gvar.var_1151 + 37);
                        Adap.gcopy(5, 1480 + 15, Gvar.y_axis_map_image * 40 + 22, 4, 4);
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13 && Gvar.var_71[Gvar.var_1147][Gvar.var_1149] != 13) {
                        Adap.pos(Gvar.var_1150 + 37, Gvar.var_1151 + 37);
                        Adap.gcopy(5, 1480 + 21, Gvar.y_axis_map_image * 40 + 22, 4, 4);
                    }
                }
                Gvar.var_764++;
                Gvar.var_447++;
            }
            Gvar.var_763++;
            Gvar.var_449++;
        }
        // Ver0.1403にて修正。
        if (Gvar.var_262 == 1 && Gvar.var_595 != 2) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.func163(); // ヴェネチアホテルのアイテム配置
        }
        // Ver0.1403にて追加。
        if (Gvar.var_262 == 1 && Gvar.var_595 == 2) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.func163b(); // 酒場の配置(マップ読み込み)
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            await Func.func164(); // 幽霊部屋の配置(マップ読み込み)
        }

        return;
}

export {func324}
  