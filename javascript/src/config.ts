import baseConfig, { updateConfig } from 'seedsource-ui/lib/config'
import { get, urlEncode } from 'seedsource-ui/lib/io'
import { receiveTransfer } from 'seedsource-ui/lib/actions/variables'
import SpeciesConstraint from 'seedsource-ui/lib/containers/SpeciesConstraint'

const speciesConstraints = [
  {
    species: 'artr',
    label: 'Wyoming/Basin Big Sagebrush Range',
    serialize: ({ objective, climate }: any) => {
      const { time, model } = objective === 'seedlots' ? climate.seedlot : climate.site
      let climateFragment

      if (time === '1961_1990' || time === '1981_2010') {
        climateFragment = time
      } else {
        climateFragment = `${model}_${time}`
      }

      return {
        service: `sage_niche_${climateFragment}`,
      }
    },
  },
  {
    species: 'atva',
    label: 'Mountain big sagebrush Range',
    serialize: ({ objective, climate }: any) => {
      const { time, model } = objective === 'seedlots' ? climate.seedlot : climate.site
      let serviceName

      if (time === '1961_1990') {
        serviceName = 'hist60'
      } else if (time === '1981_2010') {
        serviceName = 'cur1980_10'
      } else {
        const year = {
          '2025': '20',
          '2055': '50',
          '2085': '80',
        }[time as string]

        serviceName = `${model}_${year}`
      }

      return {
        service: `constraints/atva/range/${serviceName}`,
      }
    },
  },
  {
    species: 'pssp',
    label: 'Blubunch wheatgrass Range',
    serialize: ({ objective, climate }: any) => {
      const { time, model } = objective === 'seedlots' ? climate.seedlot : climate.site
      let serviceName

      if (time === '1961_1990') {
        serviceName = 'hist60_90'
      } else if (time === '1981_2010') {
        serviceName = 'contemp80_10'
      } else {
        const year = {
          '2025': '2020',
          '2055': '2050',
          '2085': '2080',
        }[time as string]

        serviceName = `d${year}_${model}`
      }
      return {
        service: `constraints/pssp/range/${serviceName}`,
      }
    },
  },
]

const speciesConstraintRegions = [
  {
    species: 'artr',
    label: 'Colorado Plateau Range',
    region: 'colorado-plateau',
    serialize: () => ({ service: 'constraints/artr/region/ColoradoPlateau' }),
  },
  {
    species: 'artr',
    label: 'Columbia Basin Range',
    region: 'columbia-basin',
    serialize: () => ({ service: 'constraints/artr/region/ColumbiaBasin' }),
  },
  {
    species: 'artr',
    label: 'Great Basin Range',
    region: 'great-basin',
    serialize: () => ({ service: 'constraints/artr/region/GreatBasin' }),
  },
  {
    species: 'artr',
    label: 'Wyoming Basin Range',
    region: 'wyoming-basin',
    serialize: () => ({ service: 'constraints/artr/region/WyomingBasin' }),
  },
  {
    species: 'atva',
    label: 'Central Basin Range',
    region: 'central-basin',
    serialize: () => ({ service: 'constraints/atva/region/CentralBasin_Range' }),
  },
  {
    species: 'atva',
    label: 'Colorado Plateaus Region',
    region: 'colorado-plateaus-region',
    serialize: () => ({ service: 'constraints/atva/region/ColoradoPlateaus' }),
  },
  {
    species: 'atva',
    label: 'Columbia Plateau Region',
    region: 'columbia-plateau-region',
    serialize: () => ({ service: 'constraints/atva/region/ColumbiaPlateau' }),
  },
  {
    species: 'atva',
    label: 'Southern Rockies Region',
    region: 'southern-rockies-region',
    serialize: () => ({ service: 'constraints/atva/region/SouthernRockies' }),
  },
]

