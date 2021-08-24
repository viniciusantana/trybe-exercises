const mapCities = (options) => {
    const citiesByRegion = cities.reduce((acc, cur) => {
      const { state, name, region } = cur;
      const regionState = states.find((currentState) => currentState.short === state);
      const regionCity = { city: name, state: regionState.name, };
      if (options.includeRegionNames === true) {
        const regionName = regions.find((currentRegion) => currentRegion.short === region);
        regionCity['region'] = regionName.name;
      }
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(regionCity);
      return acc;
    }, {});
    return citiesByRegion;
  }

// Não participei da mentoria. !!!