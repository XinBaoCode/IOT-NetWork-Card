const data = Mock.mock({
  'items|30': [{
    t1: '@id',
    t2: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    t3: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/cardList',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
