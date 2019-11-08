import coreConfig from 'core/seedsource/config'
import SpeciesConstraint from 'seedsource/containers/SpeciesConstraint'

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
        },
        {
            name: 'pssp',
            label: 'Bluebunch wheatgrass'
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
            fn: '-5.074 + (0.216*TD/10)',
            transfer: 0.292,
            customTransfer: false,
            species: ['atva']
        },
        {
            name: 'PC1',
            label: 'PC1',
            fn: '17.12 + 0.02*TD - 0.02*SHM + 0.47*EMT',
            transfer: 1,  // Todo
            customTransfer: false,
            species: ['pssp']
        },
        {
            name: 'PC2',
            label: 'PC2',
            fn: '3.37 + 0.02*TD - 0.007*SHM - 0.02*FFP',
            transfer: 1,  // Todo
            customTransfer: false,
            species: ['pssp']
        },
        {
            name: 'PC3',
            label: 'PC3',
            fn: '-2.07 - 0.004*PAS + 0.004*CMD',
            transfer: 1, // Todo
            customTransfer: false,
            species: ['pssp']
        }
    ],

    constraints: {
        objects: Object.assign(coreConfig.constraints.objects, {
            artr: {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'artr',
                    label: 'Wyoming/Basin Big Sagebrush Range',
                    isRegion: false
                },
                serialize: ({ objective, climate }) => {
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
            },
            atva: {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'atva',
                    label: 'Mountain big sagebrush Range',
                    isRegion: false
                },
                serialize: ({ objective, climate }) => {
                    let { time, model } = (objective === 'seedlots' ? climate.seedlot : climate.site)
                    let serviceName

                    if (time === '1961_1990') {
                        serviceName = 'hist60'
                    }
                    else if (time === '1981_2010') {
                        serviceName = 'cur1980_10'
                    }
                    else {
                        const year = {
                            '2025': '20',
                            '2055': '50',
                            '2085': '80'
                        }[time]

                        serviceName = `${model}_${year}`
                    }

                    return {
                        service: `constraints/atva/range/${serviceName}`
                    }
                }
            },
            pssp: {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'pssp',
                    label: 'Blubunch wheatgrass Range',
                    isRegion: false
                },
                serialize: ({ objective, climate }) => {
                    let { time, model } = (objective === 'seedlots' ? climate.seedlot : climate.site)
                    let serviceName

                    if (time === '1961_1990') {
                        serviceName = 'hist60_90'
                    }
                    else if (time === '1981_2010') {
                        serviceName = 'contemp80_10'
                    }
                    else {
                        const year = {
                            '2025': '2020',
                            '2055': '2050',
                            '2085': '2080'
                        }[time]

                        serviceName = `d${year}_${model}`
                    }

                    return {
                        service: `constraints/pssp/range/${serviceName}`
                    }
                }
            },
            'artr-colorado-plateau': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'artr',
                    label: 'Colorado Plateau Range',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/artr/region/ColoradoPlateau'})
            },
            'artr-columbia-basin': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'artr',
                    label: 'Columbia Basin Range',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/artr/region/ColumbiaBasin'})
            },
            'artr-great-basin': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'artr',
                    label: 'Great Basin Range',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/artr/region/GreatBasin'})
            },
            'artr-wyoming-basin': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'artr',
                    label: 'Wyoming Basin Range',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/artr/region/WyomingBasin'})
            },
            'atva-central-basin': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'atva',
                    label: 'Central Basin Range',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/atva/region/CentralBasin_Range'})
            },
            'atva-colorado-plateaus-region': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'atva',
                    label: 'Colorado Plateaus Region',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/atva/region/ColoradoPlateaus'})
            },
            'atva-columbia-plateau-region': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'atva',
                    label: 'Columbia Plateau Region',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/atva/region/ColumbiaPlateau'})
            },
            'atva-southern-rockies-region': {
                component: SpeciesConstraint,
                constraint: 'raster',
                values: {
                    species: 'atva',
                    label: 'Southern Rockies Region',
                    isRegion: true
                },
                serialize: () => ({service: 'constraints/atva/region/SouthernRockies'})
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
                    },
                    {
                        name: 'atva',
                        label: 'Mountain big sagebrush',
                        type: 'constraint'
                    },
                    {
                        name: 'pssp',
                        label: 'Bluebrunch wheatgrass',
                        type: 'consraint'
                    }
                ]
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
                            {
                                name: 'artr-colorado-plateau',
                                label: 'Colorado Plateau Range',
                                type: 'constraint'
                            },
                            {
                                name: 'artr-columbia-basin',
                                label: 'Columbia Basin Range',
                                type: 'constraint'
                            },
                            {
                                name: 'artr-great-basin',
                                label: 'Great Basin Range',
                                type: 'constraint'
                            },
                            {
                                name: 'artr-wyoming-basin',
                                label: 'Wyoming Basin Range',
                                type: 'constraint'
                            }
                        ]
                    },
                    {
                        name: 'region-atva',
                        label: 'Mountain big sagebrush',
                        type: 'category',
                        items: [
                            {
                                name: 'atva-central-basin',
                                label: 'Central Basin Range',
                                type: 'constraint'
                            },
                            {
                                name: 'atva-colorado-plateaus-region',
                                label: 'Colorado Plateaus Region',
                                type: 'constraint'
                            },
                            {
                                name: 'atva-columbia-plateau-region',
                                label: 'Columbia Plateau Region',
                                type: 'constraint'
                            },
                            {
                                name: 'atva-southern-rockies-region',
                                label: 'Southern Rockies Region',
                                type: 'constraint'
                            }
                        ]
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
