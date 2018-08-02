import log from "core/logger";
import '@nasaworldwind/worldwind';

import { PollutionLayers } from "./pollution/pollutionLayers";

export default class {
    constructor() {
        var wwd = new WorldWind.WorldWindow("canvasMap");
        var finland = {
            location: {
                latitude: 61.9241,
                longitud: 25.7482
            },
            range: 2500000
        };


        this.polLayer = new PollutionLayers(wwd);
        this.polLayer.createLayers();

        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // BMNGLayer Blue Marbe layer: aka The Globe
        var configLayers = {
            showBMNGLayer: true,
            showBMNGLandsatLayer: false,
            showBingAerialLayer: false,
            showBingAerialWithLabelsLayer: false,
            showBingRoadsLayer: false,
            showOpenStreetMapImageLayer: false,
            showAtmosphereLayer: true,
            showCompassLayer: true,
            showCoordinatesDisplayLayer: false,
            showViewControlsLayer: false
        };

        var layers = [
            {
                layer: new WorldWind.BMNGLayer(),
                enabled: configLayers.showBMNGLayer
            },
            {
                layer: new WorldWind.BMNGLandsatLayer(),
                enabled: configLayers.showBMNGLandsatLayer
            },
            {
                layer: new WorldWind.BingAerialLayer(null),
                enabled: configLayers.showBingAerialLayer
            },
            {
                layer: new WorldWind.BingAerialWithLabelsLayer(null),
                enabled: configLayers.showBingAerialWithLabelsLayer
            },
            {
                layer: new WorldWind.BingRoadsLayer(null),
                enabled: configLayers.showBingRoadsLayer
            },
            {
                layer: new WorldWind.OpenStreetMapImageLayer(null),
                enabled: configLayers.showOpenStreetMapImageLayer
            },
            // Add atmosphere layer on top of all base layers.
            {
                layer: new WorldWind.AtmosphereLayer(),
                enabled: configLayers.showAtmosphereLayer
            },
            // WorldWindow UI layers.
            {
                layer: new WorldWind.CompassLayer(),
                enabled: configLayers.showCompassLayer
            },
            {
                layer: new WorldWind.CoordinatesDisplayLayer(wwd),
                enabled: configLayers.showCoordinatesDisplayLayer
            },
            {
                layer: new WorldWind.ViewControlsLayer(wwd),
                enabled: configLayers.showViewControlsLayer
            }
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

        // Finland position
        wwd.navigator.lookAtLocation.latitude = finland.location.latitude
        wwd.navigator.lookAtLocation.longitude = finland.location.longitud
        wwd.navigator.range = finland.range;

        wwd.redraw();
    }

    togglePollution() {
        if (this.polLayer.isEnabled === true) {
            this.polLayer.hide();
        } else {
            this.polLayer.show();
        }
    }
}
