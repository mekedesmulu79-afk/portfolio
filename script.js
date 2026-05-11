const canvas = document.getElementById("matrix");
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffcc";
    ctx.font = fontSize + "px monospace";

    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}
setInterval(draw, 33);

const text = "Initializing system... Access Granted.";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}
typing();

const output = document.getElementById("output");
const commandInput = document.getElementById("command");

commandInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const cmd = commandInput.value;
        let response = "";

        if (cmd === "help") {
            response = "Commands: about, skills, projects, github, contact";
        } else if (cmd === "about") {
            response = "Cybersecurity student passionate about ethical hacking.";
        } else if (cmd === "skills") {
            response = "Ethical Hacking | SQL Injection | Networking | Linux";
        } else if (cmd === "projects") {
            response = "Database Security Lab | Security Dashboard | Network Attack Analysis";
        } else if (cmd === "github") {
            response = "github.com/mekedesmulu79-afk";
        } else if (cmd === "contact") {
            response = "mekedesmulu79@gmail.com";
        } else {
            response = "Command not found";
        }

        output.innerHTML += `<p>> ${cmd}</p><p>${response}</p>`;
        commandInput.value = "";
        output.scrollTop = output.scrollHeight;
    }
});