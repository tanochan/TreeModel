//import { TreeModel } from 'tree-model';
const TreeModel = require('tree-model')
const tree = new TreeModel();

// 木構造のデータ(最終的には木構造データ生成プログラムを作る)
const treeData = {
    id: 'root',
    children: [
        {
            id: '0',
            children: [
                {
                    id: '03',
                    children: [
                        {
                            id: '031',
                            data: [
                                {
                                    institution_id: 293108356,
                                    institution_name: "一番レジの隣",
                                    latitude: 34.481935,
                                    longitude: 135.383933,
                                    path: "0311021020"
                                },
                                {
                                    institution_id: 6,
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: '1',
            children: [
                {
                    id: '12',
                    children: [
                        {
                            id: '122',
                            data: [
                                {
                                    institution_id: 416167597,
                                    institution_name: "正門横守衛室",
                                    latitude: 34.575217,
                                    longitude: 135.47029,
                                    path: "1221003313"
                                },
                                {
                                    institution_id: 331538600,
                                    institution_name: "1F階段横",
                                    latitude: 34.575454,
                                    longitude: 135.47067,
                                    path: "1221012202"
                                },
                                {
                                    institution_id: 801703486,
                                    institution_name: "体育館横",
                                    latitude: 34.575435,
                                    longitude: 135.47036,
                                    path: "1221012202"
                                },                                    
                            ]
                        },
                        {
                            id: '123',
                            data: [
                                {
                                    institution_id: 616943679,
                                    institution_name: "受付横",
                                    latitude: 34.618174,
                                    longitude: 135.507422,
                                    path: "1232001212"
                                },
                            ]
                        }
                    ]
                },
            ]
        },
        // {
        //     id: '2'
        // },
        {
            id: '3',
            children: [
                {
                    id: '30',
                    children: [
                        {
                            id: '300'
                        },
                        {
                            id: '301',
                            data: [
                                {
                                    institution_id: 141634364,
                                    institution_name: "２階階段横",
                                    latitude: 34.66935,
                                    longitude: 135.503528,
                                    path: "3010002013"
                                },
                                {
                                    institution_id: 1064704941,
                                    institution_name: "エントランス",
                                    latitude: 34.66931,
                                    longitude: 135.503524,
                                    path: "3010002013"
                                },
                                {
                                    institution_id: 181121300,
                                    institution_name: "憩いの広場第2ベンチ横",
                                    latitude: 34.6778324,
                                    longitude: 135.522154,
                                    path: "3010120201"
                                },
                                {
                                    institution_id: 1036812679,
                                    institution_name: "受付カウンター横",
                                    latitude: 34.677809,
                                    longitude: 135.522128,
                                    path: "3010120201"
                                },
                                {
                                    institution_id: 598217768,
                                    institution_name: "オフィス内",
                                    latitude: 34.677901,
                                    longitude: 135.572245,
                                    path: "3011121311"
                                },
                            ]
                        },
                        {
                            id: '302',
                            data: [
                                {
                                    institution_id: 645876249,
                                    institution_name: "受付横",
                                    latitude: 34.844091,
                                    longitude: 135.490845,
                                    path: "3023312220"
                                },
                            ]
                        },
                        {
                            id: '303',
                            data: [
                                {
                                    institution_id: 347022513,
                                    institution_name: "受付横",
                                    latitude: 34.822221,
                                    longitude: 135.572229,
                                    path: "3033121113"
                                },
                            ]
                        }
                    ]
                },
                {
                    id: '31',
                    children: [
                        {
                            id: '310',
                            data: [
                                {
                                    institution_id: 554864144,
                                    institution_name: "待合室",
                                    latitude: 34.696589,
                                    longitude: 135.617982,
                                    path: "3100312311"
                                },
                            ]
                        },
                        {
                            id: '312',
                            data: [
                                {
                                    institution_id: 253554467,
                                    institution_name: "正面入り口横",
                                    latitude: 34.783754,
                                    longitude: 135.585737,
                                    path: "3120022322"
                                },
                                {
                                    institution_id: 941350836,
                                    institution_name: "入り口",
                                    latitude: 34.840942,
                                    longitude: 135.623021,
                                    path: "3122313130"
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ],
}

let result = []; // 探索目的のデータ
const root = tree.parse(treeData) // TreeModelを作成
let path = '30' // 領域値
let depth = path.length; //深さ

// 領域値30のノードを取得する(深さ優先)
// 親のノードを先に取得しておくことで、探索時間を節約できそう?
var target_node = root.first(function (node) {
    return node.model.id.slice(0, depth) === path;
});

//データを取得する(深さ優先)
if (target_node != undefined) {
    target_node.all(node => {
        //console.log(node.model.id)
        let array = [];
        //console.log(node.model.data)
        if (node.model.data != undefined) {
            array = node.model.data;
    
            for (let i = 0; i < array.length; i++) {
                result.push(array[i])
            }
        }
    })
}

console.log(result)
