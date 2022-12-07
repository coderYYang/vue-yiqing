// 开发成 Vue 插件使用echarts

// 导入 echarts
import echarts from 'echarts'
// 导入地图 js
import './map'
// // 导入世界地图翻译映射
import nameMap from './worldName'
// // 导入城市地图

const install = function (Vue, options) {
  // 添加实例方法
  // Vue.prototype.demo = function () {}
  /**
   * Object.defineProperties(obj, props)
   *    方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象
   *    obj，在其上定义或修改的属性对象
   *    props，要定义其可枚举属性或修改的属性描述符的对象
   */
  Object.defineProperties(Vue.prototype, {
    $myChart: {
      get() {
        return {
          // 中国地图
          chinaMap(id, data) {
            const myChart = echarts.init(document.getElementById(id));
            const options = {
              // 悬浮弹框
              tooltip: {
                triggerOn: 'click', // 提示条件
                enterable: true, // 鼠标是否可以进入提示框中，默认 false
                formatter(data) {
                  return `省份：${data.name} <br/> 确诊人数：${data.value} <hr> <div style="text-align: center;"><a href="#/citys/${data.name}" style="color:#fff;">详情</a></div>`
                }
              },
              // 映射高亮颜色
              visualMap: {
                orient: 'horizontal', // 水平
                type: 'piecewise', // 离散
                bottom: 0,
                itemGap: 5,
                itemWidth: 16,
                itemHeight: 10,
                padding: 2,
                textStyle: {
                  fontSize: 12
                },
                pieces: [
                  {
                    min: 0,
                    max: 0,
                    color: '#FFFFFF'
                  },
                  {
                    min: 1,
                    max: 100,
                    color: '#FDFDCF'
                  },
                  {
                    min: 100,
                    max: 1000,
                    color: '#FE9E83'
                  },
                  {
                    min: 1000,
                    max: 5000,
                    color: '#E55A4E'
                  },
                  {
                    min: 5000,
                    // max: 10000,
                    color: '#4F0700'
                  }
                ],
              },
              series: [{
                name: '省',
                type: 'map',
                map: 'china', // 中国地图
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0, 255, 236, 0)',
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  },
                  // 选中区域颜色以及阴影效果等
                  emphasis: {
                    areaColor: 'rgba(255, 180, 0, 0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data: data
              }]
            };
            myChart.setOption(options);
          },
          // 城市地图
          cityMap(id, cityName, data) {
            const myChart = echarts.init(document.getElementById(id));
            const options = {
              // 悬浮弹框
              tooltip: {
                triggerOn: 'click', // 提示条件
                enterable: true, // 鼠标是否可以进入提示框中，默认 false
                formatter(data) {
                  return `城市：${data.name} <br/> 确诊人数： ${data.value}`
                }
              },
              // 映射高亮颜色
              visualMap: {
                orient: 'horizontal', // 水平
                type: 'piecewise', // 离散
                bottom: 0,
                pieces: [
                  {
                    min: 0,
                    max: 0,
                    color: '#FFFFFF'
                  },
                  {
                    min: 1,
                    max: 10,
                    color: '#FDFDCF'
                  },
                  {
                    min: 100,
                    max: 100,
                    color: '#FE9E83'
                  },
                  {
                    min: 100,
                    max: 500,
                    color: '#E55A4E'
                  },
                  {
                    min: 500,
                    max: 10000,
                    color: '#4F0700'
                  }
                ],
              },
              series: [{
                name: '市',
                type: 'map',
                map: cityName, // 中国城市地图
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 20,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0, 255, 236, 0)',
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  },
                  // 选中区域颜色以及阴影效果等
                  emphasis: {
                    areaColor: 'rgba(255, 180, 0, 0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data: data
              }]
            };
            myChart.setOption(options);
          },
          // 世界地图
          worldMap(id, data) {
            const myChart = echarts.init(document.getElementById(id));
            const options = {
              // 悬浮弹框
              tooltip: {
                triggerOn: 'click', // 提示条件
                enterable: true, // 鼠标是否可以进入提示框中，默认 false
                formatter(data) {
                  return `国家：${data.name} <br/> 确诊人数： ${data.value}`
                }
              },
              visualMap: {
                orient: 'vertical', // 水平
                type: 'piecewise', // 离散
                bottom: 0,
                itemGap: 5,
                itemWidth: 16,
                itemHeight: 10,
                padding: 2,
                textStyle: {
                  fontSize: 10
                },
                pieces: [
                  {
                    min: 0,
                    max: 0,
                    color: '#FFFFFF'
                  },
                  {
                    min: 1,
                    max: 10000,
                    color: '#FDFDCF'
                  },
                  {
                    min: 10000,
                    max: 100000,
                    color: '#FE9E83'
                  },
                  {
                    min: 100000,
                    max: 500000,
                    color: '#E55A4E'
                  },
                  {
                    min: 500000,
                    // max: 10000,
                    color: '#4F0700'
                  }
                ],
              },
              series: [{
                name: '国',
                type: 'map',
                map: 'world', // 世界地图
                nameMap: nameMap,
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: false,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0, 255, 236, 0)',
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                  },
                  // 选中区域颜色以及阴影效果等
                  emphasis: {
                    areaColor: 'rgba(255, 180, 0, 0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data: data
                // data: [
                //   {name: '江西', value: 200},
                //   {name: '湖北', value: 2200},
                // ]
              }]
            }
            myChart.setOption(options);
          }
        }
      }
    }
  })
}

export default install