export default () => {
  updateConfig({
    apiRoot: '/csrt/',
    navbarClass: 'is-dark is-topo',
    speciesLabel: 'taxa',
    labels: [
      // Seedzones
      {
        serviceName: 'wa_new_zones-pipo',
        label: 'Washington (2002) ponderosa pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'lio-2014-10-09-seed_zone',
        label: 'Ontario',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'nesma-breedzone_pine',
        label: 'Ontario Jack pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'oregon_seed_zones-ponderosa_pine',
        label: 'Oregon ponderosa pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'oregon_seed_zones-western_white_pine',
        label: 'Oregon western white pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'r9seedzones-r9seedzones',
        label: 'Region 9',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'historic_seed_zones-historic_seed_zones',
        label: 'Oregon 1966/1973',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'nesma-breedzone_spruce',
        label: 'Ontario Black spruce',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'updatedcageneric-updatedcageneric',
        label: 'California',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'wa_new_zones-pimo',
        label: 'Washington (2002) western white pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'wa_new_zones-psme',
        label: 'Washington (2002) Douglas-fir',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'wa_new_zones-thpl',
        label: 'Washington (2002) western redcedar',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'atlantic_canada_seed_zones-atlantic_canada_seed_zones_wgs84',
        label: 'Atlantic Canada',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'oregon_seed_zones-douglas_fir',
        label: 'Oregon (1996) Douglas-fir',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'wa_new_zones-pico',
        label: 'Washington (2002) lodgepole pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'oregon_seed_zones-lodgepole_pine',
        label: 'Oregon (1996) lodgepole pine',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'oregon_seed_zones-western_red_cedar',
        label: 'Oregon (1996) western redcedar',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: '2013_revised_zones-2017_new_labels_liii_ecoregions_14june17',
        label: 'CONUS Provisional',
        style: { color: '#00FFFF' },
      },
      {
        serviceName: 'shp_bdry_seed_source_control_zones-mndnr_dissolved',
        label: 'Minnesota Seed Source Control',
        style: { color: '#00FFFF' },
      },

      // Layers
      {
        serviceName: 'us_eco_l3',
        label: 'Level III Ecoregions',
        style: { weight: 1, color: '#666', opacity: 0.5 },
      },
      {
        serviceName: 'cb_2017_us_county_20m',
        label: 'U.S. Counties',
        style: { weight: 1, color: '#559', opacity: 0.5 },
      },
    ],
    species: [
      {
        name: 'artr',
        label: 'Wyoming/Basin Big Sagebrush',
      },
      {
        name: 'atva',
        label: 'Mountain big sagebrush',
      },
      {
        name: 'psme',
        label: 'Douglas-fir',
      },
      {
        name: 'pico',
        label: 'Lodgepole pine',
      },
      {
        name: 'piba',
        label: 'Jack pine',
      },
      {
        name: 'pipo',
        label: 'Ponderosa pine',
      },
      {
        name: 'pima',
        label: 'Black spruce',
      },
      {
        name: 'thpl',
        label: 'Western red cedar',
      },
      {
        name: 'pimo',
        label: 'Western white pine',
      },
      {
        name: 'pssp',
        label: 'Bluebunch wheatgrass',
      },
    ],
    functions: [
      {
        name: 'FD',
        label: 'Flower Date',
        fn: '381 + (-1.72*LAT) + (-0.011*DD_18)',
        transfer: 10.4,
        units: 'days',
        customTransfer: false,
        species: ['artr', 'atva'],
      },
      {
        name: 'S',
        label: 'Survival',
        fn: '-6.3 + (0.284*TD/10) + (0.007*PPT_sm)', // TD values are multiplied, so divide by 10
        transfer: 0.46,
        customTransfer: false,
        species: ['artr'],
      },
      {
        name: 'S-atva',
        label: 'Survival',
        fn: '-5.074 + (0.216*TD/10)',
        transfer: 0.292,
        customTransfer: false,
        species: ['atva'],
      },
      {
        name: 'PC1',
        label: 'PC1',
        fn: '17.12 + 0.02*TD - 0.02*SHM + 0.47*EMT',
        transfer: 11.53,
        customTransfer: false,
        species: ['pssp'],
      },
      {
        name: 'PC2',
        label: 'PC2',
        fn: '3.37 + 0.02*TD - 0.007*SHM - 0.02*FFP',
        transfer: 10.45,
        customTransfer: false,
        species: ['pssp'],
      },
      {
        name: 'PC3',
        label: 'PC3',
        fn: '-2.07 - 0.004*PAS + 0.004*CMD',
        transfer: 3.55,
        customTransfer: false,
        species: ['pssp'],
      },
    ],
    defaultVariables: [
      {
        variable: 'MCMT',
        getValue: dispatch => dispatch(receiveTransfer('MCMT', 20, null, null)),
      },
      {
        variable: 'SHM',
        getValue: (dispatch, point, region) => {
          const url = `/arcgis/rest/services/${region}_1961_1990Y_SHM/MapServer/identify/?${urlEncode({
            f: 'json',
            tolerance: 2,
            imageDisplay: '1600,1031,96',
            geometryType: 'esriGeometryPoint',
            mapExtent: '0,0,0,0',
            geometry: JSON.stringify(point),
          })}`

          get(url)
            .then(response => response.json())
            .then(json => {
              const pixelValue = json.results[0].attributes['Pixel value']
              dispatch(receiveTransfer('SHM', pixelValue / 2, null, null))
            })
        },
      },
    ],
    constraints: {
      objects: Object.assign(baseConfig.constraints.objects, {
        ...Object.fromEntries(
          speciesConstraints.map(({ species, label, serialize }) => [
            species,
            {
              component: SpeciesConstraint,
              constraint: 'raster',
              values: {
                species,
                label,
                isRegion: false,
              },
              serialize: ({ objective, climate }: any) => serialize({ objective, climate }),
            },
          ]),
        ),
        ...Object.fromEntries(
          speciesConstraintRegions.map(({ species, label, region, serialize }) => [
            `${species}-${region}`,
            {
              component: SpeciesConstraint,
              constraint: 'raster',
              values: {
                species,
                label,
                isRegion: true,
              },
              serialize: () => serialize(),
            },
          ]),
        ),
      }),
      categories: [
        ...baseConfig.constraints.categories,
        {
          name: 'species',
          label: 'Species Range',
          type: 'category',
          items: [
            ...speciesConstraints.map(({ species, label }) => {
              return { name: species, label, type: 'constraint' }
            }),
          ],
        },
        {
          name: 'region',
          label: 'Species Region',
          type: 'category',
          items: [
            {
              name: 'region-artr',
              label: 'Wyoming/Basin Big Sagebrush',
              type: 'category',
              items: [
                ...speciesConstraintRegions
                  .filter(({ species }) => species === 'artr')
                  .map(({ species, region, label }) => ({
                    name: `${species}-${region}`,
                    label,
                    type: 'constraint',
                  })),
              ],
            },
            {
              name: 'region-atva',
              label: 'Mountain big sagebrush',
              type: 'category',
              items: [
                ...speciesConstraintRegions
                  .filter(({ species }) => species === 'atva')
                  .map(({ species, region, label }) => ({
                    name: `${species}-${region}`,
                    label,
                    type: 'constraint',
                  })),
              ],
            },
          ],
        },
      ],
    },
    layers: {
      ...baseConfig.layers,
      ...Object.fromEntries(
        speciesConstraints.map(({ species, label, serialize }) => [
          `constraint-${species}`,
          {
            type: 'raster',
            label,
            show: () => true,
            url: ({ runConfiguration: { climate, objective } }: any) =>
              `/tiles/${serialize({ objective, climate }).service}/{z}/{x}/{y}.png`,
            zIndex: 2,
          },
        ]),
      ),
      ...Object.fromEntries(
        speciesConstraintRegions.map(({ species, label, region, serialize }) => [
          `constraint-${species}-${region}`,
          {
            type: 'raster',
            label,
            show: () => true,
            url: () => `/tiles/${serialize().service}/{z}/{x}/{y}.png`,
            zIndex: 2,
          },
        ]),
      ),
    },
    layerCategories: [
      ...baseConfig.layerCategories,
      {
        label: `Constraints`,
        show: () => true,
        layers: [...speciesConstraints.map(({ species }) => `constraint-${species}`)],
      },
      {
        label: 'Wyoming/Basin Big Sagebrush Regions',
        show: () => true,
        layers: [
          ...speciesConstraintRegions
            .filter(({ species }) => species === 'artr')
            .map(({ species, region }) => `constraint-${species}-${region}`),
        ],
      },
      {
        label: 'Mountain big sagebrush Regions',
        show: () => true,
        layers: [
          ...speciesConstraintRegions
            .filter(({ species }) => species === 'atva')
            .map(({ species, region }) => `constraint-${species}-${region}`),
        ],
      },
    ],
  })
}
