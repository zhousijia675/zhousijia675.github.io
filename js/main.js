// ECharts图表初始化
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('chart1')) {
        const chart1 = echarts.init(document.getElementById('chart1'));
        const option1 = {
            title: {
                text: '示例数据图表'
            },
            tooltip: {},
            xAxis: {
                data: ['类别1', '类别2', '类别3', '类别4', '类别5']
            },
            yAxis: {},
            series: [{
                name: '数值',
                type: 'bar',
                data: [5, 20, 36, 10, 10]
            }]
        };
        chart1.setOption(option1);
    }

    if (document.getElementById('chart2')) {
        const chart2 = echarts.init(document.getElementById('chart2'));
        const option2 = {
            title: {
                text: '趋势图示例'
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        chart2.setOption(option2);
    }

    // 添加目录交互功能
    const menuItems = document.querySelectorAll('.menu li');
    const contentSections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetContent = this.getAttribute('data-content');
            
            // 如果点击当前活动项，则返回个人简介
            if (this.classList.contains('active')) {
                showContent('profile');
                updateActiveStates('profile');
                return;
            }

            // 更新内容显示
            showContent(targetContent);
            updateActiveStates(targetContent);
        });
    });

    function showContent(contentId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === contentId) {
                section.classList.add('active');
            }
        });
    }

    function updateActiveStates(contentId) {
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-content') === contentId) {
                item.classList.add('active');
            }
        });
    }
}); 