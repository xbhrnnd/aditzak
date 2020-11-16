export interface IIndikatiboaZuberera {
  orain: {
    nor: INorZuberera;
    nor_nori: INorNoriZuberera;
    nor_nork: INorNorkZuberera;
    nor_nori_nork: {
      singularra: INorNoriNorkZuberera;
      plurala: INorNoriNorkZuberera;
    };
  };
  lehen: {
    nor: INorZuberera;
    nor_nori: INorNoriZuberera;
    nor_nork: INorNorkZuberera;
    nor_nori_nork: {
      singularra: INorNoriNorkZuberera;
      plurala: INorNoriNorkZuberera;
    };
  };
  baldintza: {
    nor: INorZuberera;
    nor_nori: INorNoriZuberera;
    nor_nork: INorNorkZuberera;
    nor_nori_nork: {
      singularra: INorNoriNorkZuberera;
      plurala: INorNoriNorkZuberera;
    };
  };
  etorkizunekoa: {
    nor: INorZuberera;
    nor_nori: INorNoriZuberera;
    nor_nork: INorNorkZuberera;
    nor_nori_nork: {
      singularra: INorNoriNorkZuberera;
      plurala: INorNoriNorkZuberera;
    };
  };
  iraganekoa: {
    nor: INorZuberera;
    nor_nori: INorNoriZuberera;
    nor_nork: INorNorkZuberera;
    nor_nori_nork: {
      singularra: INorNoriNorkZuberera;
      plurala: INorNoriNorkZuberera;
    };
  };
}

export interface INorZuberera {
  ni: string;
  hi: string;
  hura: string;
  gu: string;
  zu: string;
  zuek: string;
  haiek: string;
}

export interface INorNoriZuberera {
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

export interface INorNorkZuberera {
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

export interface INorNoriNorkZuberera {
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
