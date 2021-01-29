

export const testApi = () => {
  return {
    1: 'a',
    2: 'b'
  }
}

export const getDataMeun = () => {
  return [
    {
      name: '工作台',
      id: 'workberch',
      children: [
        {
          name: '工作台',
          subId: 'subwork',
          children: [
            {
              name: '首页',
              url: '/index/home'
            },
            {
              name: '我的待办',
              url: '/index/backlog'
            },
            {
              name: '我的通知',
              url: '/index/inform'
            },
            {
              name: '公告',
              url: '/index/notice'
            }
          ]
        }
      ]
    },
    {
      name: '销售管理',
      id: 'sale',
      children: [
        {
          name: '个人销售管理',
          subId: 'perSale',
          children: [
            {
              name: '待反馈询价列表',
              url: "/sale/salefk"
            }
          ]
        },
        {
          name: '团队销售管理',
          subId: 'purSale',
          children: [
            {
              name: '团队报价记录',
              url: "/sale/saletd"
            }
          ]
        }
      ]
    },
    {
      name: '采购管理',
      id: 'po',
      children: [{
        name: '采购管理',
        suId: 'poMange',
        children: [{
          name: '待反馈询价列表',
          url: '/po/poxunjia'
        }]
      }, {
        name: '团队管理',
        children: []
      }]
    },
    {
      name: '财务管理',
      id: 'finiance',
      children: [{
        name: '财务管理',
        suId: 'finianceMange',
        children: [{
          name: '待审核付款申请',
          url: '/po/poxunjia'
        }]
      }]
    },
    {
      name: '仓储管理',
      id: 'store',
      children: [{
        name: '仓储管理',
        suId: 'storeMange',
        children: [{
          name: '库存备货列表',
          url: '/po/poxunjia'
        }]
      }]
    },
    {
      name: 'CRM',
      id: 'crm',
      children: [{
        name: '客户管理',
        suId: 'crmMange',
        children: [{
          name: '我的客户',
          url: '/po/poxunjia'
        }]
      }, {
        name: '供应商管理',
        suId: 'crmsuMange',
        children: [{
          name: '我的供应商',
          url: '/index/home'
        }]
      }]
    },
    {
      name: '产品管理',
      id: 'product',
      children: [{
        name: '产品管理',
        suId: 'proMange',
        children: [{
          name: '产品列表',
          url: '/po/poxunjia'
        }]
      }, {
        name: '价格策略',
        suId: 'propriMange',
        children: [{
          name: '初始系数调整',
          url: '/index/home'
        }]
      }]
    },
    {
      name: '系统设置',
      id: 'systemset',
      children: [{
        name: '系统设置',
        suId: 'systemMange',
        children: [{
          name: '快递物流公司清单',
          url: '/po/poxunjia'
        }]
      }]
    }
  ]
}