/**
 * 
 * @param {*} itemList 
 */

function creatMenuData (itemList) {
  let re = []
  itemList.forEach(element => {
    let route = element.route
    let routeNodes = route.split('/')
    let lastGroup = null
    _.forEach(routeNodes, (routeNode, index) => {
      let first = index === 0
      let end = index === routeNodes.length - 1
      if (first) {
        let group = re.find(item => item.label === routeNode)
        if (group) {
          lastGroup  = group
        } else {
          lastGroup = this.creatGroup(routeNode, routeNode, [])
        }
      } else if (end) {
        lastGroup.children.push(this.creatItem(routeNode, element.type))
      }else {
        let group = lastGroup.children.find(item => item.label === routeNode)
        if (group) {
          lastGroup = group
        } else {
          let sub = this.creatGroup(routeNode, routeNode, [])
          lastGroup.children.push(sub)
          lastGroup = sub
        }
      }
    })
  })
}

function creatItem (label, value) {
  let template = {
    label,
    value
  }
  return template
}

function creatGroup (label, value, items) {
  let template = {
    label: label,
    value: value,
    children: items
  }
  return template
}