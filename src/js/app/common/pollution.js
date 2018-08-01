import '@nasaworldwind/worldwind';

function getCities() {
    return [{
            "name": "Harjavalta",
            "latitude": 61.3121553,
            "longitude": 22.1336155,
            "level": 12
        },
        {
            "name": "Helsinki",
            "latitude": 60.1674086,
            "longitude": 24.9425683,
            "level": 19
        },
        {
            "name": "Hyvinkää",
            "latitude": 60.6335719,
            "longitude": 24.8695328,
            "level": 16
        },
        {
            "name": "Imatra",
            "latitude": 61.1714623,
            "longitude": 28.7708613,
            "level": 13
        },
        {
            "name": "Jyväskylä",
            "latitude": 62.2393002,
            "longitude": 25.745951,
            "level": 13
        },
        {
            "name": "Kajaani",
            "latitude": 64.2240872,
            "longitude": 27.7334227,
            "level": 13
        },
        {
            "name": "Kotka",
            "latitude": 60.4674228,
            "longitude": 26.9450844,
            "level": 15
        },
        {
            "name": "Kouvola",
            "latitude": 60.8701956,
            "longitude": 26.7018091,
            "level": 15
        },
        {
            "name": "Kuopio",
            "latitude": 62.8241424,
            "longitude": 27.5945614845,
            "level": 15
        },
        {
            "name": "Lahti",
            "latitude": 60.9838761,
            "longitude": 25.6561814,
            "level": 15
        },
        {
            "name": "Lappeenranta",
            "latitude": 61.0582424,
            "longitude": 28.1875302,
            "level": 16
        },
        {
            "name": "Lohja",
            "latitude": 60.2526036,
            "longitude": 24.0684575,
            "level": 11
        },
        {
            "name": "Mikkeli",
            "latitude": 61.6877956,
            "longitude": 27.2726569,
            "level": 14
        },
        {
            "name": "Muonio",
            "latitude": 67.9593397,
            "longitude": 23.6774037,
            "level": 4
        },
        {
            "name": "Oulu",
            "latitude": 65.0118734,
            "longitude": 25.4716809,
            "level": 14
        },
        {
            "name": "Pietarsaari",
            "latitude": 63.7216906,
            "longitude": 22.3740016309,
            "level": 16
        },
        {
            "name": "Pori",
            "latitude": 61.4867236,
            "longitude": 21.7910016,
            "level": 14
        },
        {
            "name": "Raahe",
            "latitude": 64.6796865,
            "longitude": 24.4709175,
            "level": 9
        },
        {
            "name": "Tampere",
            "latitude": 61.4980214,
            "longitude": 23.7603118,
            "level": 18
        },
        {
            "name": "Turku",
            "latitude": 60.4517531,
            "longitude": 22.2670522,
            "level": 15
        },
        {
            "name": "Vaasa",
            "latitude": 63.08182095,
            "longitude": 21.4798123509,
            "level": 14
        },
        {
            "name": "Valkeakoski",
            "latitude": 61.2637921,
            "longitude": 24.0301278,
            "level": 13
        },
        {
            "name": "Vantaa",
            "latitude": 60.3091871,
            "longitude": 25.0364526,
            "level": 16
        },
        {
            "name": "Virolahti",
            "latitude": 60.589195,
            "longitude": 27.7037499,
            "level": 13
        },

        {
            "name": "Kabul",
            "latitude": 34.5260131,
            "longitude": 69.1776476,
            "level": 26
        },
        {
            "name": "Buenos Aires",
            "latitude": -34.6075616,
            "longitude": -58.437076,
            "level": 26
        },
        {
            "name": "Sydney ",
            "latitude": -33.8548157,
            "longitude": 151.2164539,
            "level": 17
        },
        {
            "name": "Wien",
            "latitude": 48.2083537,
            "longitude": 16.3725042,
            "level": 26
        },
        {
            "name": "Dhaka",
            "latitude": 23.7593572,
            "longitude": 90.3788136,
            "level": 15
        },
        {
            "name": "Brussels",
            "latitude": 50.8465573,
            "longitude": 4.351697,
            "level": 26
        },
        {
            "name": "La Paz ",
            "latitude": -16.4956371,
            "longitude": -68.1336346,
            "level": 82
        },
        {
            "name": "Sofia",
            "latitude": 42.6978634,
            "longitude": 23.3221789,
            "level": 43
        },
        {
            "name": "Calgary",
            "latitude": 51.02532675,
            "longitude": -114.049868486,
            "level": 11
        },
        {
            "name": "Ottawa",
            "latitude": 45.421106,
            "longitude": -75.690308,
            "level": 11
        },
        {
            "name": "Quebec",
            "latitude": 52.4760892,
            "longitude": -71.8258668,
            "level": 18
        },
        {
            "name": "Santiago",
            "latitude": -33.4377968,
            "longitude": -70.6504451,
            "level": 64
        },
        {
            "name": "Viña del Mar",
            "latitude": -33.024503,
            "longitude": -71.5518119,
            "level": 34
        },
        {
            "name": "Beijing",
            "latitude": 39.9059631,
            "longitude": 116.391248,
            "level": 10
        },
        {
            "name": "Hong Kong",
            "latitude": 22.2793278,
            "longitude": 114.1628131,
            "level": 49
        },
        {
            "name": "Taipei",
            "latitude": 25.0375198,
            "longitude": 121.5636796,
            "level": 28
        },
        {
            "name": "Bogotá",
            "latitude": 4.5980772,
            "longitude": -74.0761028,
            "level": 52
        },
        {
            "name": "Zagreb",
            "latitude": 45.813177,
            "longitude": 15.977048,
            "level": 36
        },
        {
            "name": "Prague",
            "latitude": 50.0874654,
            "longitude": 14.4212535,
            "level": 27
        },
        {
            "name": "Copenhagen",
            "latitude": 55.6867243,
            "longitude": 12.5700724,
            "level": 27
        },
        {
            "name": "San Salvador",
            "latitude": 13.6989939,
            "longitude": -89.1914249,
            "level": 77
        },
        {
            "name": "Nice",
            "latitude": 43.7009358,
            "longitude": 7.2683912,
            "level": 29
        },
        {
            "name": "Paris",
            "latitude": 48.8566101,
            "longitude": 2.3514992,
            "level": 28
        },
        {
            "name": "Berlin",
            "latitude": 52.5170365,
            "longitude": 13.3888599,
            "level": 24
        },
        {
            "name": "Athens",
            "latitude": 33.9597677,
            "longitude": -83.376398,
            "level": 40
        },
        {
            "name": "Budapest",
            "latitude": 47.4983815,
            "longitude": 19.0404707,
            "level": 29
        },
        {
            "name": "Bangalore",
            "latitude": 12.9791198,
            "longitude": 77.5912997,
            "level": 11
        },
        {
            "name": "Kanpur",
            "latitude": 26.4609135,
            "longitude": 80.3217588,
            "level": 21
        },
        {
            "name": "Mumbai",
            "latitude": 19.1334321,
            "longitude": 72.8882172,
            "level": 11
        },
        {
            "name": "Dublin",
            "latitude": 53.3497645,
            "longitude": -6.2602732,
            "level": 16
        },
        {
            "name": "Roma",
            "latitude": 41.8933203,
            "longitude": 12.4829321,
            "level": 28
        },
        {
            "name": "Tokyo",
            "latitude": 34.6968642,
            "longitude": 139.4049033,
            "level": 28
        },
        {
            "name": "AlS huwaikh",
            "latitude": 29.3544104,
            "longitude": 47.9563788,
            "level": 21
        },
        {
            "name": "Riga",
            "latitude": 56.9493977,
            "longitude": 24.1051846,
            "level": 34
        },
        {
            "name": "Vilnius",
            "latitude": 54.6870458,
            "longitude": 25.2829111,
            "level": 27
        },
        {
            "name": "Mexico City",
            "latitude": 19.4326009,
            "longitude": -99.1333416,
            "level": 42
        },
        {
            "name": "Wellington ",
            "latitude": -41.2887467,
            "longitude": 174.7772092,
            "level": 13
        },
        {
            "name": "Bergen",
            "latitude": 60.3943034,
            "longitude": 5.3258117,
            "level": 19
        },
        {
            "name": "Oslo",
            "latitude": 59.9132694,
            "longitude": 10.7391112,
            "level": 22
        },
        {
            "name": "Peshawar",
            "latitude": 34.0123846,
            "longitude": 71.5787458,
            "level": 54
        },
        {
            "name": "Asunción ",
            "latitude": -25.2959916,
            "longitude": -57.6311196,
            "level": 34
        },
        {
            "name": "Lima ",
            "latitude": -12.0621065,
            "longitude": -77.0365256,
            "level": 88
        },
        {
            "name": "Lisboa",
            "latitude": 38.7077507,
            "longitude": -9.1365919,
            "level": 15
        },
        {
            "name": "Seoul",
            "latitude": 37.5666791,
            "longitude": 126.9782914,
            "level": 46
        },
        {
            "name": "Moscow",
            "latitude": 55.7507178,
            "longitude": 37.6176606,
            "level": 33
        },
        {
            "name": "Al Jubail",
            "latitude": 25.35289635,
            "longitude": 55.3818541262,
            "level": 35
        },
        {
            "name": "Johannesburg ",
            "latitude": -26.205,
            "longitude": 28.049722,
            "level": 85
        },
        {
            "name": "Madrid",
            "latitude": 40.4167047,
            "longitude": -3.7035825,
            "level": 19
        },
        {
            "name": "Göteborg",
            "latitude": 57.7072326,
            "longitude": 11.9670171,
            "level": 19
        },
        {
            "name": "Malmö",
            "latitude": 55.6052931,
            "longitude": 13.0001566,
            "level": 20
        },
        {
            "name": "Stockholm",
            "latitude": 59.3251172,
            "longitude": 18.0710935,
            "level": 26
        },
        {
            "name": "Uppsala",
            "latitude": 59.8594126,
            "longitude": 17.64112,
            "level": 24
        },
        {
            "name": "Bangkok",
            "latitude": 13.7538929,
            "longitude": 100.8160803,
            "level": 42
        },
        {
            "name": "Ankara",
            "latitude": 39.9215219,
            "longitude": 32.8537929,
            "level": 77
        },
        {
            "name": "Istanbul",
            "latitude": 41.0096334,
            "longitude": 28.9651646,
            "level": 53
        },
        {
            "name": "Liverpool",
            "latitude": 53.4054719,
            "longitude": -2.9805392,
            "level": 14
        },
        {
            "name": "London",
            "latitude": 51.5073219,
            "longitude": -0.1276474,
            "level": 22
        },
        {
            "name": "Manchester",
            "latitude": 53.4791301,
            "longitude": -2.2441009,
            "level": 18
        },
        {
            "name": "Kansas City",
            "latitude": 39.0844687,
            "longitude": -94.5630298,
            "level": 16
        },
        {
            "name": "Las Vegas",
            "latitude": 36.1662859,
            "longitude": -115.149225,
            "level": 14
        },
        {
            "name": "Los Angeles",
            "latitude": 34.054935,
            "longitude": -118.244476,
            "level": 20
        },
        {
            "name": "New York",
            "latitude": 40.7306458,
            "longitude": -73.9866136,
            "level": 16
        },
        {
            "name": "Caracas",
            "latitude": 10.506098,
            "longitude": -66.9146017,
            "level": 47
        }
    ]
}

function showPollution(wwd, city) {
    let scale = 50000;
    let scaleSeed = 2500;

    let cityLayer = new WorldWind.RenderableLayer(city.name);
    wwd.addLayer(cityLayer);

    let position = new WorldWind.Position(city.latitude, city.longitude, 0);
    let colladaLoader = new WorldWind.ColladaLoader(position);
    colladaLoader.init({
        dirPath: '/src/img/collada/'
    });

    //debugger;
    colladaLoader.load('col.dae', function (scene) {
        scene.scale = city.level * scaleSeed;
        cityLayer.addRenderable(scene);
    });

}

export {
    getCities,
    showPollution
};
