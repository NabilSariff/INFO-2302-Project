// selection 
const tooltips = document.querySelectorAll('.tooltip');
const imgDiv = document.querySelectorAll('.img');
console.log(tooltips);
let timeoutId;

tooltips.forEach(tooltip => {
    const pin = tooltip.querySelector('.pin');
    const content = tooltip.querySelector('.tooltip-content');
    pin.addEventListener('mousemove', () => {
        tooltip.classList.add('active');
    });
    pin.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 800)
    });
    content.addEventListener('mousemove', () => {
        clearTimeout(timeoutId);
        tooltip.classList.add('active');
    });
    content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active');
        }, 800)
    });
});