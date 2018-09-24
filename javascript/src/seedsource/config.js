import coreConfig from 'core/seedsource/config'

const config = {
    navbarClass: 'is-dark is-topo',
    apiRoot: '/csrt/',
    logo: null,

    labels: [
        // Seedzones
        {
          serviceName: "wa_new_zones-pipo",
          label: "Washington (2002) ponderosa pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "lio-2014-10-09-seed_zone",
          label: "Ontario",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "nesma-breedzone_pine",
          label: "Ontario Jack pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "oregon_seed_zones-ponderosa_pine",
          label: "Oregon ponderosa pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "oregon_seed_zones-western_white_pine",
          label: "Oregon western white pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "r9seedzones-r9seedzones",
          label: "Region 9",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "historic_seed_zones-historic_seed_zones",
          label: "Oregon 1966/1973",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "nesma-breedzone_spruce",
          label: "Ontario Black spruce",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "updatedcageneric-updatedcageneric",
          label: "California",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "wa_new_zones-pimo",
          label: "Washington (2002) western white pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "wa_new_zones-psme",
          label: "Washington (2002) Douglas-fir",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "wa_new_zones-thpl",
          label: "Washington (2002) western redcedar",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "atlantic_canada_seed_zones-atlantic_canada_seed_zones_wgs84",
          label: "Atlantic Canada",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "oregon_seed_zones-douglas_fir",
          label: "Oregon (1996) Douglas-fir",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "wa_new_zones-pico",
          label: "Washington (2002) lodgepole pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "oregon_seed_zones-lodgepole_pine",
          label: "Oregon (1996) lodgepole pine",
          style: { color: "#00FFFF" }
        },
        {
          serviceName: "oregon_seed_zones-western_red_cedar",
          label: "Oregon (1996) western redcedar",
          style: { color: "#00FFFF" }
        },

        // Layers
        {
          serviceName: "us_eco_l3",
          label: "Level III Ecoregions",
          style: { weight: 1, color: "#666", opacity: .5 }
        },
        {
            serviceName: "cb_2017_us_county_20m",
            label: "U.S. Counties",
            style: {weight: 1, color: '#559', opacity: .5}
        }
    ],

    species: [
        {
            name: 'artr',
            label: 'Great Basin sagebrush'
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
            label: 'Jack pine'
        },
        {
            name: 'pipo',
            label: 'Ponderosa pine',
        },
        {
            name: 'pima',
            label: 'Black spruce'
        },
        {
            name: 'thpl',
            label: 'Western red cedar',
        },
        {
            name: 'pimo',
            label: 'Western white pine',
        }
    ],

    functions: [
        {
            name: 'FD',
            label: 'Flower Date',
            fn: '381 + (-1.72*LAT) + (-0.011*DD_18)',
            transfer: 10.4,
            customTransfer: false,
            species: ['artr']
        },
        {
            name: 'S',
            label: 'Survival',
            fn: '-6.3 + (0.284*TD) + (0.007*PPT_sm)',
            transfer: 0.46,
            customTransfer: false,
            species: ['artr']
        }
    ],

    text: {
        climate_step_site_help: 'When should plants be best adapted to the planting site?'
    }
}

export default Object.assign(coreConfig, config)
