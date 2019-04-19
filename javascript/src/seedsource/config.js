import coreConfig from 'core/seedsource/config'
import SpeciesConstraint from 'seedsource/containers/SpeciesConstraint'

const serializeSpeciesConstraint = ({ objective, climate }, { species }) => {
    let { time, model } = (objective === 'seedlots' ? climate.seedlot : climate.site)
    let climateFragment

    if (time === '1961_1990' || time === '1981_2010') {
        climateFragment = time
    }
    else {
        climateFragment = `${model}_${time}`
    }

    return {
        service: `sage_niche_${climateFragment}`
    }
}

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
        {
            serviceName: '2013_revised_zones-2017_new_labels_liii_ecoregions_14june17',
            label: 'CONUS Provisional',
            style: { color: '#00FFFF' }
        },
        {
            serviceName: 'shp_bdry_seed_source_control_zones-mndnr_dissolved',
            label: 'Minnesota Seed Source Control',
            style: { color: '#00FFFF' }
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
            label: 'Wyoming/Basin Big Sagebrush'
        },
        {
            name: 'atva',
            label: 'Mountain big sagebrush'
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
            units: 'days',
            customTransfer: false,
            species: ['artr', 'atva']
        },
        {
            name: 'S',
            label: 'Survival',
            fn: '-6.3 + (0.284*TD/10) + (0.007*PPT_sm)', // TD values are multiplied, so divide by 10
            transfer: 0.46,
            customTransfer: false,
            species: ['artr']
        },
        {
            name: 'S-atva',
            label: 'Survival',
            fn: '-5.074 + (0.216 * TD)',
            transfer: 0.292,
            customTransfer: false,
            species: ['atva']
        }
    ],

    constraints: {
        objects: Object.assign(coreConfig.constraints.objects, {
            artr: {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'artr',
                    label: 'Wyoming/Basin Big Sagebrush'
                },
                serialize: serializeSpeciesConstraint
            }
        }),
        categories: [
            ...coreConfig.constraints.categories,
            {
                name: 'species',
                label: 'Species Range',
                type: 'category',
                items: [
                    {
                        name: 'artr',
                        label: 'Wyoming/Basin Big Sagebrush',
                        type: 'constraint'
                    }
                ]
            }
        ]
    },

    text: {
        climate_step_site_help: 'When should plants be best adapted to the planting site?'
    }
}

export default Object.assign(coreConfig, config)
