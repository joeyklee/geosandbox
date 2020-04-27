let svg;

async function init() {
  const width = 400,
        height = 400;
    
  svg = d3.select( "body" )
          .append( "svg" )
          .attr( "width", width )
          .attr( "height", height );
  
}
