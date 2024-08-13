let currentExp = 0;
let requiredExp = 100;
let currentLevel = 1;

function gainExperience(points) {
    currentExp += points;
    if (currentExp >= requiredExp) {
        levelUp();
    }
    updateExpBar();
}

function levelUp() {
    currentExp -= requiredExp;
    currentLevel++;
    requiredExp = Math.floor(requiredExp * 1.1); // Increase required EXP for next level
    document.getElementById('current-level').textContent = `Level: ${currentLevel}`;
}

function updateExpBar() {
    const expBarFill = document.getElementById('exp-bar-fill');
    const expPercentage = (currentExp / requiredExp) * 100;
    expBarFill.style.width = `${expPercentage}%`;
    document.getElementById('current-exp').textContent = `EXP: ${currentExp}/${requiredExp}`;
}

// Example of gaining experience
gainExperience(30);