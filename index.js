
const svg = d3.select('svg')
    .attr('height', '100vh')
    .attr('width', '100%');

const circle = svg.append('circle')
    .attr('fill', 'yellow')
    .attr('r', 200)
    .attr('cx', 1400/2)
    .attr('cy', 650/2)
    .attr('stroke', 'black');

const eyeSpacing = 100;
const eyeYObffset = -70;

const leftEye = svg.append('circle')
    .attr('r', 30)
    .attr('cx', 1400/2 - eyeSpacing)
    .attr('cy', 650/2 + eyeYObffset)

const rightEye = svg.append('circle')
    .attr('r', 30)
    .attr('cx', 1400/2 + eyeSpacing)
    .attr('cy', 650/2 + eyeYObffset)

const leftPupile = svg.append('circle')
    .attr('r', 10)
    .attr('cx', 1400/2 - eyeSpacing)
    .attr('cy', 650/2 + eyeYObffset - 3)
    .attr('fill', 'white');

const rightPipile = svg.append('circle')
    .attr('r', 10)
    .attr('cx', 1400/2 + eyeSpacing)
    .attr('cy', 650/2 + eyeYObffset - 3)
    .attr('fill', 'white');

const leftEyeBrow = svg.append('rect')
    .attr('x', 1400/2 - eyeSpacing - 30)
    .attr('y', 200)
    .attr('width', 60)
    .attr('height', 15)
    .transition().duration(2000)
        .attr('transform', 'translate(0, -20)')
    .transition().duration(2000)
        .attr('transform', 'translate(0, 0)');
  

const rightEyeBrow = svg.append('rect')
    .attr('x', 1400/2 + eyeSpacing - 30)
    .attr('y', 200)
    .attr('width', 60)
    .attr('height', 15)
    .transition().duration(2000)
        .attr('transform', 'translate(0, -20)')
    .transition().duration(2000)
        .attr('transform', 'translate(0, 0)');
       
const g = svg.append('g')
    .attr('transform', 'translate(700, 350)');

    const mouth = g
    .append('path')
      .attr('d', d3.arc()({
        innerRadius: 00,
        outerRadius: 120,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
      }));
    
    