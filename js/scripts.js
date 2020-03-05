const arrY = [50,100,150,200,250,300,350,400,450,500];
const arrX = [100,200,300,400,500,600];
const body = document.querySelector('body');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

body.appendChild(svg)
svg.setAttribute('viewbox', '0 0 610 510');
svg.setAttribute('width', 510);
svg.setAttribute('height', 610);

function createShape (x, y, r, color, shapeKind) {
    let shape =  document.createElementNS('http://www.w3.org/2000/svg', shapeKind);
    
    if (shapeKind === 'circle') {        
        shape.setAttribute('cx', x);
        shape.setAttribute('cy', y);
        shape.setAttribute('r', r);
        shape.setAttribute('fill', color);
    } else if (shapeKind === 'rect') {
        shape.setAttribute('x', x - r);
        shape.setAttribute('y', y - r );
        shape.setAttribute('width', r * 2);
        shape.setAttribute('height', r * 2);
        shape.setAttribute('fill', color);
    }

    return shape
}

for (let i = 0; i < arrX.length; i++) {        
    for (let j = 0; j < arrY.length; j++) {
            const kleur = `rgb(${255 - (j * 255/arrY.length)},0,0)`    
            if (i === 0) {
                svg.appendChild(createShape (arrX[i], arrY[j], 10, kleur, 'rect'))
            } else {
                svg.appendChild(createShape (arrX[i], arrY[j], 10, kleur, 'circle'))
            }
    }
}
    
