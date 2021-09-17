const buttons = document.querySelectorAll('div > button')
const rgbColor = document.querySelector('.rgb-span')
const hexColor = document.querySelector('.hex-span')
const para = document.querySelectorAll('.p')
const wrapper = document.querySelector('.inputs')
const colorInput = document.querySelector('input').value

const random = number => {
    return Math.floor(Math.random() * number) + 1;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', chooseAction)
})

const randomRgb = () => {
    para.forEach((p) => {
        p.classList.remove('hide')
    })
    wrapper.classList.add('hide')

    let r = random(255);
    let g = random(255);
    let b = random(255);
    let color = 'rgb(' + r +',' + g +','+ b +')';
    rgbColor.textContent = color;
    document.body.style.backgroundColor = color;

    hexEquivalent(r,g,b);
    return color;
}

function hexEquivalent(a, x, c) {
    let rh = a.toString(16);
    let gh = x.toString(16);
    let bh = c.toString(16);

    if (rh.length < 2) {
        rh = '0' + rh
    }
    if (gh.length < 2) {
        gh = '0' + gh
    } 
    if (bh.length < 2) {
        bh = '0' + bh
    }

    let hex = '#' + rh + gh + bh;
    hexColor.textContent = hex;
    return hex;
}

function rgbToHex() {
    para.forEach((p) => {
        p.classList.add('hide')
    })
    wrapper.classList.remove('hide')
    console.log(colorInput)
}

function chooseAction(e) {
    switch(e.target.value) {
        case 'random':
            randomRgb();
            break;
        case 'convert':
            rgbToHex();

    }
}