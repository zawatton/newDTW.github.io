/**
 * func502 — func502 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func502(this: any) {
        Adap.dbgprt(502);
        Gvar.var_2246 = 113;
        Gvar.var_314 = Adap.dim(Gvar.var_2246);
        for (let cnt1 = 0; cnt1 < 112; ++cnt1) {
            Gvar.var_2247 = Adap.rnd(cnt1 + 1);
            Gvar.var_314[cnt1] = Gvar.var_314[Gvar.var_2247];
            Gvar.var_314[Gvar.var_2247] = cnt1;
        }
        Gvar.var_862[584][1] = Gvar.var_314[1];
        Gvar.var_862[585][1] = Gvar.var_314[2];
        Gvar.var_862[586][1] = Gvar.var_314[3];
        Gvar.var_862[587][1] = Gvar.var_314[4];
        Gvar.var_862[588][1] = Gvar.var_314[5];
        Gvar.var_862[589][1] = Gvar.var_314[6];
        Gvar.var_862[590][1] = Gvar.var_314[7];
        Gvar.var_862[507][1] = Gvar.var_314[8];
        Gvar.var_862[508][1] = Gvar.var_314[9];
        Gvar.var_862[509][1] = Gvar.var_314[10];
        Gvar.var_862[510][1] = Gvar.var_314[11];
        Gvar.var_862[511][1] = Gvar.var_314[12];
        Gvar.var_862[512][1] = Gvar.var_314[13];
        Gvar.var_862[513][1] = Gvar.var_314[14];
        Gvar.var_862[514][1] = Gvar.var_314[15];
        Gvar.var_862[515][1] = Gvar.var_314[16];
        Gvar.var_862[516][1] = Gvar.var_314[17];
        Gvar.var_862[517][1] = Gvar.var_314[18];
        Gvar.var_862[518][1] = Gvar.var_314[19];
        Gvar.var_862[519][1] = Gvar.var_314[20];
        Gvar.var_862[520][1] = Gvar.var_314[21];
        Gvar.var_862[560][1] = Gvar.var_314[22];
        Gvar.var_862[561][1] = Gvar.var_314[23];
        Gvar.var_862[562][1] = Gvar.var_314[24];
        Gvar.var_862[563][1] = Gvar.var_314[25];
        Gvar.var_862[564][1] = Gvar.var_314[26];
        Gvar.var_862[565][1] = Gvar.var_314[27];
        Gvar.var_862[566][1] = Gvar.var_314[28];
        Gvar.var_862[567][1] = Gvar.var_314[29];
        Gvar.var_862[568][1] = Gvar.var_314[30];
        Gvar.var_862[569][1] = Gvar.var_314[31];
        Gvar.var_862[570][1] = Gvar.var_314[32];
        Gvar.var_862[571][1] = Gvar.var_314[33];
        Gvar.var_862[572][1] = Gvar.var_314[34];
        Gvar.var_862[573][1] = Gvar.var_314[35];
        Gvar.var_862[574][1] = Gvar.var_314[36];
        Gvar.var_862[575][1] = Gvar.var_314[37];
        Gvar.var_862[576][1] = Gvar.var_314[38];
        Gvar.var_862[577][1] = Gvar.var_314[39];
        Gvar.var_862[578][1] = Gvar.var_314[40];
        Gvar.var_862[579][1] = Gvar.var_314[41];
        Gvar.var_862[580][1] = Gvar.var_314[42];
        Gvar.var_862[581][1] = Gvar.var_314[43];
        Gvar.var_862[100][1] = Gvar.var_314[44];
        Gvar.var_862[101][1] = Gvar.var_314[45];
        Gvar.var_862[102][1] = Gvar.var_314[46];
        Gvar.var_862[103][1] = Gvar.var_314[47];
        Gvar.var_862[104][1] = Gvar.var_314[48];
        Gvar.var_862[105][1] = Gvar.var_314[49];
        Gvar.var_862[106][1] = Gvar.var_314[50];
        Gvar.var_862[107][1] = Gvar.var_314[51];
        Gvar.var_862[108][1] = Gvar.var_314[52];
        Gvar.var_862[109][1] = Gvar.var_314[53];
        Gvar.var_862[111][1] = Gvar.var_314[54];
        Gvar.var_862[112][1] = Gvar.var_314[55];
        Gvar.var_862[113][1] = Gvar.var_314[56];
        Gvar.var_862[114][1] = Gvar.var_314[57];
        Gvar.var_862[115][1] = Gvar.var_314[58];
        Gvar.var_862[116][1] = Gvar.var_314[59];
        Gvar.var_862[117][1] = Gvar.var_314[60];
        Gvar.var_862[118][1] = Gvar.var_314[61];
        Gvar.var_862[119][1] = Gvar.var_314[62];
        Gvar.var_862[120][1] = Gvar.var_314[63];
        Gvar.var_862[121][1] = Gvar.var_314[64];
        Gvar.var_862[122][1] = Gvar.var_314[65];
        Gvar.var_862[123][1] = Gvar.var_314[66];
        Gvar.var_862[124][1] = Gvar.var_314[67];
        Gvar.var_862[125][1] = Gvar.var_314[68];
        Gvar.var_862[126][1] = Gvar.var_314[69];
        Gvar.var_862[200][1] = Gvar.var_314[70];
        Gvar.var_862[201][1] = Gvar.var_314[71];
        Gvar.var_862[202][1] = Gvar.var_314[72];
        Gvar.var_862[203][1] = Gvar.var_314[73];
        Gvar.var_862[204][1] = Gvar.var_314[74];
        Gvar.var_862[205][1] = Gvar.var_314[75];
        Gvar.var_862[206][1] = Gvar.var_314[76];
        Gvar.var_862[207][1] = Gvar.var_314[77];
        Gvar.var_862[208][1] = Gvar.var_314[78];
        Gvar.var_862[209][1] = Gvar.var_314[79];
        Gvar.var_862[210][1] = Gvar.var_314[80];
        Gvar.var_862[300][1] = Gvar.var_314[81];
        Gvar.var_862[301][1] = Gvar.var_314[82];
        Gvar.var_862[302][1] = Gvar.var_314[83];
        Gvar.var_862[303][1] = Gvar.var_314[84];
        Gvar.var_862[304][1] = Gvar.var_314[85];
        Gvar.var_862[305][1] = Gvar.var_314[86];
        Gvar.var_862[306][1] = Gvar.var_314[87];
        Gvar.var_862[307][1] = Gvar.var_314[88];
        Gvar.var_862[308][1] = Gvar.var_314[89];
        Gvar.var_862[309][1] = Gvar.var_314[90];
        Gvar.var_862[310][1] = Gvar.var_314[91];
        Gvar.var_862[311][1] = Gvar.var_314[92];
        Gvar.var_862[312][1] = Gvar.var_314[93];
        Gvar.var_862[313][1] = Gvar.var_314[94];
        Gvar.var_862[314][1] = Gvar.var_314[95];
        Gvar.var_862[315][1] = Gvar.var_314[96];
        Gvar.var_862[316][1] = Gvar.var_314[97];
        Gvar.var_862[317][1] = Gvar.var_314[98];
        Gvar.var_862[318][1] = Gvar.var_314[99];
        Gvar.var_862[319][1] = Gvar.var_314[0];
        Gvar.var_862[320][1] = Gvar.var_314[100];
        Gvar.var_862[321][1] = Gvar.var_314[101];
        Gvar.var_862[322][1] = Gvar.var_314[102];
        Gvar.var_862[323][1] = Gvar.var_314[103];
        Gvar.var_862[324][1] = Gvar.var_314[104];
        Gvar.var_862[325][1] = Gvar.var_314[105];
        Gvar.var_862[326][1] = Gvar.var_314[106];
        Gvar.var_862[327][1] = Gvar.var_314[107];
        Gvar.var_862[328][1] = Gvar.var_314[108];
        Gvar.var_862[329][1] = Gvar.var_314[109];
        Gvar.var_862[582][1] = Gvar.var_314[110];
        Gvar.var_862[583][1] = Gvar.var_314[111];
        Gvar.var_862[395][1] = Gvar.var_314[112];
        Gvar.var_2246 = 16;
        Gvar.var_314 = Adap.dim(Gvar.var_2246);
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            Gvar.var_2247 = Adap.rnd(cnt1 + 1);
            Gvar.var_314[cnt1] = Gvar.var_314[Gvar.var_2247];
            Gvar.var_314[Gvar.var_2247] = cnt1;
        }
        Gvar.var_862[805][1] = Gvar.var_314[1];
        Gvar.var_862[806][1] = Gvar.var_314[2];
        Gvar.var_862[807][1] = Gvar.var_314[3];
        Gvar.var_862[808][1] = Gvar.var_314[4];
        Gvar.var_862[809][1] = Gvar.var_314[5];
        Gvar.var_862[815][1] = Gvar.var_314[6];
        Gvar.var_862[816][1] = Gvar.var_314[7];
        Gvar.var_862[817][1] = Gvar.var_314[8];
        Gvar.var_862[850][1] = Gvar.var_314[9];
        Gvar.var_862[851][1] = Gvar.var_314[10];
        Gvar.var_862[852][1] = Gvar.var_314[11];
        Gvar.var_862[853][1] = Gvar.var_314[12];
        Gvar.var_862[854][1] = Gvar.var_314[13];
        Gvar.var_862[800][1] = Gvar.var_314[14];
        return;
}

export {func502}
