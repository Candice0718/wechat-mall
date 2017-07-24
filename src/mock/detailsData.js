const pdtDetails = {
  pdtid: '4801',
  pdtInfo: {
    tags: '自营',
    id: 4801,
    stylename: '18080032',
    price: '123',
    originPrice: '187',
    saleNum: '12',
    mainPics: ['../images/index/carousel1.jpg', '../images/index/carousel2.png'],
    note: '派克 IM 纯黑丽雅金夹钢笔'
  },
  vname: [
    {
      'key': 'color',
      'label': '颜色'
    },
    {
      'key': 'size',
      'label': '尺寸'
    }
  ],
  color: [
    {
      label: '黑色',
      code: '000',
      disable: false,
      note: [
        {
          n: '可用库存:',
          v: 15
        },
        {
          n: '已销售数量:',
          v: 20
        }
      ],
      cascade: {
        size: [0,1,1,1,0]
      }
    },
    {
      label: '白色',
      code: '001',
      disable: false,
      note: [
        {
          n: '可用库存:',
          v: 12
        },
        {
          n: '已销售数量:',
          v: 28
        }
      ],
      cascade: {
        size: [0,1,0,0,1]
      }
    },
    {
      label: '灰色',
      code: '002',
      disable: true,
      note: [
        {
          n: '可用库存:',
          v: 18
        },
        {
          n: '已销售数量:',
          v: 5
        }
      ],
      cascade: {
        size: [1,1,1,1,0]
      }
    }
  ],
  size: [
    {
      label: '35',
      code: 'x00',
      disable: false,
      note: [
        {
          n: '可用库存:',
          v: 18
        },
        {
          n: '已销售数量:',
          v: 8
        }
      ],
      cascade: {
        color: [1,1,1]
      }
    },
    {
      label: '36',
      code: 'x01',
      disable: false,
      note: [
        {
          n: '可用库存:',
          v: 10
        },
        {
          n: '已销售数量:',
          v: 3
        }
      ],
      cascade: {
        color: [1,1,0]
      }
    },
    {
      label: '37',
      code: 'x02',
      disable: false,
      note: [
        {
          n: '可用库存:',
          v: 6
        },
        {
          n: '已销售数量:',
          v: 3
        }
      ],
      cascade: {
        color: [1,0,0]
      }
    },
    {
      label: '38',
      code: 'x03',
      disable: false,
      note: [
        {
          n: '可用库存:',
          v: 5
        },
        {
          n: '已销售数量:',
          v: 3
        }
      ],
      cascade: {
        color: [1,0,1]
      }
    },
    {
      label: '39',
      code: 'x04',
      disable: true,
      note: [
        {
          n: '可用库存:',
          v: 8
        },
        {
          n: '已销售数量:',
          v: 7
        }
      ],
      cascade: {
        color: [1,1,1]
      }
    }
  ]
};
const navBarContent = [
  {
    content: '<h1 style="width: 100%; text-align: center;">图文详情</h1><image src="../images/index/carousel1.jpg"></image>'
  },
  {
    content: '<h1 style="width: 100%; text-align: center;">商品详情</h1>'
  },
  {
    content: '<h1 style="width: 100%; text-align: center;">用户评价</h1>'
  }
];
const pdtStandStandardData = [
  {
    title: '商品概要',
    description: [
      '商品名称: 劲农秋田小丁大米',
      '本商品配套：主品： 秋田小丁米5kg/袋*3',
      '尺寸／规格： 等级：优质一等',
      '容器，包装的形态及材质：供应商包装'
    ]
  },
  {
    title: '商品特征',
    description: [
      '特点： 1.含有胚芽；2.性价比高；3.口感软糯'
    ]
  },
  {
    title: '注意事项',
    description: [
      '订购接收时注意事项：外包装保持完整',
      '退货时注意事项：保留外包装'
    ]
  }
];
const commentsInfo = {
  total: 18,
  score: 5,
  start: 0,
  pageSize: 20,
  commentList: [
    {
      avater: '../images/avater.png',
      nickname: '网**员1',
      score: 5,
      comment: '包装非常好真空包装很好',
      date: '2017-07-24'
    },
    {
      avater: '../images/avater.png',
      nickname: '网**员2',
      score: 4,
      comment: '包装非常好真空包装很好',
      date: '2017-07-24'
    },
    {
      avater: '../images/avater.png',
      nickname: '网**员3',
      score: 3,
      comment: '包装非常好真空包装很好',
      date: '2017-07-24'
    },
    {
      avater: '../images/avater.png',
      nickname: '网**员4',
      score: 5,
      comment: '包装非常好真空包装很好',
      date: '2017-07-24'
    },
    {
      avater: '../images/avater.png',
      nickname: '网**员5',
      score: 5,
      comment: '包装非常好真空包装很好',
      date: '2017-07-24'
    },
  ]
};
export default {
  pdtDetails,
  navBarContent,
  pdtStandStandardData,
  commentsInfo
}
