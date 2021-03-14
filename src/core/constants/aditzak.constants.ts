import { INDIKATIBOA_BATUA } from './batua/indikatiboaBatua.constants';
import { AHALERA_BATUA } from './batua/ahaleraBatua.constants';
import { AGINTERA_BATUA } from './batua/aginteraBatua.constants';
import { SUBJUNTIBOA_BATUA } from './batua/subjuntiboaBatua.constants';
import { INDIKATIBOA_BIZKAIERA } from './bizkaiera/indikatiboaBizkaiera.constants';
import { AHALERA_BIZKAIERA } from './bizkaiera/ahaleraBizkaiera.constants';
import { AGINTERA_BIZKAIERA } from './bizkaiera/aginteraBizkaiera.constants';
import { SUBJUNTIBOA_BIZKAIERA } from './bizkaiera/subjuntiboaBizkaiera.constants';
import { INDIKATIBOA_ZUBERERA } from './zuberera/indikatiboaZuberera.constants';
import { AHALERA_ZUBERERA } from './zuberera/ahaleraZuberera.constants';
import { AGINTERA_ZUBERERA } from './zuberera/aginteraZuberera.constants';
import { SUBJUNTIBOA_ZUBERERA } from './zuberera/subjuntiboaZuberera.constants';

export const batua = 'batua';
export const bizkaiera = 'bizkaiera';
export const zuberera = 'zuberera';
export const nafarLapurtera = 'nafar_lapurtera'

export const indikatiboaBatua = INDIKATIBOA_BATUA;
export const ahaleraBatua = AHALERA_BATUA;
export const aginteraBatua = AGINTERA_BATUA;
export const subjuntiboaBatua = SUBJUNTIBOA_BATUA;

export const indikatiboaBizkaiera = INDIKATIBOA_BIZKAIERA;
export const ahaleraBizkaiera = AHALERA_BIZKAIERA;
export const aginteraBizkaiera = AGINTERA_BIZKAIERA;
export const subjuntiboaBizkaiera = SUBJUNTIBOA_BIZKAIERA;

export const indikatiboaZuberera = INDIKATIBOA_ZUBERERA;
export const ahaleraZuberera = AHALERA_ZUBERERA;
export const aginteraZuberera = AGINTERA_ZUBERERA;
export const subjuntiboaZuberera = SUBJUNTIBOA_ZUBERERA;

export const bilatuAditza = 'Bila ezazu zure aditza';
export const ezDaTopatu = 'Ez da aditzik topatu';

export const orain = 'orain';
export const lehen = 'lehen';
export const baldintza = 'baldintza';
export const etorkizunekoa = 'etorkizunekoa';
export const iraganekoa = 'iraganekoa';

export const nor = 'nor';
export const nor_nori = 'nor_nori';
export const nor_nork = 'nor_nork';
export const nor_nori_nork = 'nor_nori_nork';

export const singularra = 'singularra';
export const plurala = 'plurala';

export const hasierakoAditzak = [{
    aditza: 'bazintuzte',
    testua: '{ batua - indikatiboa - nor/nork - baldintza - hark zuek }' },{
    aditza: 'geuazan',
    testua: '{ bizkaiera - indikatiboa - nor/nori/nork - lehen aldia - guk hiri eurak }' },{
    aditza: 'gira',
    testua: '{ zuberera - indikatiboa - nor - orain aldia - gu }' },{
    aditza: 'hintzaigukeen',
    testua: '{ batua - indikatiboa - nor/nori - iraganekoa - hi guri }' },{
    aditza: 'bazintxakoze',
    testua: '{ bizkaiera - indikatiboa - nor/nori - baldintza - zuek berari }'}]