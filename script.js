function childRender(parent, child) {
    document.querySelector(parent).appendChild(child)
};

function renderElement(tag, hmtlClass) {
    let elem = document.createElement(tag);
    for (let i in hmtlClass) {
        elem.classList.add(hmtlClass[i])
    }
    return elem
};

(function createApp() {
    
    let container = renderElement('div', ['container']);
    childRender('body', container);

    let block1 = renderElement('div', ['block1']);
    childRender('.container', block1);

    let block1H1 = renderElement('h1', ['block1_h1']);
    childRender('.block1', block1H1);
    block1H1.innerHTML = ('My To Do List Js')

    let block1Inner = renderElement('a', ['block1_Inner']);
    childRender('.block1', block1Inner);

    let block1Img = renderElement('img', ['block1_img']);
    childRender('.block1_Inner', block1Img);
    block1Img.id = 'button'
    block1Img.src = 'img/dick.png';

    let block2 = renderElement('div', ['block2']);
    childRender('.container', block2);

    let block2Input = renderElement('input', ['block2_Input']);
    childRender('.block2', block2Input);
    block2Input.id = 'input';


    let block3 = renderElement('div', ['block3']);
    childRender('.container', block3)

    let block3Ul = renderElement('ul', ['block3_Ul']);
    childRender('.block3', block3Ul)
    block3Ul.id = 'ulAdd'

        


    


})();


(function addList() {

    let input = document.getElementById('input');
    let i = 0
    input.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            i++;
            let addList = renderElement('li', [`.list_element${[i]}`, 'list']);
            addList.innerHTML = input.value;
            childRender('.block3_Ul', addList);
            renderColor()
            obosannayaMusorka(addList)

        }
    })

})();

function obosannayaMusorka(list) {
    let musorka = renderElement('i', ['fas', 'fa-tractor', 'deleteBtn']);
    list.prepend(musorka);
    musorka.addEventListener('click', (e) => {
        e.currentTarget.parentElement.style.marginLeft = '300%';
        e.currentTarget.parentElement.addEventListener('transitionend', (e) => {
            e.currentTarget.remove()
            renderColor();
        })
    })
    input.value = ''
}


function renderColor() {
    textDecorate()
    let allLi = document.querySelectorAll('.list');


};

(function clearButton() {
    document.getElementById('button').onclick = () => {
        Array.from(document.querySelectorAll('.list')).forEach((element) => {
            element.style.marginTop = '270%';
            element.addEventListener('transitionend', () => {
                element.remove()
            })
        })
    }
})();

function textDecorate() {
    console.log('1')
    let some = document.querySelectorAll('.list')
    Array.from(some).forEach((elemen) => {
        console.log('element')

        elemen.addEventListener('click', (elemen) => {

            if (elemen.currentTarget.classList.contains('list_line') === false) {
                elemen.currentTarget.classList.add('list_line')

            } else {
                elemen.currentTarget.classList.remove('list_line');
            }

        })
    })

}