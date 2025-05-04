
const initTechBackground = () => {
  // Find the tech background container or create it if it doesn't exist
  let techBackground = document.getElementById('tech-background-container');
  
  if (!techBackground) {
    // If the container doesn't exist, create it and add to body
    techBackground = document.createElement('div');
    techBackground.id = 'tech-background-container';
    document.body.prepend(techBackground);
  }
  
  // Add the tech-background class
  techBackground.className = 'tech-background';

  // Add grid pattern
  const techGrid = document.createElement('div');
  techGrid.className = 'tech-grid';
  techBackground.appendChild(techGrid);
  
  // Add subtle mouse parallax effect
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 10;
    techGrid.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // Add floating code snippets
  const codeSnippets = [
    '💻 Coding like a ninja',
    '🚀 Launching into production',
    '🎮 Game on!',
    '🧠 Brainstorming session',
    '🐞 Found a sneaky bug!',
    '🏗️ Building cool stuff',
    '🎲 Rolling the dice...',
    '🕹️ Debug mode: activated',
    '🎉 Deployed without breaking things!',
    '👾 Console.log("Hello, world!")',
    '🧩 Solving puzzles with code',
    '💡 Just had a big idea!',
    '⚙️ Compiling magic...',
    '🐱‍💻 Hacker vibes only',
    '🏆 Mission accomplished!',
  ];
  

  // Create floating code elements
  for (let i = 0; i < 5; i++) {
    const floatingCode = document.createElement('div');
    floatingCode.className = `floating-code code-${i+1}`;
    floatingCode.textContent = codeSnippets[i % codeSnippets.length];
    techBackground.appendChild(floatingCode);
  }

  // Create particles
  for (let i = 0; i < 20; i++) {
    createParticle(techBackground);
  }

  // Create circuit elements
  for (let i = 0; i < 15; i++) {
    createCircuitElement(techBackground);
  }
  
  // Create binary rain effect
  createBinaryRain(techBackground);
};

// Function to create a particle with random properties
function createParticle(parent) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random position
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  
  // Random size
  const size = Math.random() * 4 + 2;
  
  // Random animation delay
  const delay = Math.random() * 5;
  
  particle.style.top = `${top}%`;
  particle.style.left = `${left}%`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.animationDelay = `${delay}s`;
  
  parent.appendChild(particle);
}

// Function to create circuit elements
function createCircuitElement(parent) {
  // Create circuit line
  const circuit = document.createElement('div');
  const isHorizontal = Math.random() > 0.5;
  circuit.className = `circuit ${isHorizontal ? 'circuit-h' : 'circuit-v'}`;
  
  // Random position
  const top = Math.random() * 90;
  const left = Math.random() * 90;
  
  circuit.style.top = `${top}%`;
  circuit.style.left = `${left}%`;
  
  // Random rotation for variety
  const rotation = Math.random() * 45 - 22.5;
  circuit.style.transform = `rotate(${rotation}deg)`;
  
  // Random animation delay
  const delay = Math.random() * 8;
  circuit.style.animationDelay = `${delay}s`;
  
  parent.appendChild(circuit);
  
  // Add circuit node at the end
  const node = document.createElement('div');
  node.className = 'circuit-node';
  
  if (isHorizontal) {
    node.style.top = `${top}%`;
    node.style.left = `${left + (Math.random() > 0.5 ? 0 : 100)}px`;
  } else {
    node.style.top = `${top + (Math.random() > 0.5 ? 0 : 100)}px`;
    node.style.left = `${left}%`;
  }
  
  node.style.animationDelay = `${delay}s`;
  parent.appendChild(node);
}

// Function to create binary rain effect (Matrix-like)
function createBinaryRain(parent) {
  const binaryContainer = document.createElement('div');
  binaryContainer.className = 'binary-rain';
  parent.appendChild(binaryContainer);
  
  // Create columns of binary digits
  for (let i = 0; i < 20; i++) {
    const column = document.createElement('div');
    column.className = 'binary-column';
    column.style.left = `${Math.random() * 100}%`;
    column.style.animationDuration = `${Math.random() * 10 + 10}s`;
    column.style.animationDelay = `${Math.random() * 5}s`;
    
    // Generate random binary string
    let binaryString = '';
    for (let j = 0; j < 20; j++) {
      binaryString += Math.random() > 0.5 ? '1' : '0';
      if (j < 19) binaryString += '<br>';
    }
    
    column.innerHTML = binaryString;
    binaryContainer.appendChild(column);
  }
}

// Export the function to be called directly
export default initTechBackground;

// Execute immediately when imported
initTechBackground();