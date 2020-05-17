$(function(){
    /*1.注册人数  数据可视化*/
    /*1.1准容器渲染图标*/
    /*1.2准备数据 */
    /*1.3引入核心echarts文件*/
    /*1.4获取dom容器*/
    var firstDom = document.querySelector('.picTable:first-child');
    /*1.5初始化dom容器*/
    var firstCarts = echarts.init(firstDom);
    /*1.6进行配置和导入数据*/
    var option = {
        /*图标的标题*/
        title: {
            text: '2020年注册人数'
        },
        tooltip: {},
        legend: {
            data:['人数']
        },
        xAxis: {
            data: ["1月","2月","3月","4月","5月","6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [1000, 2000, 3600, 1400, 1200, 2220]
        }]
    };
    /*1.7 渲染图标*/
    firstCarts.setOption(option);

    /*2.品牌销量  数据可视化*/
    var secondDom = document.querySelector('.picTable:last-child');
    var secondCarts = echarts.init(secondDom);
    var secondOption = {
        title : {
            text: '热门学校',
            subtext: '2020年6月',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['阜阳师范','浙江大学','上海交通','安徽农业大学','蚌埠学院']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'阜阳师范'},
                    {value:310, name:'浙江大学'},
                    {value:234, name:'上海交通'},
                    {value:135, name:'安徽农业大学'},
                    {value:1548, name:'蚌埠学院'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    secondCarts.setOption(secondOption);
})