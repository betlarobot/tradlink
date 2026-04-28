<style>
  .neon-button {
    background-color: #000;
    color: #39FF14; /* Cyber Green */
    border: 2px solid #39FF14;
    padding: 10px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px #39FF14;
    cursor: pointer;
  }

  .neon-button:hover {
    background-color: #39FF14;
    color: #000;
    box-shadow: 0 0 20px #39FF14, 0 0 40px #39FF14;
  }

  .glass-panel {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 255, 255, 0.2); /* Neon Blue border */
    border-radius: 15px;
    padding: 20px;
    color: #fff;
  }
</style>

<div class="glass-panel">
  <h3>Lucy AI Dashboard</h3>
  <p>Real-time analytics and intelligent trading insights.</p>
  <button class="neon-button">Execute Trade</button>
</div>
