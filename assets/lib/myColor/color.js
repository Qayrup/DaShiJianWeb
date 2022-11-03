var color = {
    粉: {
        子姜: '#eeb8c3', 合欢: '#f0a1a8', 报春: '#ec8aa4', 淡绛: '#ec7696', 霞光: '#ef82a0', 白芨: '#de7897', 山黎: '#e77c8e', 暮云: '#ed9db2', 香叶: '#f07c82', 莲瓣: '#ea517f', 夹竹: '#eb507e', 月季: '#ec5777'
    },
    蓝: {
        云水: '#b4d9ef', 星黎: '#78bbdd', 瓦苷: '#6f94cd', 霁青: '#63bbd0', 鸢尾: '#158bb8', 景泰: '#2775b6', 麒石: '#0d67bf', 靛青: '#1661ab', 搪磁: '#11659a', 燕颔: '#4656b7', 蔚釉: '#2e317c', 鷃蓝: '#144a74'
    }, 绿: {
        明绿: '#9eccab', 水碧: '#8cc269', 田园: '#68b88e', 蒄梢: '#5dbe8a', 鹦鹉: '#5bae23', 玉髓: '#41b349', 宫殿: '#20894d', 荷青: '#1a6840', 梧枝: '#69a794', 青矶: '#2c9678', 美蝶: '#12aa9c', 石绿: '#57c3c2'
    }

}
var 莫兰迪 = ['#E8D3C0', '#D89C7A', '#D6C38B', '#CFC3A9', '#849B91', '#E1CCB1', '#D4BAAD', '#C2CEDC', '#B0B1B6', '#E4E6E1', '#979771', '#91AD9E', '#686789', '#B77F70', '#E5E2B9', '#BEB1A8', '#A79A89', '#8A95A9', '#9FABB9', '#9AA690', '#91A0A5', '#99857E', '#7D7465', '#88878D', '#B4746B', '#E6D6D9', '#676662', '#AB545A', '#724E52', '#F3EEEA', '#BCA295', '#AEA9A6', '#CEB797', '#9A7549', '#BCA289', '#D3D2D0', '#ECCED0', '#B57C82', '#F4D1D7', '#FEECD8']

