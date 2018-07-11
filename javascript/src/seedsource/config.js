const config = {
    navbarClass: 'is-black',
    apiRoot: '/csrt/'
}

const layerLabels = {
    labels: [
        {
          serviceName: "wa_new_zones-pipo",
          label: "Washington (2002) ponderosa pine",
          style: { color: "#FF00FF" }
        },
        {
          serviceName: "lio-2014-10-09-seed_zone",
          label: "Ontario",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "nesma-breedzone_pine",
          label: "Ontario Jack pine",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "oregon_seed_zones-ponderosa_pine",
          label: "Oregon ponderosa pine",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "oregon_seed_zones-western_white_pine",
          label: "Oregon western white pine",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "r9seedzones-r9seedzones",
          label: "Region 9",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "historic_seed_zones-historic_seed_zones",
          label: "Oregon 1966/1973",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "nesma-breedzone_spruce",
          label: "Ontario Black spruce",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "updatedcageneric-updatedcageneric",
          label: "California",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "wa_new_zones-pimo",
          label: "Washington (2002) western white pine",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "wa_new_zones-psme",
          label: "Washington (2002) Douglas-fir",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "wa_new_zones-thpl",
          label: "Washington (2002) western redcedar",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "atlantic_canada_seed_zones-atlantic_canada_seed_zones_wgs84",
          label: "Atlantic Canada",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "oregon_seed_zones-douglas_fir",
          label: "Oregon (1996) Douglas-fir",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "wa_new_zones-pico",
          label: "Washington (2002) lodgepole pine",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "oregon_seed_zones-lodgepole_pine",
          label: "Oregon (1996) lodgepole pine",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "oregon_seed_zones-western_red_cedar",
          label: "Oregon (1996) western redcedar",
          style: { color: "#FFOOFF" }
        },
        {
          serviceName: "us_eco_l3",
          label: "Level III Ecoregions",
          style: { color: "#00FFFF" }
        }
    ]
}

export default Object.assign(config, layerLabels, window.SS_CONFIG)
