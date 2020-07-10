Page({
  data: {
    allForm:[
      {title:'申请事项编号',type:'text',required:true,value:'',name:"itemNumber"},
      {title:'申请开始时间',type:'text',required:true,value:'',name:"startTime"},
      {title:'事项名称',type:'text',required:false,value:'',name:"itemName"},
      {title:'结束时间',type:'text',required:true,value:'',name:"endTime"},
    ],
    btnList:[
      {title:"全部",type:"default",value:1,class:"button-left"},
      {title:"在办",type:"default",value:2,class:"button-right"},
      {title:"已办结",type:"default",value:3,class:"button-right"},
      {title:"不予兑现",type:"default",value:4,class:"button-right"},
      {title:"中止申请",type:"default",value:5,class:"button-right"},
    ],
    curretType:"",
    news:[
      {
        title:"投资促进局一事一议或一企一策的扶持奖金",
        name:"TCC-5458415",
        time:"2018-05-24 16:20:15",
        price:"1.00",
        status:"预审不通过",
        num:"01"
      },
      {
        title:"啦啦啦啦啦啦啦啦啦",
        name:"TCC-5458415",
        time:"2018-05-24 16:20:15",
        price:"1.00",
        status:"预审不通过",
        num:"02"
      },
      {
        title:"广州市天河区科韵路",
        name:"TCC-5458415",
        time:"2018-05-24 16:20:15",
        price:"1.00",
        status:"预审不通过",
        num:"03"
      },
      {
        title:"哈哈哈啊哈哈",
        name:"TCC-5458415",
        time:"2018-05-24 16:20:15",
        price:"1.00",
        status:"通过",
        num:"04"
      },
      {
        title:"中国人民政府",
        name:"TCC-5458415",
        time:"2018-05-24 16:20:15",
        price:"1.00",
        status:"不通过",
        num:"05"
      },
    ]
  },
  handleInput(e){
    let targetData = e.detail.value;    // 当前输入框的数据
    let currentName = e.currentTarget.dataset.name; // 当前的输入框的自定义属性
    this.data.allForm.forEach(item=>{
      if(item.name == currentName){
        item.value = targetData
      }
    })
  },
  handleSelect(e){
    let index = e.currentTarget.dataset.index
    let currentList = this.data.btnList.map((item, cindex) => {
      item.type = index == cindex ? "primary" : "default";
      return item
    });
    this.setData({
      btnList:currentList,
      currentType:index
    })
  },
  onReachBottom(){
    wx.showLoading({
      title: '加载中',
    })
    let haha = {
      title:"广州市天河区科韵路",
      name:"TCC-5458415",
      time:"2018-05-24 16:20:15",
      price:"1.00",
      status:"预审不通过",
      num:"06"
    }
    let list = this.data.news
    list.push(haha)

    setTimeout(()=> {
      this.setData({ news:list })
      wx.hideLoading()
    }, 500)

    

  }
})
