const messages = [
    "vdz!",
    "sao m beo v!",
    "y cái thg beo v",
    "🦃!",
    "🔔!",
    "beo v!",
    "beo liền!",
    "sợ liền!",
    "beo lạc sợ liền !",
    "vvv!"
];

document.addEventListener("click", function(event) {

    const text = document.createElement("div");

    // Chọn chữ ngẫu nhiên
    text.textContent =
        messages[Math.floor(Math.random() * messages.length)];

    // Vị trí click
    text.style.left = event.clientX + "px";
    text.style.top = event.clientY + "px";

    // Thêm class
    text.className = "click-text";

    // Góc lắc ngẫu nhiên
    text.style.setProperty(
        "--rotate",
        (Math.random() * 16 - 8) + "deg"
    );

    // Độ lệch sang trái/phải khi bay
    text.style.setProperty(
        "--moveX",
        (Math.random() * 100 - 50) + "px"
    );

    document.body.appendChild(text);

    // Xóa sau animation
    setTimeout(() => {
        text.remove();
    }, 1800);
});