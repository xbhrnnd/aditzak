export interface IIndikatiboaBizkaiera {
  orain: {
    nor: INorBizkaiera;
    nor_nori: INorNoriBizkaiera;
    nor_nork: INorNorkBizkaiera;
    nor_nori_nork: {
      singularra: INorNoriNorkBizkaiera;
      plurala: INorNoriNorkBizkaiera;
    };
  };
  lehen: {
    nor: INorBizkaiera;
    nor_nori: INorNoriBizkaiera;
    nor_nork: INorNorkBizkaiera;
    nor_nori_nork: {
      singularra: INorNoriNorkBizkaiera;
      plurala: INorNoriNorkBizkaiera;
    };
  };
  baldintza: {
    nor: INorBizkaiera;
    nor_nori: INorNoriBizkaiera;
    nor_nork: INorNorkBizkaiera;
    nor_nori_nork: {
      singularra: INorNoriNorkBizkaiera;
      plurala: INorNoriNorkBizkaiera;
    };
  };
  etorkizunekoa: {
    nor: INorBizkaiera;
    nor_nori: INorNoriBizkaiera;
    nor_nork: INorNorkBizkaiera;
    nor_nori_nork: {
      singularra: INorNoriNorkBizkaiera;
      plurala: INorNoriNorkBizkaiera;
    };
  };
  iraganekoa: {
    nor: INorBizkaiera;
    nor_nori: INorNoriBizkaiera;
    nor_nork: INorNorkBizkaiera;
    nor_nori_nork: {
      singularra: INorNoriNorkBizkaiera;
      plurala: INorNoriNorkBizkaiera;
    };
  };
}

export interface INorBizkaiera {
  ni: string;
  hi: string;
  bera: string;
  gu: string;
  zu: string;
  zuek: string;
  eurak: string;
}

export interface INorNoriBizkaiera {
  ni: {
    hiri: string;
    berari: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
  hi: {
    niri: string;
    berari: string;
    guri: string;
    eurei: string;
  };
  bera: {
    niri: string;
    hiri: string;
    berari: string;
    guri: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
  gu: {
    hiri: string;
    berari: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
  zu: {
    niri: string;
    berari: string;
    guri: string;
    eurei: string;
  };
  zuek: {
    niri: string;
    berari: string;
    guri: string;
    eurei: string;
  };
  eurak: {
    niri: string;
    hiri: string;
    berari: string;
    guri: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
}

export interface INorNorkBizkaiera {
  nik: {
    hi: string;
    bera: string;
    zu: string;
    zuek: string;
    eurak: string;
  };
  hik: {
    ni: string;
    bera: string;
    gu: string;
    eurak: string;
  };
  berak: {
    ni: string;
    hi: string;
    bera: string;
    gu: string;
    zu: string;
    zuek: string;
    eurak: string;
  };
  guk: {
    hi: string;
    bera: string;
    zu: string;
    zuek: string;
    eurak: string;
  };
  zuk: {
    ni: string;
    bera: string;
    gu: string;
    eurak: string;
  };
  zuek: {
    ni: string;
    bera: string;
    gu: string;
    eurak: string;
  };
  eurek: {
    ni: string;
    hi: string;
    bera: string;
    gu: string;
    zu: string;
    zuek: string;
    eurak: string;
  };
}

export interface INorNoriNorkBizkaiera {
  nik: {
    hiri: string;
    berari: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
  hik: {
    niri: string;
    berari: string;
    guri: string;
    eurei: string;
  };
  berak: {
    niri: string;
    hiri: string;
    berari: string;
    guri: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
  guk: {
    hiri: string;
    berari: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
  zuk: {
    niri: string;
    berari: string;
    guri: string;
    eurei: string;
  };
  zuek: {
    niri: string;
    berari: string;
    guri: string;
    eurei: string;
  };
  eurek: {
    niri: string;
    hiri: string;
    berari: string;
    guri: string;
    zuri: string;
    zuei: string;
    eurei: string;
  };
}
