/**
 * func331 — func331 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

 // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
async function func331(this: any) {
        Adap.dbgprt(331);
        Gvar.var_1170 = "";
        if (Gvar.var_176 >= 1) {
            await Func.func333();
            return;
        }
        if (Gvar.var_175 >= 1) {
            await Func.func332();
            return;
        }
        Adap.gsel(4);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 680, 300);
        Gvar.var_1171 = 0;
        const map_elem_size = 6;

        for (let cnt1 = 0; cnt1 < Gvar.var_31 + 1; ++cnt1) {
            Gvar.var_1172 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_32 + 1; ++cnt2) {
                Adap.color(Gvar.var_687, Gvar.var_688, Gvar.var_689);
                if (Gvar.var_71[Gvar.var_1171][Gvar.var_1172] != 0 && Gvar.var_71[Gvar.var_1171][Gvar.var_1172] != 13) {
                    if (Gvar.var_74[Gvar.var_1171][Gvar.var_1172] == 1 || Gvar.var_102 == 1) {

                        Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + map_elem_size, Gvar.var_1172 * Gvar.var_38 + map_elem_size);
                    }
                }
                Gvar.var_1173 = 1;
                for (let cnt3 = 0; cnt3 < 12; ++cnt3) {
                    if (Gvar.var_71[Gvar.var_1171][Gvar.var_1172] == Gvar.var_1173) {
                        if (Gvar.var_74[Gvar.var_1171][Gvar.var_1172] == 0 && (Gvar.var_75[Gvar.var_1173] == 1 || Gvar.var_102 == 1)) {
    
                            Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + map_elem_size, Gvar.var_1172 * Gvar.var_38 + map_elem_size);
                        }
                    }
                    Gvar.var_1173 = Gvar.var_1173 + 1;
                }
                Adap.color(240, 240, 20);
                if (Gvar.var_71[Gvar.var_1171][Gvar.var_1172] != 0 && Gvar.var_71[Gvar.var_1171][Gvar.var_1172] != 13) {
                    if (Gvar.var_74[Gvar.var_1171][Gvar.var_1172] == 2) {

                        Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + map_elem_size, Gvar.var_1172 * Gvar.var_38 + map_elem_size);
                    }
                }
                Gvar.var_1172 = Gvar.var_1172 + 1;
            }
            Gvar.var_1171 = Gvar.var_1171 + 1;
        }
        Adap.gsel(7);
        Gvar.var_1174 = Gvar.var_66 - 4;
        Gvar.var_1175 = Gvar.var_66 + 4;
        Gvar.var_1176 = Gvar.var_67 - 4;
        Gvar.var_1177 = Gvar.var_67 + 4;
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 680, 300);
        Gvar.var_1171 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_31 + 1; ++cnt1) {
            Gvar.var_1172 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_32 + 1; ++cnt2) {
                Gvar.var_1178 = Gvar.var_82[Gvar.var_1171][Gvar.var_1172];
                Gvar.var_1179 = 0;
                if (Gvar.var_71[Gvar.var_1171][Gvar.var_1172] != 0 && Gvar.var_71[Gvar.var_1171][Gvar.var_1172] != 13) {
                    Gvar.var_1179 = 1;
                }
                if (Gvar.var_73[Gvar.var_1171][Gvar.var_1172] == 1 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                    // No = 365 ★階段感知の能力discを装備している時
                    if (Gvar.var_102 == 1 || Gvar.var_98 == 1 || Gvar.equip_disc[365] == 1) {
                        Adap.color(0, 255, 255);

                        Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                        Adap.color(0, 0, 0);

                        Adap.boxf(Gvar.var_1171 * Gvar.var_37 + 1, Gvar.var_1172 * Gvar.var_38 + 1, Gvar.var_1171 * Gvar.var_37 + 3, Gvar.var_1172 * Gvar.var_38 + 3);
                        Gvar.var_1179 = 5;
                    }
                }
                if (Gvar.var_73[Gvar.var_1171][Gvar.var_1172] == 2 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                    // No = 365 ★階段感知の能力discを装備している時
                    if (Gvar.var_102 == 1 || Gvar.var_99 == 1 || Gvar.equip_disc[365] == 1) {
                        Adap.color(0, 255, 255);

                        Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                        Adap.color(0, 0, 0);

                        Adap.boxf(Gvar.var_1171 * Gvar.var_37 + 1, Gvar.var_1172 * Gvar.var_38 + 1, Gvar.var_1171 * Gvar.var_37 + 3, Gvar.var_1172 * Gvar.var_38 + 3);
                        Gvar.var_1179 = 5;
                    }
                }
                if (Gvar.var_77[Gvar.var_1171][Gvar.var_1172] > 0 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                    Gvar.var_1180 = Gvar.var_77[Gvar.var_1171][Gvar.var_1172];
                    // No = 301 ハーヴェストを装備している時
                    if (Gvar.var_100 == 1 || Gvar.equip_disc[301] == 1 || Gvar.var_78[Gvar.var_1180].Var10 == 1) {
                        Adap.color(0, 255, 255);
                        Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                        Gvar.var_1179 = 3;
                    }
                }
                if (Gvar.var_80[Gvar.var_1171][Gvar.var_1172] > 0 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                    Gvar.var_1181 = Gvar.var_80[Gvar.var_1171][Gvar.var_1172];
                    // No = 303 ドラゴンズ・ドリームのdiscを装備している時 or  // Gvar.var_170 罠が見えるようになるフラグON(あくまでMAP上に見えるだけ。噴上裕也のDISC限定) or Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_1181][4] == 1 || Gvar.var_170 == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1) {
                        Adap.color(255, 0, 255);
                        Gvar.var_1182 = 0;
                        if (Gvar.var_81[Gvar.var_1181][0] == 82 || Gvar.var_81[Gvar.var_1181][0] == 86 || Gvar.var_81[Gvar.var_1181][0] == 87 || Gvar.var_81[Gvar.var_1181][0] == 88 || Gvar.var_81[Gvar.var_1181][0] == 90 || Gvar.var_81[Gvar.var_1181][0] == 91 || Gvar.var_81[Gvar.var_1181][0] == 92 || Gvar.var_81[Gvar.var_1181][0] == 93 || Gvar.var_81[Gvar.var_1181][0] == 94 || Gvar.var_81[Gvar.var_1181][0] == 99 || Gvar.var_81[Gvar.var_1181][0] == 79 || Gvar.var_81[Gvar.var_1181][0] == 80 || Gvar.var_81[Gvar.var_1181][0] == 81 || Gvar.var_81[Gvar.var_1181][0] == 78 || Gvar.var_81[Gvar.var_1181][0] == 77) {
                            Adap.color(0, 255, 255);
                            Gvar.var_1182 = 1;
                        }
                        Adap.line(Gvar.var_1171 * Gvar.var_37 - 1, Gvar.var_1172 * Gvar.var_38 - 1, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                        Adap.line(Gvar.var_1171 * Gvar.var_37 + 5, Gvar.var_1172 * Gvar.var_38 - 1, Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38 + 4);
                        Gvar.var_1179 = 2;
                        if (Gvar.var_1182 == 1) {
                            Gvar.var_1179 = 9;
                        }
                    }
                }
                if (Gvar.var_65[Gvar.var_1171][Gvar.var_1172] == 1) {
                    Adap.color(255, 255, 255);
                    Adap.pset(Gvar.var_1171 * Gvar.var_37 + 1, Gvar.var_1172 * Gvar.var_38);
                    Adap.pset(Gvar.var_1171 * Gvar.var_37 + 2, Gvar.var_1172 * Gvar.var_38);
                    Adap.pset(Gvar.var_1171 * Gvar.var_37 + 3, Gvar.var_1172 * Gvar.var_38);
                    Adap.pset(Gvar.var_1171 * Gvar.var_37 + 1, Gvar.var_1172 * Gvar.var_38 + 4);
                    Adap.pset(Gvar.var_1171 * Gvar.var_37 + 2, Gvar.var_1172 * Gvar.var_38 + 4);
                    Adap.pset(Gvar.var_1171 * Gvar.var_37 + 3, Gvar.var_1172 * Gvar.var_38 + 4);

                    Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38 + 1, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 3);
                    Gvar.var_1179 = 6;
                }
                if (Gvar.var_82[Gvar.var_1171][Gvar.var_1172] > 0 && Gvar.var_83[Gvar.var_1178].Var0 != 50) {
                    Gvar.var_1183 = 1;
                    if (Gvar.var_83[Gvar.var_1178].Var30 != 0) {
                        Gvar.var_1183 = 0;
                        if (Gvar.var_119 == 1) {
                            Gvar.var_1183 = 1;
                        }
                        if (Gvar.var_132 >= 1) { // 記憶DISC「ンドゥール」の効果発動フラグON
                            Gvar.var_1183 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_1178].Var0 == 85) {
                            // No = 320 メタリカを装備している時
                            if (Gvar.var_140 != 0 || Gvar.equip_disc[320] == 1) {
                                Gvar.var_1183 = 1;
                            }
                        }
                        // No = 312 エアロスミスを装備している時
                        if (Gvar.equip_disc[312] == 1) {
                            Gvar.var_1183 = 1;
                        }
                    }
                    if (Gvar.sympathy_id == 166) {
                        Gvar.var_1183 = 1;
                    }
                    if (Gvar.var_127 != 0 && Gvar.var_119 == 0) {
                        Gvar.var_1183 = 0;
                    }
                    if (Gvar.var_127 != 0 && Gvar.var_132 >= 1) { // 瞼が落ちていたり目が切り裂かれている場合 & 記憶DISC「ンドゥール」の効果発動フラグON
                        Gvar.var_1183 = 1;
                    }
                    if (Gvar.var_391 == 1) {
                        Gvar.var_1183 = 1;
                    }
                    if (Gvar.var_1183 == 1) {
                        Adap.color(255, 0, 0);
                        Gvar.var_1184 = 0;
                        if (Gvar.var_83[Gvar.var_1178].Var31 == 4 || Gvar.var_83[Gvar.var_1178].Var31 == 5) {
                            if (Gvar.var_83[Gvar.var_1178].Var0 != 33 && Gvar.var_83[Gvar.var_1178].Var0 != 130 && Gvar.var_83[Gvar.var_1178].Var0 != 61) {
                                Adap.color(255, 255, 0);
                                Gvar.var_1184 = 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_1178].Var10 == Gvar.var_201 && Gvar.var_201 != 14) {
    
                            Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                            Gvar.var_1179 = 4;
                            if (Gvar.var_1184 == 1) {
                                Gvar.var_1179 = 8;
                            }
                        }
                        Gvar.var_1185 = Gvar.var_1171 - 1;
                        if (Gvar.var_1185 < 0) {
                            Gvar.var_1185 = Gvar.var_1171;
                        }
                        Gvar.var_1186 = Gvar.var_1171 + 1;
                        if (Gvar.var_1186 > Gvar.var_33) {
                            Gvar.var_1186 = Gvar.var_1171;
                        }
                        Gvar.var_1187 = Gvar.var_1172 - 1;
                        if (Gvar.var_1187 < 0) {
                            Gvar.var_1187 = Gvar.var_1172;
                        }
                        Gvar.var_1188 = Gvar.var_1172 + 1;
                        if (Gvar.var_1188 > Gvar.var_34) {
                            Gvar.var_1188 = Gvar.var_1172;
                        }
                        if (Gvar.var_201 != 14 && Gvar.var_201 != 0 && Gvar.var_201 != 13) {
                            if (Gvar.var_71[Gvar.var_1185][Gvar.var_1172] == Gvar.var_201 || Gvar.var_71[Gvar.var_1186][Gvar.var_1172] == Gvar.var_201 || Gvar.var_71[Gvar.var_1171][Gvar.var_1187] == Gvar.var_201 || Gvar.var_71[Gvar.var_1171][Gvar.var_1188] == Gvar.var_201 || Gvar.var_71[Gvar.var_1185][Gvar.var_1187] == Gvar.var_201 || Gvar.var_71[Gvar.var_1185][Gvar.var_1188] == Gvar.var_201 || Gvar.var_71[Gvar.var_1186][Gvar.var_1187] == Gvar.var_201 || Gvar.var_71[Gvar.var_1186][Gvar.var_1188] == Gvar.var_201) {
        
                                Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                                Gvar.var_1179 = 4;
                                if (Gvar.var_1184 == 1) {
                                    Gvar.var_1179 = 8;
                                }
                            }
                        }
                        if (Gvar.var_65[Gvar.var_1185][Gvar.var_1172] == 1 || Gvar.var_65[Gvar.var_1186][Gvar.var_1172] == 1 || Gvar.var_65[Gvar.var_1171][Gvar.var_1187] == 1 || Gvar.var_65[Gvar.var_1171][Gvar.var_1188] == 1 || Gvar.var_65[Gvar.var_1185][Gvar.var_1187] == 1 || Gvar.var_65[Gvar.var_1185][Gvar.var_1188] == 1 || Gvar.var_65[Gvar.var_1186][Gvar.var_1187] == 1 || Gvar.var_65[Gvar.var_1186][Gvar.var_1188] == 1) {
    
                            Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                            Gvar.var_1179 = 4;
                            if (Gvar.var_1184 == 1) {
                                Gvar.var_1179 = 8;
                            }
                        }
                        // No = 312 エアロスミスのdiscを装備している時
                        if (Gvar.var_101 == 1 || Gvar.equip_disc[312] == 1 || Gvar.var_132 >= 1 || Gvar.var_391 == 1) {
    
                            Adap.boxf(Gvar.var_1171 * Gvar.var_37, Gvar.var_1172 * Gvar.var_38, Gvar.var_1171 * Gvar.var_37 + 4, Gvar.var_1172 * Gvar.var_38 + 4);
                            Gvar.var_1179 = 4;
                            if (Gvar.var_1184 == 1) {
                                Gvar.var_1179 = 8;
                            }
                        }
                    }
                }
                if (Gvar.var_407 >= 1 && Gvar.var_1171 >= Gvar.var_1174 && Gvar.var_1171 <= Gvar.var_1175 && Gvar.var_1172 >= Gvar.var_1176 && Gvar.var_1172 <= Gvar.var_1177) {
                    Gvar.var_1170 = Gvar.var_1170 + "" + Gvar.var_1179;
                }
                Gvar.var_1172 = Gvar.var_1172 + 1;
            }
            if (Gvar.var_407 >= 1 && Gvar.var_1171 >= Gvar.var_1174 && Gvar.var_1171 <= Gvar.var_1175 && Gvar.var_1172 >= Gvar.var_1176 && Gvar.var_1172 <= Gvar.var_1177) {
                if (Gvar.var_67 == 35) {
                    Gvar.var_1170 = Gvar.var_1170 + "" + 0;
                }
                if (Gvar.var_67 == 36) {
                    Gvar.var_1170 = Gvar.var_1170 + "" + 0;
                    Gvar.var_1170 = Gvar.var_1170 + "" + 0;
                }
                if (Gvar.var_67 == 37) {
                    Gvar.var_1170 = Gvar.var_1170 + "" + 0;
                    Gvar.var_1170 = Gvar.var_1170 + "" + 0;
                    Gvar.var_1170 = Gvar.var_1170 + "" + 0;
                }
            }
            Gvar.var_1171 = Gvar.var_1171 + 1;
        }
        Adap.gsel(0);
        return;
}

export {func331}
