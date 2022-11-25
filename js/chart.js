// quickchart-js https://github.com/typpo/quickchart-js

const QuickChart = require('quickchart-js');

const chart = new QuickChart();

chart.setWidth(500)
chart.setHeight(300);
chart.setVersion('undefined');

chart.setConfig({
  "type": "pie",
  "data": {
    "datasets": [
      {
        "fill": true,
        "spanGaps": false,
        "lineTension": 0.4,
        "pointRadius": 3,
        "pointHoverRadius": 3,
        "pointStyle": "circle",
        "borderDash": [
          0,
          0
        ],
        "barPercentage": 0.9,
        "categoryPercentage": 0.8,
        "data": [
          80,
          72,
          76,
          76,
          25,
          25
        ],
        "type": "pie",
        "label": "Dataset 1",
        "borderColor": "#ffffff",
        "backgroundColor": [
          "#4E79A7",
          "#F28E2B",
          "#E15759",
          "#76B7B2",
          "#59A14F",
          "#EDC948"
        ],
        "borderWidth": 3,
        "hidden": false
      }
    ],
    "labels": [
      "Illustrator",
      "Figma",
      "HTML",
      "CSS",
      "Javascript",
      "Git"
    ]
  },
  "options": {
    "title": {
      "display": true,
      "position": "top",
      "fontSize": 21,
      "fontFamily": "sans-serif",
      "fontColor": "#ffffff",
      "fontStyle": "bold",
      "padding": 10,
      "lineHeight": 1.2,
      "text": "Experience"
    },
    "layout": {
      "padding": {
        "left": 0,
        "right": 0,
        "top": 0,
        "bottom": 0
      }
    },
    "legend": {
      "display": true,
      "position": "top",
      "align": "center",
      "fullWidth": true,
      "reverse": false,
      "labels": {
        "fontSize": 12,
        "fontFamily": "sans-serif",
        "fontColor": "#ffffff",
        "fontStyle": "normal",
        "padding": 10
      }
    },
    "scales": {
      "xAxes": [
        {
          "id": "X1",
          "display": false,
          "position": "bottom",
          "type": "category",
          "stacked": false,
          "time": {
            "unit": false,
            "stepSize": 1,
            "displayFormats": {
              "millisecond": "h:mm:ss.SSS a",
              "second": "h:mm:ss a",
              "minute": "h:mm a",
              "hour": "hA",
              "day": "MMM D",
              "week": "ll",
              "month": "MMM YYYY",
              "quarter": "[Q]Q - YYYY",
              "year": "YYYY"
            }
          },
          "distribution": "linear",
          "gridLines": {
            "display": true,
            "color": "rgba(0, 0, 0, 0.1)",
            "borderDash": [
              0,
              0
            ],
            "lineWidth": 1,
            "drawBorder": true,
            "drawOnChartArea": true,
            "drawTicks": true,
            "tickMarkLength": 10,
            "zeroLineWidth": 1,
            "zeroLineColor": "rgba(0, 0, 0, 0.25)",
            "zeroLineBorderDash": [
              0,
              0
            ]
          },
          "angleLines": {
            "display": true,
            "color": "rgba(0, 0, 0, 0.1)",
            "borderDash": [
              0,
              0
            ],
            "lineWidth": 1
          },
          "pointLabels": {
            "display": true,
            "fontColor": "#666",
            "fontSize": 10,
            "fontStyle": "normal"
          },
          "ticks": {
            "display": true,
            "fontSize": 12,
            "fontFamily": "sans-serif",
            "fontColor": "#666666",
            "fontStyle": "normal",
            "padding": 0,
            "stepSize": null,
            "minRotation": 0,
            "maxRotation": 50,
            "mirror": false,
            "reverse": false
          },
          "scaleLabel": {
            "display": false,
            "labelString": "Axis label",
            "lineHeight": 1.2,
            "fontColor": "#666666",
            "fontFamily": "sans-serif",
            "fontSize": 12,
            "fontStyle": "normal",
            "padding": 4
          }
        }
      ],
      "yAxes": []
    },
    "plugins": {
      "datalabels": {
        "display": false,
        "align": "center",
        "anchor": "center",
        "backgroundColor": "#eee",
        "borderColor": "#ddd",
        "borderRadius": 6,
        "borderWidth": 1,
        "padding": 4,
        "color": "#666666",
        "font": {
          "family": "sans-serif",
          "size": 10,
          "style": "normal"
        }
      },
      "googleSheets": {},
      "airtable": {},
      "tickFormat": ""
    },
    "cutoutPercentage": 0,
    "rotation": -1.5707963267948966,
    "circumference": 6.283185307179586,
    "startAngle": -1.5707963267948966
  }
});

// Print the chart URL
console.log(chart.getUrl());

// Get the image...
const image = await chart.toBinary();

// Or write it to a file
chart.toFile('chart.png');