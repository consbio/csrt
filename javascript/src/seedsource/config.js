const config = {
    navbarClass: 'is-black',
    apiRoot: '/csrt/'
}

const layerLabels = {
    labels: [
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
          serviceName: "us_eco_l3",
          label: "Level III Ecoregions",
          style: { color: "#7FFF00" }
        }
    ]
}

export default Object.assign(config, layerLabels, window.SS_CONFIG)
