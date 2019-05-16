import $ from "jquery";
import React from "react";
import {G2,Coord,Label,Chart,Geom,Axis,Tooltip,Legend} from "bizcharts";
import DataSet from "@antv/data-set";
import Slider from "bizcharts-plugin-slider";

let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/g2-area-large/0.3.0/build/mock.json",
  async : false,
  success: (iData) => { data = iData }
});

function getComponent(data) {
  const ds = new DataSet({
    state: {
      start: new Date("2009/7/20 0:00").getTime(),
      end: new Date("2009/9/9 0:00").getTime()
    }
  });
  const dv = ds.createView("origin").source(data);
  dv.transform({
    type: "filter",

    callback(obj) {
      const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较

      return time >= ds.state.start && time <= ds.state.end;
    }
  });
  const scale = {
    time: {
      type: "time",
      tickCount: 8,
      mask: "m/dd hh:MM"
    },
    flow: {
      alias: "流量(m^3/s)"
    },
    rain: {
      alias: "降雨量(mm)"
    }
  };
  let chart;

  class SliderChart extends React.Component {
    onChange(obj) {
      const { startValue, endValue } = obj;
      ds.setState("start", startValue);
      ds.setState("end", endValue);
    }

    render() {
      return (
        <div>
          <Chart
            height={window.innerHeight - 50}
            data={dv}
            padding={[40, 40, 40, 80]}
            scale={scale}
            onGetG2Instance={g2Chart => {
              g2Chart.animate(false);
              chart = g2Chart;
            }}
            forceFit
          >
            <Axis name="rain" grid={null} />
            <Axis name="flow" title />
            <Tooltip />
            <Legend
              custom
              position="top"
              items={[
                {
                  value: "flow",
                  marker: {
                    symbol: "circle",
                    fill: "l(100) 0:#a50f15 1:#fee5d9",
                    radius: 5
                  }
                },
                {
                  value: "rain",
                  marker: {
                    symbol: "circle",
                    fill: "l(100) 0:#293c55 1:#f7f7f7",
                    radius: 5
                  }
                }
              ]}
              onClick={ev => {
                const item = ev.item;
                const value = item.value;
                const checked = ev.checked;
                const geoms = chart.getAllGeoms();

                for (let i = 0; i < geoms.length; i++) {
                  const geom = geoms[i];

                  if (geom.getYScale().field === value) {
                    if (checked) {
                      geom.show();
                    } else {
                      geom.hide();
                    }
                  }
                }
              }}
            />
            <Geom
              type="area"
              position="time*flow"
              color="l(100) 0:#a50f15 1:#f7f7f7"
              opacity={0.85}
            />
            <Geom
              type="area"
              position="time*rain"
              color="l(100) 0:#293c55 1:#f7f7f7"
              opacity={0.85}
            />
          </Chart>
          <div>
            <Slider
              width="auto"
              height={26}
              start={ds.state.start}
              end={ds.state.end}
              xAxis="time"
              yAxis="flow"
              scales={{
                time: {
                  type: "time",
                  tickCount: 10,
                  mask: "M/DD H:mm"
                }
              }}
              data={dv}
              backgroundChart={{
                type: "line"
              }}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  return SliderChart;
}

class Bizcharts extends React.Component {
  
  render() {
    const SliderChart = getComponent(data);
    const data2 = [
      {
        type: "分类一",
        value: 20
      },
      {
        type: "分类二",
        value: 20
      },
      {
        type: "分类三",
        value: 20
      },
      {
        type: "分类四",
        value: 20
      },
      {
        type: "分类五",
        value: 20
      },
      {
        type: "Other",
        value: 20
      }
    ]; // 根据比例，获取两点之间的点

    function getPoint(p0, p1, ratio) {
      return {
        x: (1 - ratio) * p0.x + ratio * p1.x,
        y: (1 - ratio) * p0.y + ratio * p1.y
      };
    }

    const pointRatio = 0.7; // 设置开始变成圆弧的位置 0.7
    // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值

    const sliceNumber = 0.005; // 自定义 other 的图形，增加两条线

    G2.Shape.registerShape("interval", "platelet", {
      draw(cfg, container) {
        cfg.points[1].y = cfg.points[1].y - sliceNumber;
        cfg.points[2].y = cfg.points[2].y - sliceNumber;
        let centerPoint = {
          x: cfg.points[3].x,
          y: (cfg.points[2].y + cfg.points[3].y) / 2
        };
        centerPoint = this.parsePoint(centerPoint);
        const points = this.parsePoints(cfg.points);
        const path = [];
        const tmpPoint1 = getPoint(points[0], points[3], pointRatio);
        const tmpPoint2 = getPoint(points[1], points[2], pointRatio);
        path.push(["M", points[0].x, points[0].y]);
        path.push(["L", tmpPoint1.x, tmpPoint1.y]);
        path.push([
          "Q",
          points[3].x,
          points[3].y,
          centerPoint.x,
          centerPoint.y
        ]);
        path.push(["Q", points[2].x, points[2].y, tmpPoint2.x, tmpPoint2.y]);
        path.push(["L", points[1].x, points[1].y]);
        path.push(["z"]);
        return container.addShape("path", {
          attrs: {
            fill: cfg.color,
            path: path
          }
        });
      }
    });
    return (
      <div>
        <Chart
            height={window.innerHeight}
            data={data2}
            forceFit
            padding={[40, 0]}
          >
            <Coord type="theta" />
            <Tooltip />
            <Geom
              type="intervalStack"
              position="value"
              color="type"
              shape="platelet"
            >
              <Label content="type" />
            </Geom>
          </Chart>
          
        <SliderChart />
      </div>
    );
  }
}
export default Bizcharts