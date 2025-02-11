document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 30; i++) { // Create multiple sparkles for a better effect
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    // Randomize position slightly around the cursor
    let xOffset = (Math.random() - 0.5) * 10;
    let yOffset = (Math.random() - 0.5) * 10;
    
    sparkle.style.left = `${x + xOffset}px`;
    sparkle.style.top = `${y + yOffset}px`;

    document.body.appendChild(sparkle);

    // Remove the sparkle after animation ends
    setTimeout(() => sparkle.remove(), 600);
}



const numShapes = 10; // Number of shapes to follow cursor
const shapes = [];
const container = document.getElementById("shapes-container");



// Create shapes
for (let i = 0; i < numShapes; i++) {
    const shape = document.createElement("div");
    
    // Randomly assign a shape type
    let shapeType = ["circle", "square", "triangle"][Math.floor(Math.random() * 3)];
    
    shape.classList.add("shape", shapeType);
    
    // Randomize initial position
    shape.style.left = `${Math.random() * window.innerWidth}px`;
    shape.style.top = `${Math.random() * window.innerHeight}px`;

    container.appendChild(shape);
    shapes.push({ el: shape, x: 0, y: 0 });
}

// Cursor tracking with smooth easing
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate shapes towards the cursor with delay
function animate() {
    shapes.forEach((shape, index) => {
        let delayFactor = (index + 1) * 0.05; // Each shape moves slower

        // Smooth transition
        shape.x += (mouseX - shape.x) * delayFactor;
        shape.y += (mouseY - shape.y) * delayFactor;
        
        shape.el.style.transform = `translate(${shape.x}px, ${shape.y}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
