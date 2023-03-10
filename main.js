const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS ={left:50, right:50, top:50, bottom:50}

// constants
const data1 = [55000, 48000, 27000, 66000, 90000]; 

// Add frame


const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 



const FRAME1 = d3.select("#vis1")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

const X_SCALE = d3.scaleLinear() 
                  .domain([0, (MAX_X + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

const MAX_X = d3.max(data1, (d) => { return d; }); 
console.log("Max x: " +MAX_X);  

FRAME1.selectAll("points")  
    .data(data1)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); })
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 
              






