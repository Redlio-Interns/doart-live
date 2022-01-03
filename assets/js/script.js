// dashboard chart compare js
var options = {
    chart: {
        height: '150',
        type: "area",
        toolbar: false
    },
    series: [{
        name: "Orders",
        data: [31, 32, 29, 27, 38]
    }],
    xaxis: {
        categories: ["10k", "20k", "30k", "40k", "50k"]
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "straight",
        width: 1,
    },
    grid: {
        show: false
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    legend: {
        show: false
    },
    yaxis: {
        show: false
    },
    colors: ["#B79B6C"]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

// dashboard chart compare js end

// sales chart compare
var options = {
    chart: {
        type: 'line',
        stacked: true,
        background: '#fff',
        toolbar: false,
        defaultLocale: 'en',
        fontFamily: 'Inter',
        foreColor: '#6A707E',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '140%',
        height: '250',
        redrawOnWindowResize: true
    },
    series: [{
        name: 'Net Sales',
        type: 'column',
        data: [2500, 2500, 2500, 2500, 2500, 2500]
    },
    {
        name: 'Orders',
        type: 'area',
        data: [1560, 1600, 2000, 1350, 1200, 2000]
    }
    ],
    xaxis: {
        type: 'dd/mm/yy',
        lines: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    grid: {
        show: false,
        borderColor: '#B79B6C',
        strokeDashArray: 0,
        position: 'back',
    },
    legend: {
        show: false
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return "$" + value;
            }
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '10px',
            barHeight: '96px'
        }
    },
    labels: [
        '27/10/2021', '28/10/2021', '29/10/2021', '30/10/2021', '31/10/2021',
        '01/11/2021', '02/11/2021', '03/11/2021', '04/11/2021', '05/11/2021',
        '06/12/2021', '07/12/2021', '08/12/2021', '09/12/2021', '10/12/2021'
    ],
    markers: {
        size: 0
    },
    colors: ['#B79B6C'],
    fill: {
        opacity: [0.3, 0.03, 1],
        colors: ['#B79B6C']
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0);
                }
                return y;
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);

chart.render();

// sales chart compare end


// menu scripts
$('.hamburger-container').click(function () {
    $(this).toggleClass('open');
    $('.doart-content .content-sidebar').toggleClass('active');
});

$('.doart-sidebar>ul>li').click(function () {
    $('.doart-content .content-sidebar').addClass('active');
});

$('.toggle-menu-button').click(function () {
    $('.doart-content .content-sidebar').removeClass('active');
});

// menu scripts