var ChineseColors = {
    暗玉紫: { name: '暗玉紫', pinyin: 'anyuzi', Hex: '#5c2223' },
    牡丹粉红: { name: '牡丹粉红', pinyin: 'mudanfenhong', Hex: '#eea2a4' },
    栗紫: { name: '栗紫', pinyin: 'lizi', Hex: '#5a191b' },
    香叶红: { name: '香叶红', pinyin: 'xiangyehong', Hex: '#f07c82' },
    葡萄酱紫: { name: '葡萄酱紫', pinyin: 'putaojiangzi', Hex: '#5a1216' },
    艳红: { name: '艳红', pinyin: 'yanhong', Hex: '#ed5a65' },
    玉红: { name: '玉红', pinyin: 'yuhong', Hex: '#c04851' },
    茶花红: { name: '茶花红', pinyin: 'chahuahong', Hex: '#ee3f4d' },
    高粱红: { name: '高粱红', pinyin: 'gaolianghong', Hex: '#c02c38' },
    满江红: { name: '满江红', pinyin: 'manjianghong', Hex: '#a7535a' },
    鼠鼻红: { name: '鼠鼻红', pinyin: 'shubihong', Hex: '#e3b4b8' },
    合欢红: { name: '合欢红', pinyin: 'hehuanhong', Hex: '#f0a1a8' },
    春梅红: { name: '春梅红', pinyin: 'chunmeihong', Hex: '#f1939c' },
    苋菜红: { name: '苋菜红', pinyin: 'xiancaihong', Hex: '#a61b29' },
    烟红: { name: '烟红', pinyin: 'yanhong', Hex: '#894e54' },
    莓红: { name: '莓红', pinyin: 'meihong', Hex: '#c45a65' },
    鹅冠红: { name: '鹅冠红', pinyin: 'eguanhong', Hex: '#d11a2d' },
    枫叶红: { name: '枫叶红', pinyin: 'fengyehong', Hex: '#c21f30' },
    唐菖蒲红: { name: '唐菖蒲红', pinyin: 'tangchangpuhong', Hex: '#de1c31' },
    枣红: { name: '枣红', pinyin: 'zaohong', Hex: '#7c1823' },
    猪肝紫: { name: '猪肝紫', pinyin: 'zhuganzi', Hex: '#541e24' },
    葡萄紫: { name: '葡萄紫', pinyin: 'putaozi', Hex: '#4c1f24' },
    暗紫苑红: { name: '暗紫苑红', pinyin: 'anziyuanhong', Hex: '#82202b' },
    殷红: { name: '殷红', pinyin: 'yanhong', Hex: '#82111f' },
    草茉莉红: { name: '草茉莉红', pinyin: 'caomolihong', Hex: '#ef475d' },
    酱紫: { name: '酱紫', pinyin: 'jiangzi', Hex: '#4d1018' },
    山茶红: { name: '山茶红', pinyin: 'shanchahong', Hex: '#ed556a' },
    锌灰: { name: '锌灰', pinyin: 'xinhui', Hex: '#7a7374' },
    海棠红: { name: '海棠红', pinyin: 'haitanghong', Hex: '#f03752' },
    蓟粉红: { name: '蓟粉红', pinyin: 'jifenhong', Hex: '#e6d2d5' },
    石蕊红: { name: '石蕊红', pinyin: 'shiruihong', Hex: '#f0c9cf' },
    淡曙红: { name: '淡曙红', pinyin: 'danshuhong', Hex: '#ee2746' },
    李紫: { name: '李紫', pinyin: 'lizi', Hex: '#2b1216' },
    石竹红: { name: '石竹红', pinyin: 'shizhuhong', Hex: '#ee4863' },
    淡茜红: { name: '淡茜红', pinyin: 'danqianhong', Hex: '#e77c8e' },
    金鱼紫: { name: '金鱼紫', pinyin: 'jinyuzi', Hex: '#500a16' },
    山黎豆红: { name: '山黎豆红', pinyin: 'shanlidouhong', Hex: '#c27c88' },
    鼠背灰: { name: '鼠背灰', pinyin: 'shubeihui', Hex: '#73575c' },
    淡蕊香红: { name: '淡蕊香红', pinyin: 'danruixianghong', Hex: '#ee4866' },
    甘蔗紫: { name: '甘蔗紫', pinyin: 'ganzhezi', Hex: '#621624' },
    月季红: { name: '月季红', pinyin: 'yuejihong', Hex: '#ce5777' },
    尖晶玉红: { name: '尖晶玉红', pinyin: 'jianjingyuhong', Hex: '#cc163a' },
    水红: { name: '水红', pinyin: 'shuihong', Hex: '#f1c4cd' },
    姜红: { name: '姜红', pinyin: 'jianghong', Hex: '#eeb8c3' },
    芦灰: { name: '芦灰', pinyin: 'luhui', Hex: '#856d72' },
    茄皮紫: { name: '茄皮紫', pinyin: 'qiepizi', Hex: '#2d0c13' },
    苍蝇灰: { name: '苍蝇灰', pinyin: 'cangyinghui', Hex: '#36282b' },
    锦葵红: { name: '锦葵红', pinyin: 'jinkuihong', Hex: '#bf3553' },
    粉团花红: { name: '粉团花红', pinyin: 'fentuanhuahong', Hex: '#ec9bad' },
    石竹紫: { name: '石竹紫', pinyin: 'shizhuzi', Hex: '#63071c' },
    卵石紫: { name: '卵石紫', pinyin: 'luanshizi', Hex: '#30161c' },
    晶红: { name: '晶红', pinyin: 'jinghong', Hex: '#eea6b7' },
    芝兰紫: { name: '芝兰紫', pinyin: 'zhilanzi', Hex: '#e9ccd3' },
    芍药耕红: { name: '芍药耕红', pinyin: 'shaoyaogenghong', Hex: '#eba0b3' },
    暮云灰: { name: '暮云灰', pinyin: 'muyunhui', Hex: '#4f383e' },
    豇豆红: { name: '豇豆红', pinyin: 'jiangdouhong', Hex: '#ed9db2' },
    报春红: { name: '报春红', pinyin: 'baochunhong', Hex: '#ec8aa4' },
    淡绛红: { name: '淡绛红', pinyin: 'danjianghong', Hex: '#ec7696' },
    凤仙花红: { name: '凤仙花红', pinyin: 'fengxianhuahong', Hex: '#ea7293' },
    霞光红: { name: '霞光红', pinyin: 'xiaguanghong', Hex: '#ef82a0' },
    喜蛋红: { name: '喜蛋红', pinyin: 'xidanhong', Hex: '#ec2c64' },
    夹竹桃红: { name: '夹竹桃红', pinyin: 'jiazhutaohong', Hex: '#eb507e' },
    松叶牡丹红: { name: '松叶牡丹红', pinyin: 'songyemudanhong', Hex: '#eb3c70' },
    莲瓣红: { name: '莲瓣红', pinyin: 'lianbanhong', Hex: '#ea517f' },
    白芨红: { name: '白芨红', pinyin: 'baijihong', Hex: '#de7897' },
    隐红灰: { name: '隐红灰', pinyin: 'yinhonghui', Hex: '#b598a1' },
    榲桲红: { name: '榲桲红', pinyin: 'wenpohong', Hex: '#ed2f6a' },
    酢酱草红: { name: '酢酱草红', pinyin: 'cujiangcaohong', Hex: '#c5708b' },
    火鹅紫: { name: '火鹅紫', pinyin: 'huoezi', Hex: '#33141e' },
    鹞冠紫: { name: '鹞冠紫', pinyin: 'yaoguanzi', Hex: '#621d34' },
    品红: { name: '品红', pinyin: 'pinhong', Hex: '#ef3473' },
    磨石紫: { name: '磨石紫', pinyin: 'moshizi', Hex: '#382129' },
    墨紫: { name: '墨紫', pinyin: 'mozi', Hex: '#310f1b' },
    檀紫: { name: '檀紫', pinyin: 'tanzi', Hex: '#381924' },
    初荷红: { name: '初荷红', pinyin: 'chuhehong', Hex: '#e16c96' },
    菜头紫: { name: '菜头紫', pinyin: 'caitouzi', Hex: '#951c48' },
    葡萄酒红: { name: '葡萄酒红', pinyin: 'putaojiuhong', Hex: '#62102e' },
    淡青紫: { name: '淡青紫', pinyin: 'danqingzi', Hex: '#e0c8d1' },
    菠根红: { name: '菠根红', pinyin: 'bogenhong', Hex: '#d13c74' },
    海象紫: { name: '海象紫', pinyin: 'haixiangzi', Hex: '#4b1e2f' },
    兔眼红: { name: '兔眼红', pinyin: 'tuyanhong', Hex: '#ec4e8a' },
    嫩菱红: { name: '嫩菱红', pinyin: 'nenlinghong', Hex: '#de3f7c' },
    洋葱紫: { name: '洋葱紫', pinyin: 'yangcongzi', Hex: '#a8456b' },
    吊钟花红: { name: '吊钟花红', pinyin: 'diaozhonghuahong', Hex: '#ce5e8a' },
    绀紫: { name: '绀紫', pinyin: 'ganzi', Hex: '#461629' },
    紫荆红: { name: '紫荆红', pinyin: 'zijinghong', Hex: '#ee2c79' },
    扁豆花红: { name: '扁豆花红', pinyin: 'biandouhuahong', Hex: '#ef498b' },
    马鞭草紫: { name: '马鞭草紫', pinyin: 'mabiancaozi', Hex: '#ede3e7' },
    藏花红: { name: '藏花红', pinyin: 'canghuahong', Hex: '#ec2d7a' },
    斑鸠灰: { name: '斑鸠灰', pinyin: 'banjiuhui', Hex: '#482936' },
    古铜紫: { name: '古铜紫', pinyin: 'gutongzi', Hex: '#440e25' },
    丹紫红: { name: '丹紫红', pinyin: 'danzihong', Hex: '#d2568c' },
    丁香淡紫: { name: '丁香淡紫', pinyin: 'dingxiangdanzi', Hex: '#e9d7df' },
    玫瑰红: { name: '玫瑰红', pinyin: 'meiguihong', Hex: '#d2357d' },
    古鼎灰: { name: '古鼎灰', pinyin: 'gudinghui', Hex: '#36292f' },
    菱锰红: { name: '菱锰红', pinyin: 'lingmenghong', Hex: '#d276a3' },
    樱草紫: { name: '樱草紫', pinyin: 'yingcaozi', Hex: '#c06f98' },
    龙须红: { name: '龙须红', pinyin: 'longxuhong', Hex: '#cc5595' },
    电气石红: { name: '电气石红', pinyin: 'dianqishihong', Hex: '#c35691' },
    玫瑰紫: { name: '玫瑰紫', pinyin: 'meiguizi', Hex: '#ba2f7b' },
    苋菜紫: { name: '苋菜紫', pinyin: 'xiancaizi', Hex: '#9b1e64' },
    紫灰: { name: '紫灰', pinyin: 'zihui', Hex: '#5d3f51' },
    龙睛鱼紫: { name: '龙睛鱼紫', pinyin: 'longjingyuzi', Hex: '#4e2a40' },
    青蛤壳紫: { name: '青蛤壳紫', pinyin: 'qinghakezi', Hex: '#bc84a8' },
    萝兰紫: { name: '萝兰紫', pinyin: 'luolanzi', Hex: '#c08eaf' },
    荸荠紫: { name: '荸荠紫', pinyin: 'biqizi', Hex: '#411c35' },
    豆蔻紫: { name: '豆蔻紫', pinyin: 'doukouzi', Hex: '#ad6598' },
    扁豆紫: { name: '扁豆紫', pinyin: 'biandouzi', Hex: '#a35c8f' },
    牵牛紫: { name: '牵牛紫', pinyin: 'qianniuzi', Hex: '#681752' },
    芓紫: { name: '芓紫', pinyin: 'zizi', Hex: '#894276' },
    葛巾紫: { name: '葛巾紫', pinyin: 'gejinzi', Hex: '#7e2065' },
    青莲: { name: '青莲', pinyin: 'qinglian', Hex: '#8b2671' },
    芥花紫: { name: '芥花紫', pinyin: 'jiehuazi', Hex: '#983680' },
    凤信紫: { name: '凤信紫', pinyin: 'fengxinzi', Hex: '#c8adc4' },
    深牵牛紫: { name: '深牵牛紫', pinyin: 'shenqianniuzi', Hex: '#1c0d1a' },
    魏紫: { name: '魏紫', pinyin: 'weizi', Hex: '#7e1671' },
    乌梅紫: { name: '乌梅紫', pinyin: 'wumeizi', Hex: '#1e131d' },
    桔梗紫: { name: '桔梗紫', pinyin: 'jiegengzi', Hex: '#813c85' },
    淡牵牛紫: { name: '淡牵牛紫', pinyin: 'danqianniuzi', Hex: '#d1c2d3' },
    剑锋紫: { name: '剑锋紫', pinyin: 'jianfengzi', Hex: '#3e3841' },
    蕈紫: { name: '蕈紫', pinyin: 'xunzi', Hex: '#815c94' },
    槿紫: { name: '槿紫', pinyin: 'jinzi', Hex: '#806d9e' },
    芡食白: { name: '芡食白', pinyin: 'qianshibai', Hex: '#e2e1e4' },
    龙葵紫: { name: '龙葵紫', pinyin: 'longkuizi', Hex: '#322f3b' },
    藤萝紫: { name: '藤萝紫', pinyin: 'tengluozi', Hex: '#8076a3' },
    沙鱼灰: { name: '沙鱼灰', pinyin: 'shayuhui', Hex: '#35333c' },
    暗龙胆紫: { name: '暗龙胆紫', pinyin: 'anlongdanzi', Hex: '#22202e' },
    暗蓝紫: { name: '暗蓝紫', pinyin: 'anlanzi', Hex: '#131124' },
    野葡萄紫: { name: '野葡萄紫', pinyin: 'yeputaozi', Hex: '#302f4b' },
    野菊紫: { name: '野菊紫', pinyin: 'yejuzi', Hex: '#525288' },
    水牛灰: { name: '水牛灰', pinyin: 'shuiniuhui', Hex: '#2f2f35' },
    远山紫: { name: '远山紫', pinyin: 'yuanshanzi', Hex: '#ccccd6' },
    螺甸紫: { name: '螺甸紫', pinyin: 'luodianzi', Hex: '#74759b' },
    晶石紫: { name: '晶石紫', pinyin: 'jingshizi', Hex: '#1f2040' },
    满天星紫: { name: '满天星紫', pinyin: 'mantianxingzi', Hex: '#2e317c' },
    淡蓝紫: { name: '淡蓝紫', pinyin: 'danlanzi', Hex: '#a7a8bd' },
    山梗紫: { name: '山梗紫', pinyin: 'shangengzi', Hex: '#61649f' },
    牛角灰: { name: '牛角灰', pinyin: 'niujiaohui', Hex: '#2d2e36' },
    鱼尾灰: { name: '鱼尾灰', pinyin: 'yuweihui', Hex: '#5e616d' },
    瓦罐灰: { name: '瓦罐灰', pinyin: 'waguanhui', Hex: '#47484c' },
    钢蓝: { name: '钢蓝', pinyin: 'ganglan', Hex: '#0f1423' },
    燕颔蓝: { name: '燕颔蓝', pinyin: 'yanhanlan', Hex: '#131824' },
    鲸鱼灰: { name: '鲸鱼灰', pinyin: 'jingyuhui', Hex: '#475164' },
    青灰: { name: '青灰', pinyin: 'qinghui', Hex: '#2b333e' },
    鸽蓝: { name: '鸽蓝', pinyin: 'gelan', Hex: '#1c2938' },
    暗蓝: { name: '暗蓝', pinyin: 'anlan', Hex: '#101f30' },
    钢青: { name: '钢青', pinyin: 'gangqing', Hex: '#142334' },
    海涛蓝: { name: '海涛蓝', pinyin: 'haitaolan', Hex: '#15559a' },
    飞燕草蓝: { name: '飞燕草蓝', pinyin: 'feiyancaolan', Hex: '#0f59a4' },
    靛青: { name: '靛青', pinyin: 'dianqing', Hex: '#1661ab' },
    安安蓝: { name: '安安蓝', pinyin: 'ananlan', Hex: '#3170a7' },
    海军蓝: { name: '海军蓝', pinyin: 'haijunlan', Hex: '#346c9c' },
    景泰蓝: { name: '景泰蓝', pinyin: 'jingtailan', Hex: '#2775b6' },
    品蓝: { name: '品蓝', pinyin: 'pinlan', Hex: '#2b73af' },
    尼罗蓝: { name: '尼罗蓝', pinyin: 'niluolan', Hex: '#2474b5' },
    蝶翅蓝: { name: '蝶翅蓝', pinyin: 'diechilan', Hex: '#4e7ca1' },
    花青: { name: '花青', pinyin: 'huaqing', Hex: '#2376b7' },
    鷃蓝: { name: '鷃蓝', pinyin: 'yanlan', Hex: '#144a74' },
    星蓝: { name: '星蓝', pinyin: 'xinglan', Hex: '#93b5cf' },
    虹蓝: { name: '虹蓝', pinyin: 'honglan', Hex: '#2177b8' },
    柏林蓝: { name: '柏林蓝', pinyin: 'bolinlan', Hex: '#126bae' },
    群青: { name: '群青', pinyin: 'qunqing', Hex: '#1772b4' },
    云水蓝: { name: '云水蓝', pinyin: 'yunshuilan', Hex: '#baccd9' },
    羽扇豆蓝: { name: '羽扇豆蓝', pinyin: 'yushandoulan', Hex: '#619ac3' },
    战舰灰: { name: '战舰灰', pinyin: 'zhanjianhui', Hex: '#495c69' },
    晴山蓝: { name: '晴山蓝', pinyin: 'qingshanlan', Hex: '#8fb2c9' },
    睛蓝: { name: '睛蓝', pinyin: 'jinglan', Hex: '#5698c3' },
    搪磁蓝: { name: '搪磁蓝', pinyin: 'tangcilan', Hex: '#11659a' },
    潮蓝: { name: '潮蓝', pinyin: 'chaolan', Hex: '#2983bb' },
    天蓝: { name: '天蓝', pinyin: 'tianlan', Hex: '#1677b3' },
    大理石灰: { name: '大理石灰', pinyin: 'dalishihui', Hex: '#c4cbcf' },
    牵牛花蓝: { name: '牵牛花蓝', pinyin: 'qianniuhualan', Hex: '#1177b0' },
    宝石蓝: { name: '宝石蓝', pinyin: 'baoshilan', Hex: '#2486b9' },
    淡蓝灰: { name: '淡蓝灰', pinyin: 'danlanhui', Hex: '#5e7987' },
    嫩灰: { name: '嫩灰', pinyin: 'nenhui', Hex: '#74787a' },
    银鱼白: { name: '银鱼白', pinyin: 'yinyubai', Hex: '#cdd1d3' },
    釉蓝: { name: '釉蓝', pinyin: 'youlan', Hex: '#1781b5' },
    涧石蓝: { name: '涧石蓝', pinyin: 'jianshilan', Hex: '#66a9c9' },
    远天蓝: { name: '远天蓝', pinyin: 'yuantianlan', Hex: '#d0dfe6' },
    云山蓝: { name: '云山蓝', pinyin: 'yunshanlan', Hex: '#2f90b9' },
    秋波蓝: { name: '秋波蓝', pinyin: 'qiubolan', Hex: '#8abcd1' },
    井天蓝: { name: '井天蓝', pinyin: 'jingtianlan', Hex: '#c3d7df' },
    鸢尾蓝: { name: '鸢尾蓝', pinyin: 'yuanweilan', Hex: '#158bb8' },
    云峰白: { name: '云峰白', pinyin: 'yunfengbai', Hex: '#d8e3e7' },
    星灰: { name: '星灰', pinyin: 'xinghui', Hex: '#b2bbbe' },
    钴蓝: { name: '钴蓝', pinyin: 'gulan', Hex: '#1a94bc' },
    碧青: { name: '碧青', pinyin: 'biqing', Hex: '#5cb3cc' },
    苍蓝: { name: '苍蓝', pinyin: 'canglan', Hex: '#134857' },
    深灰蓝: { name: '深灰蓝', pinyin: 'shenhuilan', Hex: '#132c33' },
    灰蓝: { name: '灰蓝', pinyin: 'huilan', Hex: '#21373d' },
    湖水蓝: { name: '湖水蓝', pinyin: 'hushuilan', Hex: '#b0d5df' },
    海青: { name: '海青', pinyin: 'haiqing', Hex: '#22a2c3' },
    黄昏灰: { name: '黄昏灰', pinyin: 'huanghunhui', Hex: '#474b4c' },
    霁青: { name: '霁青', pinyin: 'jiqing', Hex: '#63bbd0' },
    玉鈫蓝: { name: '玉鈫蓝', pinyin: 'yuqinlan', Hex: '#126e82' },
    胆矾蓝: { name: '胆矾蓝', pinyin: 'danfanlan', Hex: '#0f95b0' },
    樫鸟蓝: { name: '樫鸟蓝', pinyin: 'jianniaolan', Hex: '#1491a8' },
    鸥蓝: { name: '鸥蓝', pinyin: 'oulan', Hex: '#c7d2d4' },
    翠蓝: { name: '翠蓝', pinyin: 'cuilan', Hex: '#1e9eb3' },
    蜻蜓蓝: { name: '蜻蜓蓝', pinyin: 'qingtinglan', Hex: '#3b818c' },
    孔雀蓝: { name: '孔雀蓝', pinyin: 'kongquelan', Hex: '#0eb0c9' },
    蔚蓝: { name: '蔚蓝', pinyin: 'weilan', Hex: '#29b7cb' },
    瀑布蓝: { name: '瀑布蓝', pinyin: 'pubulan', Hex: '#51c4d3' },
    闪蓝: { name: '闪蓝', pinyin: 'shanlan', Hex: '#7cabb1' },
    甸子蓝: { name: '甸子蓝', pinyin: 'dianzilan', Hex: '#10aec2' },
    晚波蓝: { name: '晚波蓝', pinyin: 'wanbolan', Hex: '#648e93' },
    清水蓝: { name: '清水蓝', pinyin: 'qingshuilan', Hex: '#93d5dc' },
    夏云灰: { name: '夏云灰', pinyin: 'xiayunhui', Hex: '#617172' },
    海天蓝: { name: '海天蓝', pinyin: 'haitianlan', Hex: '#c6e6e8' },
    虾壳青: { name: '虾壳青', pinyin: 'xiakeqing', Hex: '#869d9d' },
    石绿: { name: '石绿', pinyin: 'shilv', Hex: '#57c3c2' },
    穹灰: { name: '穹灰', pinyin: 'qionghui', Hex: '#c4d7d6' },
    美蝶绿: { name: '美蝶绿', pinyin: 'meidielv', Hex: '#12aa9c' },
    垩灰: { name: '垩灰', pinyin: 'ehui', Hex: '#737c7b' },
    蓝绿: { name: '蓝绿', pinyin: 'lanlv', Hex: '#12a182' },
    竹绿: { name: '竹绿', pinyin: 'zhulv', Hex: '#1ba784' },
    亚丁绿: { name: '亚丁绿', pinyin: 'yadinglv', Hex: '#428675' },
    月影白: { name: '月影白', pinyin: 'yueyingbai', Hex: '#c0c4c3' },
    海王绿: { name: '海王绿', pinyin: 'haiwanglv', Hex: '#248067' },
    深海绿: { name: '深海绿', pinyin: 'shenhailv', Hex: '#1a3b32' },
    绿灰: { name: '绿灰', pinyin: 'lvhui', Hex: '#314a43' },
    青矾绿: { name: '青矾绿', pinyin: 'qingfanlv', Hex: '#2c9678' },
    苍绿: { name: '苍绿', pinyin: 'canglv', Hex: '#223e36' },
    飞泉绿: { name: '飞泉绿', pinyin: 'feiquanlv', Hex: '#497568' },
    莽丛绿: { name: '莽丛绿', pinyin: 'mangconglv', Hex: '#141e1b' },
    梧枝绿: { name: '梧枝绿', pinyin: 'wuzhilv', Hex: '#69a794' },
    铜绿: { name: '铜绿', pinyin: 'tonglv', Hex: '#2bae85' },
    草原远绿: { name: '草原远绿', pinyin: 'caoyuanyuanlv', Hex: '#9abeaf' },
    蛙绿: { name: '蛙绿', pinyin: 'walv', Hex: '#45b787' },
    浪花绿: { name: '浪花绿', pinyin: 'langhualv', Hex: '#92b3a5' },
    苷蓝绿: { name: '苷蓝绿', pinyin: 'ganlanlv', Hex: '#1f2623' },
    粉绿: { name: '粉绿', pinyin: 'fenlv', Hex: '#83cbac' },
    淡绿灰: { name: '淡绿灰', pinyin: 'danlvhui', Hex: '#70887d' },
    麦苗绿: { name: '麦苗绿', pinyin: 'maimiaolv', Hex: '#55bb8a' },
    翠绿: { name: '翠绿', pinyin: 'cuilv', Hex: '#20a162' },
    葱绿: { name: '葱绿', pinyin: 'conglv', Hex: '#40a070' },
    荷叶绿: { name: '荷叶绿', pinyin: 'heyelv', Hex: '#1a6840' },
    淡绿: { name: '淡绿', pinyin: 'danlv', Hex: '#61ac85' },
    田园绿: { name: '田园绿', pinyin: 'tianyuanlv', Hex: '#68b88e' },
    玉簪绿: { name: '玉簪绿', pinyin: 'yuzanlv', Hex: '#a4cab6' },
    蟾绿: { name: '蟾绿', pinyin: 'chanlv', Hex: '#3c9566' },
    蔻梢绿: { name: '蔻梢绿', pinyin: 'koushaolv', Hex: '#5dbe8a' },
    薄荷绿: { name: '薄荷绿', pinyin: 'bohelv', Hex: '#207f4c' },
    月白: { name: '月白', pinyin: 'yuebai', Hex: '#eef7f2' },
    蛋白石绿: { name: '蛋白石绿', pinyin: 'danbaishilv', Hex: '#579572' },
    竹篁绿: { name: '竹篁绿', pinyin: 'zhuhuanglv', Hex: '#b9dec9' },
    孔雀绿: { name: '孔雀绿', pinyin: 'kongquelv', Hex: '#229453' },
    宫殿绿: { name: '宫殿绿', pinyin: 'gongdianlv', Hex: '#20894d' },
    云杉绿: { name: '云杉绿', pinyin: 'yunshanlv', Hex: '#15231b' },
    毛绿: { name: '毛绿', pinyin: 'maolv', Hex: '#66c18c' },
    冰山蓝: { name: '冰山蓝', pinyin: 'bingshanlan', Hex: '#a4aca7' },
    明灰: { name: '明灰', pinyin: 'minghui', Hex: '#8a988e' },
    明绿: { name: '明绿', pinyin: 'minglv', Hex: '#9eccab' },
    松霜绿: { name: '松霜绿', pinyin: 'songshuanglv', Hex: '#83a78d' },
    白屈菜绿: { name: '白屈菜绿', pinyin: 'baiqucailv', Hex: '#485b4d' },
    狼烟灰: { name: '狼烟灰', pinyin: 'langyanhui', Hex: '#5d655f' },
    瓦松绿: { name: '瓦松绿', pinyin: 'wasonglv', Hex: '#6e8b74' },
    槲寄生绿: { name: '槲寄生绿', pinyin: 'hujishenglv', Hex: '#2b312c' },
    淡翠绿: { name: '淡翠绿', pinyin: 'dancuilv', Hex: '#c6dfc8' },
    玉髓绿: { name: '玉髓绿', pinyin: 'yusuilv', Hex: '#41b349' },
    鲜绿: { name: '鲜绿', pinyin: 'xianlv', Hex: '#43b244' },
    油绿: { name: '油绿', pinyin: 'youlv', Hex: '#253d24' },
    宝石绿: { name: '宝石绿', pinyin: 'baoshilv', Hex: '#41ae3c' },
    嘉陵水绿: { name: '嘉陵水绿', pinyin: 'jialingshuilv', Hex: '#add5a2' },
    田螺绿: { name: '田螺绿', pinyin: 'tianluolv', Hex: '#5e665b' },
    水绿: { name: '水绿', pinyin: 'shuilv', Hex: '#8cc269' },
    鹦鹉绿: { name: '鹦鹉绿', pinyin: 'yingwulv', Hex: '#5bae23' },
    艾背绿: { name: '艾背绿', pinyin: 'aibeilv', Hex: '#dfecd5' },
    艾绿: { name: '艾绿', pinyin: 'ailv', Hex: '#cad3c3' },
    镍灰: { name: '镍灰', pinyin: 'niehui', Hex: '#9fa39a' },
    橄榄石绿: { name: '橄榄石绿', pinyin: 'ganlanshilv', Hex: '#b2cf87' },
    芽绿: { name: '芽绿', pinyin: 'yalv', Hex: '#96c24e' },
    嫩菊绿: { name: '嫩菊绿', pinyin: 'nenjulv', Hex: '#f0f5e5' },
    芦苇绿: { name: '芦苇绿', pinyin: 'luweilv', Hex: '#b7d07a' },
    姚黄: { name: '姚黄', pinyin: 'yaohuang', Hex: '#d0deaa' },
    蒽油绿: { name: '蒽油绿', pinyin: 'enyoulv', Hex: '#373834' },
    苹果绿: { name: '苹果绿', pinyin: 'pingguolv', Hex: '#bacf65' },
    海沬绿: { name: '海沬绿', pinyin: 'haimeilv', Hex: '#e2e7bf' },
    橄榄黄绿: { name: '橄榄黄绿', pinyin: 'ganlanhuanglv', Hex: '#bec936' },
    槐花黄绿: { name: '槐花黄绿', pinyin: 'huaihuahuanglv', Hex: '#d2d97a' },
    蝶黄: { name: '蝶黄', pinyin: 'diehuang', Hex: '#e2d849' },
    象牙白: { name: '象牙白', pinyin: 'xiangyabai', Hex: '#fffef8' },
    橄榄绿: { name: '橄榄绿', pinyin: 'ganlanlv', Hex: '#5e5314' },
    雪白: { name: '雪白', pinyin: 'xuebai', Hex: '#fffef9' },
    淡灰绿: { name: '淡灰绿', pinyin: 'danhuilv', Hex: '#ad9e5f' },
    佛手黄: { name: '佛手黄', pinyin: 'foshouhuang', Hex: '#fed71a' },
    乳白: { name: '乳白', pinyin: 'rubai', Hex: '#f9f4dc' },
    香蕉黄: { name: '香蕉黄', pinyin: 'xiangjiaohuang', Hex: '#e4bf11' },
    新禾绿: { name: '新禾绿', pinyin: 'xinhelv', Hex: '#d2b116' },
    油菜花黄: { name: '油菜花黄', pinyin: 'youcaihuahuang', Hex: '#fbda41' },
    秋葵黄: { name: '秋葵黄', pinyin: 'qiukuihuang', Hex: '#eed045' },
    柚黄: { name: '柚黄', pinyin: 'youhuang', Hex: '#f1ca17' },
    草黄: { name: '草黄', pinyin: 'caohuang', Hex: '#d2b42c' },
    硫华黄: { name: '硫华黄', pinyin: 'liuhuahuang', Hex: '#f2ce2b' },
    姜黄: { name: '姜黄', pinyin: 'jianghuang', Hex: '#e2c027' },
    潭水绿: { name: '潭水绿', pinyin: 'tanshuilv', Hex: '#645822' },
    金瓜黄: { name: '金瓜黄', pinyin: 'jinguahuang', Hex: '#fcd217' },
    麦秆黄: { name: '麦秆黄', pinyin: 'maiganhuang', Hex: '#f8df70' },
    蒿黄: { name: '蒿黄', pinyin: 'haohuang', Hex: '#dfc243' },
    茉莉黄: { name: '茉莉黄', pinyin: 'molihuang', Hex: '#f8df72' },
    藤黄: { name: '藤黄', pinyin: 'tenghuang', Hex: '#ffd111' },
    芒果黄: { name: '芒果黄', pinyin: 'mangguohuang', Hex: '#ddc871' },
    海参灰: { name: '海参灰', pinyin: 'haishenhui', Hex: '#fffefa' },
    碧螺春绿: { name: '碧螺春绿', pinyin: 'biluochunlv', Hex: '#867018' },
    苔绿: { name: '苔绿', pinyin: 'tailv', Hex: '#887322' },
    柠檬黄: { name: '柠檬黄', pinyin: 'ningmenghuang', Hex: '#fcd337' },
    草灰绿: { name: '草灰绿', pinyin: 'caohuilv', Hex: '#8e804b' },
    向日葵黄: { name: '向日葵黄', pinyin: 'xiangrikuihuang', Hex: '#fecc11' },
    素馨黄: { name: '素馨黄', pinyin: 'suxinhuang', Hex: '#fccb16' },
    乳鸭黄: { name: '乳鸭黄', pinyin: 'ruyahuang', Hex: '#ffc90c' },
    月灰: { name: '月灰', pinyin: 'yuehui', Hex: '#b7ae8f' },
    葵扇黄: { name: '葵扇黄', pinyin: 'kuishanhuang', Hex: '#f8d86a' },
    大豆黄: { name: '大豆黄', pinyin: 'dadouhuang', Hex: '#fbcd31' },
    金盏黄: { name: '金盏黄', pinyin: 'jinzhanhuang', Hex: '#fcc307' },
    菊蕾白: { name: '菊蕾白', pinyin: 'juleibai', Hex: '#e9ddb6' },
    黄连黄: { name: '黄连黄', pinyin: 'huanglianhuang', Hex: '#fcc515' },
    杏仁黄: { name: '杏仁黄', pinyin: 'xingrenhuang', Hex: '#f7e8aa' },
    谷黄: { name: '谷黄', pinyin: 'guhuang', Hex: '#e8b004' },
    木瓜黄: { name: '木瓜黄', pinyin: 'muguahuang', Hex: '#f9c116' },
    淡茧黄: { name: '淡茧黄', pinyin: 'danjianhuang', Hex: '#f9d770' },
    雅梨黄: { name: '雅梨黄', pinyin: 'yalihuang', Hex: '#fbc82f' },
    银白: { name: '银白', pinyin: 'yinbai', Hex: '#f1f0ed' },
    棕榈绿: { name: '棕榈绿', pinyin: 'zonglvlv', Hex: '#5b4913' },
    鹦鹉冠黄: { name: '鹦鹉冠黄', pinyin: 'yingwuguanhuang', Hex: '#f6c430' },
    枯绿: { name: '枯绿', pinyin: 'kulv', Hex: '#b78d12' },
    浅烙黄: { name: '浅烙黄', pinyin: 'qianlaohuang', Hex: '#f9bd10' },
    淡密黄: { name: '淡密黄', pinyin: 'danmihuang', Hex: '#f9d367' },
    芥黄: { name: '芥黄', pinyin: 'jiehuang', Hex: '#d9a40e' },
    栀子黄: { name: '栀子黄', pinyin: 'zhizihuang', Hex: '#ebb10d' },
    暗海水绿: { name: '暗海水绿', pinyin: 'anhaishuilv', Hex: '#584717' },
    篾黄: { name: '篾黄', pinyin: 'miehuang', Hex: '#f7de98' },
    蚌肉白: { name: '蚌肉白', pinyin: 'bangroubai', Hex: '#f9f1db' },
    炒米黄: { name: '炒米黄', pinyin: 'chaomihuang', Hex: '#f4ce69' },
    琥珀黄: { name: '琥珀黄', pinyin: 'hupohuang', Hex: '#feba07' },
    灰绿: { name: '灰绿', pinyin: 'huilv', Hex: '#8a6913' },
    粽叶绿: { name: '粽叶绿', pinyin: 'zongyelv', Hex: '#876818' },
    尘灰: { name: '尘灰', pinyin: 'chenhui', Hex: '#b6a476' },
    鼬黄: { name: '鼬黄', pinyin: 'youhuang', Hex: '#fcb70a' },
    象牙黄: { name: '象牙黄', pinyin: 'xiangyahuang', Hex: '#f0d695' },
    鲛青: { name: '鲛青', pinyin: 'jiaoqing', Hex: '#87723e' },
    豆汁黄: { name: '豆汁黄', pinyin: 'douzhihuang', Hex: '#f8e8c1' },
    土黄: { name: '土黄', pinyin: 'tuhuang', Hex: '#d6a01d' },
    香水玫瑰黄: { name: '香水玫瑰黄', pinyin: 'xiangshuimeiguihuang', Hex: '#f7da94' },
    虎皮黄: { name: '虎皮黄', pinyin: 'hupihuang', Hex: '#eaad1a' },
    鸡蛋黄: { name: '鸡蛋黄', pinyin: 'jidanhuang', Hex: '#fbb612' },
    银鼠灰: { name: '银鼠灰', pinyin: 'yinshuhui', Hex: '#b5aa90' },
    鱼肚白: { name: '鱼肚白', pinyin: 'yudubai', Hex: '#f7f4ed' },
    初熟杏黄: { name: '初熟杏黄', pinyin: 'chushuxinghuang', Hex: '#f8bc31' },
    山鸡黄: { name: '山鸡黄', pinyin: 'shanjihuang', Hex: '#b78b26' },
    莲子白: { name: '莲子白', pinyin: 'lianzibai', Hex: '#e5d3aa' },
    蟹壳灰: { name: '蟹壳灰', pinyin: 'xiekehui', Hex: '#695e45' },
    沙石黄: { name: '沙石黄', pinyin: 'shashihuang', Hex: '#e5b751' },
    甘草黄: { name: '甘草黄', pinyin: 'gancaohuang', Hex: '#f3bf4c' },
    燕羽灰: { name: '燕羽灰', pinyin: 'yanyuhui', Hex: '#685e48' },
    鹅掌黄: { name: '鹅掌黄', pinyin: 'ezhanghuang', Hex: '#fbb929' },
    麦芽糖黄: { name: '麦芽糖黄', pinyin: 'maiyatanghuang', Hex: '#f9d27d' },
    浅驼色: { name: '浅驼色', pinyin: 'qiantuose', Hex: '#e2c17c' },
    百灵鸟灰: { name: '百灵鸟灰', pinyin: 'bailingniaohui', Hex: '#b4a992' },
    酪黄: { name: '酪黄', pinyin: 'laohuang', Hex: '#f6dead' },
    荔肉白: { name: '荔肉白', pinyin: 'liroubai', Hex: '#f2e6ce' },
    淡肉色: { name: '淡肉色', pinyin: 'danrouse', Hex: '#f8e0b0' },
    河豚灰: { name: '河豚灰', pinyin: 'hetunhui', Hex: '#393733' },
    蜴蜊绿: { name: '蜴蜊绿', pinyin: 'yililv', Hex: '#835e1d' },
    汉白玉: { name: '汉白玉', pinyin: 'hanbaiyu', Hex: '#f8f4ed' },
    橙皮黄: { name: '橙皮黄', pinyin: 'chengpihuang', Hex: '#fca104' },
    莱阳梨黄: { name: '莱阳梨黄', pinyin: 'laiyanglihuang', Hex: '#815f25' },
    枇杷黄: { name: '枇杷黄', pinyin: 'pipahuang', Hex: '#fca106' },
    金叶黄: { name: '金叶黄', pinyin: 'jinyehuang', Hex: '#ffa60f' },
    苍黄: { name: '苍黄', pinyin: 'canghuang', Hex: '#806332' },
    粉白: { name: '粉白', pinyin: 'fenbai', Hex: '#fbf2e3' },
    淡橘橙: { name: '淡橘橙', pinyin: 'danjucheng', Hex: '#fba414' },
    珍珠灰: { name: '珍珠灰', pinyin: 'zhenzhuhui', Hex: '#e4dfd7' },
    龟背黄: { name: '龟背黄', pinyin: 'guibeihuang', Hex: '#826b48' },
    浅灰: { name: '浅灰', pinyin: 'qianhui', Hex: '#dad4cb' },
    铅灰: { name: '铅灰', pinyin: 'qianhui', Hex: '#bbb5ac' },
    中灰: { name: '中灰', pinyin: 'zhonghui', Hex: '#bbb5ac' },
    雄黄: { name: '雄黄', pinyin: 'xionghuang', Hex: '#ff9900' },
    蜜黄: { name: '蜜黄', pinyin: 'mihuang', Hex: '#fbb957' },
    风帆黄: { name: '风帆黄', pinyin: 'fengfanhuang', Hex: '#dc9123' },
    桂皮淡棕: { name: '桂皮淡棕', pinyin: 'guipidanzong', Hex: '#c09351' },
    金莺黄: { name: '金莺黄', pinyin: 'jinyinghuang', Hex: '#f4a83a' },
    肉色: { name: '肉色', pinyin: 'rouse', Hex: '#f7c173' },
    凋叶棕: { name: '凋叶棕', pinyin: 'diaoyezong', Hex: '#e7a23f' },
    古铜绿: { name: '古铜绿', pinyin: 'gutonglv', Hex: '#533c1b' },
    落英淡粉: { name: '落英淡粉', pinyin: 'luoyingdanfen', Hex: '#f9e8d0' },
    软木黄: { name: '软木黄', pinyin: 'ruanmuhuang', Hex: '#de9e44' },
    瓜瓤粉: { name: '瓜瓤粉', pinyin: 'guarangfen', Hex: '#f9cb8b' },
    榴萼黄: { name: '榴萼黄', pinyin: 'liuehuang', Hex: '#f9a633' },
    玳瑁黄: { name: '玳瑁黄', pinyin: 'daimaohuang', Hex: '#daa45a' },
    焦茶绿: { name: '焦茶绿', pinyin: 'jiaochalv', Hex: '#553b18' },
    蟹壳绿: { name: '蟹壳绿', pinyin: 'xiekelv', Hex: '#513c20' },
    山鸡褐: { name: '山鸡褐', pinyin: 'shanjihe', Hex: '#986524' },
    猴毛灰: { name: '猴毛灰', pinyin: 'houmaohui', Hex: '#97846c' },
    鹿角棕: { name: '鹿角棕', pinyin: 'lujiaozong', Hex: '#e3bd8d' },
    淡松烟: { name: '淡松烟', pinyin: 'dansongyan', Hex: '#4d4030' },
    万寿菊黄: { name: '万寿菊黄', pinyin: 'wanshoujuhuang', Hex: '#fb8b05' },
    蛋壳黄: { name: '蛋壳黄', pinyin: 'dankehuang', Hex: '#f8c387' },
    杏黄: { name: '杏黄', pinyin: 'xinghuang', Hex: '#f28e16' },
    橄榄灰: { name: '橄榄灰', pinyin: 'ganlanhui', Hex: '#503e2a' },
    鹤灰: { name: '鹤灰', pinyin: 'hehui', Hex: '#4a4035' },
    玛瑙灰: { name: '玛瑙灰', pinyin: 'manaohui', Hex: '#cfccc9' },
    淡银灰: { name: '淡银灰', pinyin: 'danyinhui', Hex: '#c1b2a3' },
    瓦灰: { name: '瓦灰', pinyin: 'wahui', Hex: '#867e76' },
    夜灰: { name: '夜灰', pinyin: 'yehui', Hex: '#847c74' },
    北瓜黄: { name: '北瓜黄', pinyin: 'beiguahuang', Hex: '#fc8c23' },
    荷花白: { name: '荷花白', pinyin: 'hehuabai', Hex: '#fbecde' },
    松鼠灰: { name: '松鼠灰', pinyin: 'songshuhui', Hex: '#4f4032' },
    淡米粉: { name: '淡米粉', pinyin: 'danmifen', Hex: '#fbeee2' },
    深灰: { name: '深灰', pinyin: 'shenhui', Hex: '#81776e' },
    海鸥灰: { name: '海鸥灰', pinyin: 'haiouhui', Hex: '#9a8878' },
    茶褐: { name: '茶褐', pinyin: 'chahe', Hex: '#5d3d21' },
    驼色: { name: '驼色', pinyin: 'tuose', Hex: '#66462a' },
    银灰: { name: '银灰', pinyin: 'yinhui', Hex: '#918072' },
    鹿皮褐: { name: '鹿皮褐', pinyin: 'lupihe', Hex: '#d99156' },
    槟榔综: { name: '槟榔综', pinyin: 'binglangzong', Hex: '#c1651a' },
    晓灰: { name: '晓灰', pinyin: 'xiaohui', Hex: '#d4c4b7' },
    淡赭: { name: '淡赭', pinyin: 'danzhe', Hex: '#be7e4a' },
    古铜褐: { name: '古铜褐', pinyin: 'gutonghe', Hex: '#5c3719' },
    麂棕: { name: '麂棕', pinyin: 'jizong', Hex: '#de7622' },
    醉瓜肉: { name: '醉瓜肉', pinyin: 'zuiguarou', Hex: '#db8540' },
    雁灰: { name: '雁灰', pinyin: 'yanhui', Hex: '#80766e' },
    鲑鱼红: { name: '鲑鱼红', pinyin: 'guiyuhong', Hex: '#f09c5a' },
    橘橙: { name: '橘橙', pinyin: 'jucheng', Hex: '#f97d1c' },
    金黄: { name: '金黄', pinyin: 'jinhuang', Hex: '#f26b1f' },
    玫瑰粉: { name: '玫瑰粉', pinyin: 'meiguifen', Hex: '#f8b37f' },
    美人焦橙: { name: '美人焦橙', pinyin: 'meirenjiaocheng', Hex: '#fa7e23' },
    米色: { name: '米色', pinyin: 'mise', Hex: '#f9e9cd' },
    蛛网灰: { name: '蛛网灰', pinyin: 'zhuwanghui', Hex: '#b7a091' },
    淡咖啡: { name: '淡咖啡', pinyin: 'dankafei', Hex: '#945833' },
    海螺橙: { name: '海螺橙', pinyin: 'hailuocheng', Hex: '#f0945d' },
    岩石棕: { name: '岩石棕', pinyin: 'yanshizong', Hex: '#964d22' },
    芒果棕: { name: '芒果棕', pinyin: 'mangguozong', Hex: '#954416' },
    陶瓷红: { name: '陶瓷红', pinyin: 'taocihong', Hex: '#e16723' },
    菠萝红: { name: '菠萝红', pinyin: 'boluohong', Hex: '#fc7930' },
    余烬红: { name: '余烬红', pinyin: 'yujinhong', Hex: '#cf7543' },
    金莲花橙: { name: '金莲花橙', pinyin: 'jinlianhuacheng', Hex: '#f86b1d' },
    火砖红: { name: '火砖红', pinyin: 'huozhuanhong', Hex: '#cd6227' },
    初桃粉红: { name: '初桃粉红', pinyin: 'chutaofenhong', Hex: '#f6dcce' },
    铁棕: { name: '铁棕', pinyin: 'tiezong', Hex: '#d85916' },
    介壳淡粉红: { name: '介壳淡粉红', pinyin: 'jieqiaodanfenhong', Hex: '#f7cfba' },
    蟹壳红: { name: '蟹壳红', pinyin: 'xiekehong', Hex: '#f27635' },
    金驼: { name: '金驼', pinyin: 'jintuo', Hex: '#e46828' },
    燕颔红: { name: '燕颔红', pinyin: 'yanhanhong', Hex: '#fc6315' },
    淡可可棕: { name: '淡可可棕', pinyin: 'dankekezong', Hex: '#b7511d' },
    晨曦红: { name: '晨曦红', pinyin: 'chenxihong', Hex: '#ea8958' },
    玉粉红: { name: '玉粉红', pinyin: 'yufenhong', Hex: '#e8b49a' },
    野蔷薇红: { name: '野蔷薇红', pinyin: 'yeqiangweihong', Hex: '#fb9968' },
    藕荷: { name: '藕荷', pinyin: 'ouhe', Hex: '#edc3ae' },
    长石灰: { name: '长石灰', pinyin: 'changshihui', Hex: '#363433' },
    中红灰: { name: '中红灰', pinyin: 'zhonghonghui', Hex: '#8b614d' },
    火泥棕: { name: '火泥棕', pinyin: 'huonizong', Hex: '#aa6a4c' },
    绀红: { name: '绀红', pinyin: 'ganhong', Hex: '#a6522c' },
    莓酱红: { name: '莓酱红', pinyin: 'meijianghong', Hex: '#fa5d19' },
    丁香棕: { name: '丁香棕', pinyin: 'dingxiangzong', Hex: '#71361d' },
    淡玫瑰灰: { name: '淡玫瑰灰', pinyin: 'danmeiguihui', Hex: '#b89485' },
    瓜瓤红: { name: '瓜瓤红', pinyin: 'guaranghong', Hex: '#f68c60' },
    淡藏花红: { name: '淡藏花红', pinyin: 'dancanghuahong', Hex: '#f6ad8f' },
    筍皮棕: { name: '筍皮棕', pinyin: 'sunpizong', Hex: '#732e12' },
    润红: { name: '润红', pinyin: 'runhong', Hex: '#f7cdbc' },
    龙睛鱼红: { name: '龙睛鱼红', pinyin: 'longjingyuhong', Hex: '#ef632b' },
    淡土黄: { name: '淡土黄', pinyin: 'dantuhuang', Hex: '#8c4b31' },
    珠母灰: { name: '珠母灰', pinyin: 'zhumuhui', Hex: '#64483d' },
    芙蓉红: { name: '芙蓉红', pinyin: 'furonghong', Hex: '#f9723d' },
    落霞红: { name: '落霞红', pinyin: 'luoxiahong', Hex: '#cf4813' },
    法螺红: { name: '法螺红', pinyin: 'faluohong', Hex: '#ee8055' },
    草珠红: { name: '草珠红', pinyin: 'caozhuhong', Hex: '#f8ebe6' },
    咖啡: { name: '咖啡', pinyin: 'kafei', Hex: '#753117' },
    中灰驼: { name: '中灰驼', pinyin: 'zhonghuituo', Hex: '#603d30' },
    椰壳棕: { name: '椰壳棕', pinyin: 'yekezong', Hex: '#883a1e' },
    蟹蝥红: { name: '蟹蝥红', pinyin: 'xiemaohong', Hex: '#b14b28' },
    淡豆沙: { name: '淡豆沙', pinyin: 'dandousha', Hex: '#873d24' },
    淡桃红: { name: '淡桃红', pinyin: 'dantaohong', Hex: '#f6cec1' },
    淡铁灰: { name: '淡铁灰', pinyin: 'dantiehui', Hex: '#5b423a' },
    石板灰: { name: '石板灰', pinyin: 'shibanhui', Hex: '#624941' },
    淡栗棕: { name: '淡栗棕', pinyin: 'danlizong', Hex: '#673424' },
    银朱: { name: '银朱', pinyin: 'yinzhu', Hex: '#f43e06' },
    草莓红: { name: '草莓红', pinyin: 'caomeihong', Hex: '#ef6f48' },
    洋水仙红: { name: '洋水仙红', pinyin: 'yangshuixianhong', Hex: '#f4c7ba' },
    朱红: { name: '朱红', pinyin: 'zhuhong', Hex: '#ed5126' },
    榴花红: { name: '榴花红', pinyin: 'liuhuahong', Hex: '#f34718' },
    柿红: { name: '柿红', pinyin: 'shihong', Hex: '#f2481b' },
    可可棕: { name: '可可棕', pinyin: 'kekezong', Hex: '#652b1c' },
    淡罂粟红: { name: '淡罂粟红', pinyin: 'danyingsuhong', Hex: '#eea08c' },
    大红: { name: '大红', pinyin: 'dahong', Hex: '#f04b22' },
    柞叶棕: { name: '柞叶棕', pinyin: 'zhayezong', Hex: '#692a1b' },
    蜻蜓红: { name: '蜻蜓红', pinyin: 'qingtinghong', Hex: '#f1441d' },
    橡树棕: { name: '橡树棕', pinyin: 'xiangshuzong', Hex: '#773d31' },
    颊红: { name: '颊红', pinyin: 'jiahong', Hex: '#eeaa9c' },
    桃红: { name: '桃红', pinyin: 'taohong', Hex: '#f0ada0' },
    火岩棕: { name: '火岩棕', pinyin: 'huoyanzong', Hex: '#863020' },
    淡藤萝紫: { name: '淡藤萝紫', pinyin: 'dantengluozi', Hex: '#f2e7e5' },
    赭石: { name: '赭石', pinyin: 'zheshi', Hex: '#862617' },
    铁水红: { name: '铁水红', pinyin: 'tieshuihong', Hex: '#f5391c' },
    胭脂红: { name: '胭脂红', pinyin: 'yanzhihong', Hex: '#f03f24' },
    极光红: { name: '极光红', pinyin: 'jiguanghong', Hex: '#f33b1f' },
    红汞红: { name: '红汞红', pinyin: 'honggonghong', Hex: '#f23e23' },
    萝卜红: { name: '萝卜红', pinyin: 'luobohong', Hex: '#f13c22' },
    曲红: { name: '曲红', pinyin: 'quhong', Hex: '#f05a46' },
    谷鞘红: { name: '谷鞘红', pinyin: 'guqiaohong', Hex: '#f17666' },
    苹果红: { name: '苹果红', pinyin: 'pingguohong', Hex: '#f15642' },
    桂红: { name: '桂红', pinyin: 'guihong', Hex: '#f25a47' },
    粉红: { name: '粉红', pinyin: 'fenhong', Hex: '#f2b9b2' },
    暗驼棕: { name: '暗驼棕', pinyin: 'antuozong', Hex: '#592620' },
    夕阳红: { name: '夕阳红', pinyin: 'xiyanghong', Hex: '#de2a18' },
    樱桃红: { name: '樱桃红', pinyin: 'yingtaohong', Hex: '#ed3321' },
    珊瑚红: { name: '珊瑚红', pinyin: 'shanhuhong', Hex: '#f04a3a' },
    火山棕: { name: '火山棕', pinyin: 'huoshanzong', Hex: '#482522' },
    栗棕: { name: '栗棕', pinyin: 'lizong', Hex: '#5c1e19' },
    鹤顶红: { name: '鹤顶红', pinyin: 'hedinghong', Hex: '#d42517' },
    舌红: { name: '舌红', pinyin: 'shehong', Hex: '#f19790' },
    鹅血石红: { name: '鹅血石红', pinyin: 'exueshihong', Hex: '#ab372f' },
    酱棕: { name: '酱棕', pinyin: 'jiangzong', Hex: '#5a1f1b' },
    鱼鳃红: { name: '鱼鳃红', pinyin: 'yusaihong', Hex: '#ed3b2f' },
    芦穗灰: { name: '芦穗灰', pinyin: 'lusuihui', Hex: '#bdaead' },
    丽春红: { name: '丽春红', pinyin: 'lichunhong', Hex: '#eb261a' },
    覆盆子红: { name: '覆盆子红', pinyin: 'fupenzihong', Hex: '#ac1f18' },
    海报灰: { name: '海报灰', pinyin: 'haibaohui', Hex: '#483332' },
    豆沙: { name: '豆沙', pinyin: 'dousha', Hex: '#481e1c' },
    榴子红: { name: '榴子红', pinyin: 'liuzihong', Hex: '#f1908c' },
    秋海棠红: { name: '秋海棠红', pinyin: 'qiuhaitanghong', Hex: '#ec2b24' },
    无花果红: { name: '无花果红', pinyin: 'wuhuaguohong', Hex: '#efafad' },
    淡绯: { name: '淡绯', pinyin: 'danfei', Hex: '#f2cac9' },
    玫瑰灰: { name: '玫瑰灰', pinyin: 'meiguihui', Hex: '#4b2e2b' },
    淡菽红: { name: '淡菽红', pinyin: 'danshuhong', Hex: '#ed4845' },
    枸枢红: { name: '枸枢红', pinyin: 'goushuhong', Hex: '#ed3333' },
    貂紫: { name: '貂紫', pinyin: 'diaozi', Hex: '#5d3131' },
}



