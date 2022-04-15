import { style } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import G6 from '@antv/g6';

@Component({
  selector: 'app-liucheng',
  templateUrl: './liucheng.component.html',
  styleUrls: ['./liucheng.component.less']
})

export class LiuchengComponent implements OnInit {
  @ViewChild('mountNode', { static: false }) mountNode!: any;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    setTimeout(() => { this.torenden(this.data); }, 100);
  }

  data = {
    // 点集
    nodes: [
      {
        id: 'node1',
        x: 100,
        y: 100,
        img: '../../assets/Group 3791.svg',
        size: 50,
        label: 'node1',
        labelCfg: {
          position: 'bottom'
        },
      },
    ],
    // 边集
    edges: [],

  };
  svg
  isVisible = false;
  opention
  selectedValue
  // node节点变量
  selectnode
  // 固定移动份数
  contnum = 100
  initnum = 250

  showModal(): void {
    this.isVisible = true;
  }

  // 关联环节确认
  handleOk(): void {
    // console.log( this.selectnode, this.selectedValue);
    let sourcey = this.selectedValue.y;
    let sourcex = this.selectedValue.x;
    const graph = this.svg;
    let newx = 100
    let newy = 200
    // 选中的节点的关联信息
    let fillnodews = this.getcount(this.selectedValue)

    // 添加边
    this.addedge(this.selectedValue['id'], this.selectnode['id'], sourcex, sourcey)
    this.nodename = `node${this.y}`

    // 循环判断第一条节点 确定初始位置
    if (graph.save().nodes.length >= 1) {
      graph.save().nodes.forEach(item => {
        let resnode = this.getcount(item)
        if (resnode.scount <= 0) {
          // 第一条的初始位置直接固定
          this.changexy(resnode['sarr'][0]['source'], 100, this.initnum)
          this.changexyrecursion(resnode['sarr'][0]['source']);
        }

      });
    }
    this.isVisible = false;
    return
  }
  // 关联环节取消
  handleCancel(): void {
    this.isVisible = false;
  }

  selectnodedata(event) {
    // console.log(event);
  }

  y = 70
  nodename = `node${this.y}`

  // 添加节点
  addnode() {
    const graph = this.svg;
    graph.addItem('node', {
      x: this.y,
      y: 400,
      size: 50,
      label: this.nodename,
      id: this.nodename,
      img: '../../assets/Group 3791.svg',
    });
    this.y = this.y + 100;
    this.opention = graph.save().nodes
  }

  // 添加边
  addedge(source, target, x, y) {
    const graph = this.svg;
    graph.addItem('edge', {
      source: source,
      target: target,
      type: 'polyline',
      controlPoints: [],
    });
  }

  // 渲染函数
  torenden(datalist) {
    const data = datalist
    // 创建 G6 图实例
    const graph = new G6.Graph({
      modes: {
        default: ['drag-canvas'],
      },
      container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width: window.innerWidth,
      height: 600,
      defaultNode: {
        // ... 其他属性
        type: 'image',
        style: {
          fill: '#ffffff',
          stroke: '#538CDF',
          lineWidth: 1,
        }
      },

      defaultEdge: {
        // ... 其他属性
        style: {
          stroke: '#D9D9D9',
          lineWidth: 2,
          lineDash: [5, 5, 5]
        },
      }
    });
    this.svg = graph
    // 读取数据
    graph.data(data);
    // 渲染图
    graph.render();

    // 初始下拉赋值
    this.opention = graph.save().nodes
    // console.log( this.opention);


    graph.on('node:click', event => {
      this.selectnode = event['item']['_cfg']['model']
      // console.log( this.selectnode);
      // console.log( this.opention);
      this.isVisible = true;
    });



  }


  // 递归修改节点的xy轴
  changexyrecursion(nodeid) {


    const graph = this.svg;
    let node = this.getnode(nodeid)
    let countnode = this.getcount(node)
    let edges = graph.getEdges()
    let xy = this.getxy(nodeid)

    // 无上一条多条上下一环节
    if ((countnode['scount'] == 0) && (countnode['tcount'] > 1)) {
      console.log(' 无上一条多条上下一环节');

      for (let i = 0; i < countnode['sarr'].length; i++) {
        console.log(countnode['sarr'][i]['target'],xy['x'] + (400), 125 * (i + 1));

        this.changexy(countnode['sarr'][i]['target'], xy['x'] + (400), 125 * (i + 1))
      }
    }

    // 无上一条只有一条下一环节
    if ((countnode['scount'] == 0) && (countnode['tcount'] == 1)) {
      console.log(' 无上一条只有一条下一环节');

      for (let i = 0; i < countnode['sarr'].length; i++) {
        console.log(countnode['sarr'][i]['target'],xy['x'] + (400), xy['y']);

        this.changexy(countnode['sarr'][i]['target'], xy['x'] + (400), xy['y'])
      }
    }

// 有上一条和有多条下一条
    if ((countnode['scount'] > 0) && (countnode['tcount'] >=1)) {
      console.log('有上一条和有多条下一条');

      for (let i = 0; i < countnode['sarr'].length; i++) {
        console.log(countnode['sarr'][i]['target'],xy['x'] + (400), 125 * (i + 1));

        this.changexy(countnode['sarr'][i]['target'], xy['x'] + (400), 125 * (i + 1))
      }
    }

    // 多条上一条只有一条下一条
    if ((countnode['scount'] >0) && (countnode['tcount'] ==1)) {
      console.log('有上一条只有一条下一条');

      for (let i = 0; i < countnode['sarr'].length; i++) {
        console.log(countnode['sarr'][i]['target'],xy['x'] + (400), xy['y']);

        this.changexy(countnode['sarr'][i]['target'], xy['x'] + (400), xy['y'])
      }
    }

// 上下只有一条
    if ((countnode['scount'] ==1) && (countnode['tcount'] ==1)) {
      let newxy =this.getxy(countnode['sarr'][0]['target'])

      console.log('上下只有一条',countnode['sarr'][0],newxy);

      for (let i = 0; i < countnode['sarr'].length; i++) {
        console.log(countnode['sarr'][i]['target'],xy['x'] + (400), xy['y']);
        this.changexy(countnode['sarr'][i]['target'], newxy['x'] , newxy['y'])
      }
    this.changecontrolPoints(nodeid,xy)

    }

    // // 有上一条无下一条
    // if ((countnode['scount'] >= 1) && (countnode['tcount'] ==0)) {
    //   console.log('有上一条无下一条');

    //   for (let i = 0; i < countnode['sarr'].length; i++) {
    //     this.changexy(countnode['sarr'][i]['target'], xy['x'] ,xy['y'])
    //   }
    // }
// console.log(nodeid, xy);


    this.changecontrolPoints(nodeid, xy)
    if (countnode.scount == 0) {
      return false
    }

    return

  }



  // 修改controlPoints
  changecontrolPoints(nodeid, sondexy) {
    const graph = this.svg;
    let node = this.getnode(nodeid)
    let edges = graph.getEdges()
    edges.forEach(item => {


      if (item._cfg.model.source === nodeid) {
        let tnodexy = this.getxy(item._cfg.model.target)

        console.log(item._cfg.model ,nodeid,sondexy,tnodexy);

        if (sondexy.y !== tnodexy['y']) {
          item['_cfg']['model']['controlPoints'] = [{ x: Math.ceil(sondexy['x'] + ((tnodexy['x'] - sondexy['x']) / 2)), y: tnodexy['y'] }]
        }
        this.changexyrecursion(item._cfg.model['target'])
      }



      // console.log(item._cfg.model);

      //   let tnodexy = this.getxy(item._cfg.model.target)

      //   if (sondexy.y !== tnodexy['y']) {
      //   console.log(item._cfg.model.source ,tnodexy,nodeid,sondexy);

      //     item['_cfg']['model']['controlPoints'] = [{ x: Math.ceil(sondexy['x'] + ((tnodexy['x'] - sondexy['x']) / 2)), y: sondexy['y'] }]
      //   }
      //   // this.changexyrecursion(item._cfg.model['target'])

      // }
    })
    graph.refresh()
  }





  // 各种工具函数

  // 计算节点的关联数量
  getcount(node) {
    const graph = this.svg;
    let scount = 0;
    let tcount = 0;
    let nodecountarr = []
    graph.getEdges().forEach(item => {
      if (item._cfg.model.source === node.id) {
        let obj = {
          sourcenode: item._cfg.model,
        }
        nodecountarr.push(obj)
        tcount++;
      }
    });
    graph.getEdges().forEach(item => {
      if (item._cfg.model.target === node.id) {
        let obj = {
          targetnode: item._cfg.model
        }
        nodecountarr.push(obj)
        scount++;
      }
    });
    nodecountarr.push({ scount: scount }, { tcount: tcount })
    return this.fillternodedata(nodecountarr);


  }


  // 处理节点数据
  fillternodedata(data) {
    let sarr = []
    let tarr = []
    let scount = 0;
    let tcount = 0;

    data.forEach(item => {
      if (item['sourcenode']) {
        sarr.push(item['sourcenode'])
      }
      if (item['targetnode']) {
        tarr.push(item['targetnode'])
      }
      if (item['scount']) {
        scount = item['scount']
      }
      if (item['tcount']) {
        tcount = item['tcount']
      }
    })
    return { sarr, tarr, scount, tcount }
  }

  // 修改节点的xy轴
  changexy(nodeid, x, y) {
    const graph = this.svg;
    graph.save().nodes.forEach(item => {
      if (item.id === nodeid) {
        item.x = x;
        item.y = y;
      }
    })
    graph.refresh()
  }


  //获得节点的xy轴
  getxy(nodeid) {
    const graph = this.svg;
    let xy = {}
    graph.save().nodes.forEach(item => {
      if (item.id === nodeid) {
        xy = { x: item.x, y: item.y }
      }
    })
    return xy
  }

  // 根据id获取节点
  getnode(nodeid) {
    const graph = this.svg;
    let node = {}
    graph.save().nodes.forEach(item => {
      if (item.id === nodeid) {
        node = item
      }
    })
    return node
  }





}
