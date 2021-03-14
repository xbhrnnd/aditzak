export interface IIndikatiboaBatua {
  orain: {
    nor: INorBatua;
    nor_nori: INorNoriBatua;
    nor_nork: INorNorkBatua;
    nor_nori_nork: {
      singularra: INorNoriNorkBatua;
      plurala: INorNoriNorkBatua;
    };
  };
  lehen: {
    nor: INorBatua;
    nor_nori: INorNoriBatua;
    nor_nork: INorNorkBatua;
    nor_nori_nork: {
      singularra: INorNoriNorkBatua;
      plurala: INorNoriNorkBatua;
    };
  };
  baldintza: {
    nor: INorBatua;
    nor_nori: INorNoriBatua;
    nor_nork: INorNorkBatua;
    nor_nori_nork: {
      singularra: INorNoriNorkBatua;
      plurala: INorNoriNorkBatua;
    };
  };
  etorkizunekoa: {
    nor: INorBatua;
    nor_nori: INorNoriBatua;
    nor_nork: INorNorkBatua;
    nor_nori_nork: {
      singularra: INorNoriNorkBatua;
      plurala: INorNoriNorkBatua;
    };
  };
  iraganekoa: {
    nor: INorBatua;
    nor_nori: INorNoriBatua;
    nor_nork: INorNorkBatua;
    nor_nori_nork: {
      singularra: INorNoriNorkBatua;
      plurala: INorNoriNorkBatua;
    };
  };
}

export interface INorBatua {
  ni: string;
  hi: string;
  hura: string;
  gu: string;
  zu: string;
  zuek: string;
  haiek: string;
}

export interface INorNoriBatua {
  ni: {
    hiri: string;
    hari: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
  hi: {
    niri: string;
    hari: string;
    guri: string;
    haiei: string;
  };
  hura: {
    niri: string;
    hiri: string;
    hari: string;
    guri: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
  gu: {
    hiri: string;
    hari: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
  zu: {
    niri: string;
    hari: string;
    guri: string;
    haiei: string;
  };
  zuek: {
    niri: string;
    hari: string;
    guri: string;
    haiei: string;
  };
  haiek: {
    niri: string;
    hiri: string;
    hari: string;
    guri: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
}

export interface INorNorkBatua {
  nik: {
    hi: string;
    hura: string;
    zu: string;
    zuek: string;
    haiek: string;
  };
  hik: {
    ni: string;
    hura: string;
    gu: string;
    haiek: string;
  };
  hark: {
    ni: string;
    hi: string;
    hura: string;
    gu: string;
    zu: string;
    zuek: string;
    haiek: string;
  };
  guk: {
    hi: string;
    hura: string;
    zu: string;
    zuek: string;
    haiek: string;
  };
  zuk: {
    ni: string;
    hura: string;
    gu: string;
    haiek: string;
  };
  zuek: {
    ni: string;
    hura: string;
    gu: string;
    haiek: string;
  };
  haiek: {
    ni: string;
    hi: string;
    hura: string;
    gu: string;
    zu: string;
    zuek: string;
    haiek: string;
  };
}

export interface INorNoriNorkBatua {
  nik: {
    hiri: string;
    hari: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
  hik: {
    niri: string;
    hari: string;
    guri: string;
    haiei: string;
  };
  hark: {
    niri: string;
    hiri: string;
    hari: string;
    guri: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
  guk: {
    hiri: string;
    hari: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
  zuk: {
    niri: string;
    hari: string;
    guri: string;
    haiei: string;
  };
  zuek: {
    niri: string;
    hari: string;
    guri: string;
    haiei: string;
  };
  haiek: {
    niri: string;
    hiri: string;
    hari: string;
    guri: string;
    zuri: string;
    zuei: string;
    haiei: string;
  };
}
