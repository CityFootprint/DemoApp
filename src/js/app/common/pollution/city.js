import '@nasaworldwind/worldwind';

export class City {
    constructor(city, wwd) {
        // Declare base attributes
        this.name = city.name;
        this.latitude = city.latitude;
        this.longitude = city.longitude;
        this.level = city.level

        this.scaleSeed = 1000;

        // Declare layer
        this.layer = null;
        this.createLayer();

        // Declare position
        this.position = null;
        this.createPosition();

        // Declare column
        this.column = null;
        this.colladaLoader = null;
        this.createColumn();

        //  Declare text attributes
        this.textAttributes, this.textLayer, this.text = null;
        this.createText();


        this.create(wwd);
    }

    createLayer() {
        this.layer = new WorldWind.RenderableLayer(this.name + "CityLayer");
    }
    createPosition() {
        this.position = new WorldWind.Position(this.latitude, this.longitude, 0);
    }

    createColumn() {
        if (this.level > 0) {
            this.column = "green";
        }
        if (this.level > 50) {
            this.column = "yellow";
        }
        if (this.level > 100) {
            this.column = "orange";
        }
        if (this.level > 250) {
            this.column = "red";
        }
        if (this.level > 200) {
            this.column = "purple";
        }
        if (this.level > 300) {
            this.column = "maroon";
        }

        this.colladaLoader = new WorldWind.ColladaLoader(this.position);
        this.colladaLoader.init({
            dirPath: '/src/img/collada/'
        });
    }

    createText() {
        this.textAttributes = new WorldWind.TextAttributes(null);
        this.textLayer = new WorldWind.RenderableLayer(this.name + "Text");

        this.textAttributes.color = WorldWind.Color.WHITE;
        this.textAttributes.depthTest = false;

        this.text = new WorldWind.GeographicText(this.position, this.name + "\n" + this.level + " µg/m³");
        this.text.attributes = this.textAttributes;
    }


    create(wwd) {
        wwd.addLayer(this.layer);
        wwd.addLayer(this.textLayer);

        var scale = this.level * this.scaleSeed;
        var layer = this.layer;
        this.colladaLoader.load(this.column + '.dae', function (scene) {
            scene.scale = scale;
            layer.addRenderable(scene); 
        });
        this.textLayer.addRenderable(this.text);
        this.hide();
    }

    show() {
        this.textLayer.enabled = true;
        this.layer.enabled = true;
        this.layer.refresh();
    }

    hide() {
        this.textLayer.enabled = false;
        this.layer.enabled = false;
        this.layer.refresh();
    }
}