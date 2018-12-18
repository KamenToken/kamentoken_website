am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv1", am4charts.PieChart);

// Add data
chart.data = [ {
  "country": "Marketing & parTnerships",
  "litres": 45
}, {
  "country": "Development",
  "litres": 30
}, {
  "country": "Management",
  "litres": 15
}, {
  "country": "Legislation",
  "litres": 8
},, {
  "country": "Other",
  "litres": 2
}  ];

// Set inner radius
chart.innerRadius = am4core.percent(50);

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;