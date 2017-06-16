var objArray = [{
	x: 1,
	y: 4
}, {
	x: 2,
	y: 10
}, {
	x: 1,
	y: 3
}, {
	x: 2,
	y: 4
}];

var width = d3.select('svg').node().clientWidth;
var height = d3.select('svg').node().clientHeight;

var padding = 20;

var xmax = d3.max(objArray, function (d) {
	return d.x;
});

var ymax = d3.max(objArray, function (d) {
	return d.y;
});

var xScale = d3.scaleLinear().domain([0, xmax]).range([padding, width - padding]);
var yScale = d3.scaleLinear().domain([0, ymax]).range([height - padding, padding]);

var color = d3.scaleOrdinal(d3.schemeCategory20);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

d3.select('svg')
	.append('g')
	.attr("transform", "translate(0," + (height - padding) + ")")
	.call(xAxis);

d3.select('svg')
	.append('g')
	.attr("transform", "translate(" + padding + "," + 0 + ")")
	.call(yAxis);

var groups = d3.select('svg')
	.selectAll('g.datapoint')
	.data(objArray)
	.enter()
	.append('g')
	.attr('class', 'datapoint')
	.attr('transform', 'translate(' + xScale(0) + ',' + yScale(0) + ')');

groups.transition().duration(2000)
	.attr('transform', function (d) {
		return 'translate(' + xScale(d.x) + ',' + yScale(d.y) + ')';
	});

groups.append('circle')
	.attr('r', 10)
	.on('mouseenter', function (d, i) {
		d3.select(this.parentElement)
			.selectAll('text')
			.transition().duration(500)
			.style('opacity', 1);
	})
	.on('mouseout', function (d, i) {
		d3.select(this.parentElement)
			.selectAll('text')
			.transition().duration(500)
			.style('opacity', 0);
	})
	.transition().duration(2000)
	.style('fill', function (d, i) {
		return color(i);
	});

groups.append('text')
	.text(function (d, i) {
		return '(' + d.x + ', ' + d.y + ')';
	})
	.attr('transform', 'translate(-10, -5)')
	.style('text-anchor', 'end')
	.style('opacity', 0);
