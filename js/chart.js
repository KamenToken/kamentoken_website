am4core.useTheme(am4themes_animated);
  // Themes end
  // Create chart instance
  var chart = am4core.create("chartdiv", am4charts.PieChart);
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  // Let's cut a hole in our Pie chart the size of 30% the radius
  chart.innerRadius = am4core.percent(30);
  // Put a thick white border around each Slice
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.slices.template
  // change the cursor on hover to make it apparent the object can be interacted with
  .cursorOverStyle = [
  {
  "property": "cursor",
  "value": "pointer"
  }
  ];
  // Create a base filter effect (as if it's not there) for the hover to return to
  var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
  shadow.opacity = 0;
  // Create hover state
  var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
  // Slightly shift the shadow and make it more prominent on hover
  var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
  hoverShadow.opacity = 0.7;
  hoverShadow.blur = 5;
  // Add a legend
  chart.legend = new am4charts.Legend();
  chart.data = [{
  "country": "Sales",
  "litres": 70
  }, {
  "country": "Team",
  "litres": 10
  }, {
  "country": "Airdrop",
  "litres": 2
  }, {
  "country": "Bonus + Marketting",
  "litres": 18
  }];