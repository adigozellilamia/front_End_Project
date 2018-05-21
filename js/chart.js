$(document).ready(function () {
    function getRandomDataArray(min, max, count) {

        var data = [];

        for (var i = 0, l = count; i < l; i++) {
            data.push(getRandomNumber(min, max));
        }

        return data;
    }
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function hex2RGBA(hex, opacity) {

        var r, g, b;

        hex = hex.replace('#', '');

        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    }
    var THEME_COLORS = {

        PRIMARY: '#6f21c0',
        SECONDARY: '#00bdd5',
        DARK: '#333333',
        LIGHT: '#f7f7f7',
        DEFAULT: '#00bdd5',
        SUCCESS: '#13b42b',
        INFO: '#209ca9',
        WARNING: '#ec531f',
        DANGER: '#e31e62'

    };
    var $widgetSiteVisitsChart = $('#widget-site-visits-chart');
    if ($widgetSiteVisitsChart.length > 0) {

        new Chart($widgetSiteVisitsChart, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: ' Current week visits',
                    data: getRandomDataArray(0, 800, 7),
                    backgroundColor: hex2RGBA(THEME_COLORS.DEFAULT, 100)
                }, {
                    label: ' Target visits',
                    data: getRandomDataArray(500, 700, 7),
                    backgroundColor: hex2RGBA(THEME_COLORS.DANGER, 100)
                }]
            },
            options: {
                responsive: true,
                legend: { display: false },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            zeroLineColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 1000,
                            stepSize: 250,
                            beginAtZero: true
                        },
                        gridLines: {
                            zeroLineColor: 'transparent'
                        }
                    }]
                }
            }
        });
    }

    var $widgetTrafficSourcesChart = $('#widget-traffic-sources-chart');
    if ($widgetTrafficSourcesChart.length > 0) {

        new Chart($widgetTrafficSourcesChart, {
            type: 'doughnut',
            data: {
                labels: ['PC', 'Tablet', 'Mobile'],
                datasets: [{
                    label: ' CPU usage',
                    data: getRandomDataArray(700, 1000, 3),
                    backgroundColor: [
                        hex2RGBA(THEME_COLORS.INFO, 90),
                        hex2RGBA(THEME_COLORS.SUCCESS, 90),
                        hex2RGBA(THEME_COLORS.DANGER, 90)
                    ],
                    borderColor: '#fff',
                    hoverBorderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        });
    }
    var $demo_chart_polar_area_preview = $('#demo-chart-polar-area-preview');
    if ($demo_chart_polar_area_preview.length > 0) {
        new Chart($demo_chart_polar_area_preview, {
            type: 'polarArea',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345, 1101],
                    backgroundColor: [
                        hex2RGBA(THEME_COLORS.PRIMARY, 100),
                        hex2RGBA(THEME_COLORS.INFO, 100),
                        hex2RGBA(THEME_COLORS.SUCCESS, 100),
                        hex2RGBA(THEME_COLORS.WARNING, 100),
                        hex2RGBA(THEME_COLORS.DANGER, 100),
                        hex2RGBA(THEME_COLORS.DARK, 100)
                    ],
                    borderColor: '#fff',
                    hoverBorderColor: '#fff',
                    borderWidth: 1,
                    highlight: "#A8B3C5"
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{ ticks: { beginAtZero: true } }]
                }
            }
        });
    }
    var $demo_chart_line = $('#demo-chart-line');
    if ($demo_chart_line.length > 0) {
        new Chart($demo_chart_line, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345, 1101, 1469],
                    backgroundColor: hex2RGBA(THEME_COLORS.PRIMARY, 100),
                    borderColor: hex2RGBA(THEME_COLORS.PRIMARY, 100),
                    borderWidth: 3,
                    pointRadius: 3,
                    pointHitRadius: 5,
                    fill: false
                }, {
                    label: ' Last Week Visits',
                    data: [787, 591, 398, 402, 786, 978, 1150],
                    backgroundColor: hex2RGBA(THEME_COLORS.SECONDARY, 100),
                    borderColor: hex2RGBA(THEME_COLORS.SECONDARY, 100),
                    borderWidth: 3,
                    pointRadius: 3,
                    pointHitRadius: 5,
                    fill: false
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    xAxes: [{
                        gridLines: {
                            zeroLineColor: 'transparent'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawTicks: false,
                            display: false
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    var $demo_chart_bar = $('#demo-chart-bar');
    if ($demo_chart_bar.length > 0) {
        new Chart($demo_chart_bar, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345, 1101, 1469],
                    backgroundColor: [
                        hex2RGBA(THEME_COLORS.PRIMARY, 100),
                        hex2RGBA(THEME_COLORS.INFO, 100),
                        hex2RGBA(THEME_COLORS.SUCCESS, 100),
                        hex2RGBA(THEME_COLORS.WARNING, 100),
                        hex2RGBA(THEME_COLORS.DARK, 100),
                        hex2RGBA(THEME_COLORS.DANGER, 100),
                        hex2RGBA(THEME_COLORS.PRIMARY, 100)
                    ],
                    borderColor: [
                        hex2RGBA(THEME_COLORS.PRIMARY, 100),
                        hex2RGBA(THEME_COLORS.INFO, 100),
                        hex2RGBA(THEME_COLORS.SUCCESS, 100),
                        hex2RGBA(THEME_COLORS.WARNING, 100),
                        hex2RGBA(THEME_COLORS.DARK, 100),
                        hex2RGBA(THEME_COLORS.DANGER, 100),
                        hex2RGBA(THEME_COLORS.PRIMARY, 100)
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{ ticks: { beginAtZero:true } }]
                }
            }
        });
    }
    var $demo_chart_radar = $('#demo-chart-radar');
    if ($demo_chart_radar.length > 0) {
        new Chart($demo_chart_radar, {
            type: 'radar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {

                        label: ' Current Week Visits',
                        backgroundColor: hex2RGBA(THEME_COLORS.SECONDARY, 50),

                        borderWidth: 1,
                        borderColor: hex2RGBA(THEME_COLORS.SECONDARY, 70),

                        pointBackgroundColor: hex2RGBA(THEME_COLORS.SECONDARY, 70),
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: hex2RGBA(THEME_COLORS.SECONDARY, 70),

                        data: [879, 891, 1054, 398, 1345, 1101, 1469]
                    },
                    {

                        label: ' Last Week Visits',
                        backgroundColor: hex2RGBA(THEME_COLORS.DARK, 50),

                        borderWidth: 1,
                        borderColor: hex2RGBA(THEME_COLORS.DARK, 70),

                        pointBackgroundColor: hex2RGBA(THEME_COLORS.DARK, 70),
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: hex2RGBA(THEME_COLORS.DARK, 70),

                        data: [1500, 891, 398, 1000, 786, 978, 1150]
                    }
                ]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{
                        display: false,
                        ticks: { beginAtZero: true }
                    }]
                }
            }
        });
    }
    var $demo_chart_polar_area = $('#demo-chart-polar-area');
    if ($demo_chart_polar_area.length > 0) {
        new Chart($demo_chart_polar_area, {
            type: 'polarArea',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345, 1101],
                    backgroundColor: [
                        hex2RGBA(THEME_COLORS.PRIMARY, 100),
                        hex2RGBA(THEME_COLORS.INFO, 100),
                        hex2RGBA(THEME_COLORS.SUCCESS, 100),
                        hex2RGBA(THEME_COLORS.WARNING, 100),
                        hex2RGBA(THEME_COLORS.DANGER, 100),
                        hex2RGBA(THEME_COLORS.DARK, 100)
                    ],
                    borderColor: '#fff',
                    hoverBorderColor: '#fff',
                    borderWidth: 1,
                    highlight: "#A8B3C5"
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{ ticks: { beginAtZero: true } }]
                }
            }
        });
    }
    var $demo_chart_pie = $('#demo-chart-pie');
    if ($demo_chart_pie.length > 0) {
        new Chart($demo_chart_pie, {
            type: 'pie',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345],
                    backgroundColor: [
                        hex2RGBA(THEME_COLORS.PRIMARY, 100),
                        hex2RGBA(THEME_COLORS.INFO, 100),
                        hex2RGBA(THEME_COLORS.SUCCESS, 100),
                        hex2RGBA(THEME_COLORS.DANGER, 100),
                        hex2RGBA(THEME_COLORS.DARK,100)
                    ],
                    borderColor: '#fff',
                    hoverBorderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display : true,
                    text    : 'Pie chart',
                    fontSize: 14,
                    color   : '#555'
                }
            }
        });
    }



});