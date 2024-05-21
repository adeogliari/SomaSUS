function popups() {
    const btn_openPopup = document.querySelectorAll('.btn_openPopup');
    const btn_closePopup = document.querySelector('.btn_closePopup');
    const overlayPopup = document.querySelector('.popup');

    btn_openPopup.forEach(item => {
        item.addEventListener('click', () => {
            openPopup(item.getAttribute('data-value'));
        });
    })

    btn_closePopup.addEventListener('click', (item) => {
        closePopup(item);
    })

    overlayPopup.addEventListener('click', (item) => {
        closePopup(item);
    })

    function openPopup(video_src) {
        document.querySelector('.popup-video-container iframe').setAttribute('src', video_src);

        document.querySelector('.popup').classList.add('active');
    }

    function closePopup(item) {
        const target = item.target;

        if ((target === overlayPopup) || (target === btn_closePopup)) {
            document.querySelector('.popup-video-container iframe').setAttribute('src', 'about:blank');

            document.querySelector('.popup').classList.remove('active');
        }
    }
}

function toggleAcordeons() {
    const acordeons = document.querySelectorAll('.acordeon h3');

    acordeons.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.classList.toggle('active');
        })
    })
}

function toggleMenu() {
    const menu = document.querySelector('.btn_menu');

    menu.addEventListener('click', () => {
        menu.previousElementSibling.classList.toggle('active');
    })
}

function navigateMenu() {
    const menu_itens = document.querySelectorAll('.action-menu');

    menu_itens.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.classList.toggle('active');
        })
    })
}

function activeMenu() {
    const menuItens = document.querySelectorAll('.menu-item')

    menuItens.forEach(item => {
        item.addEventListener('click', () => {
            menuItens.forEach(item => {
                item.classList.remove('active')
            })

            item.classList.add('active')
            item.parentElement.parentElement.classList.remove('active')

        })
    })
}

function openDescricaoFuncionalidade() {
    const seletorFuncionalidade = document.querySelectorAll('.seletor-infraestrutura')
    const desc_funcionalidades = document.querySelectorAll('.descricao-infraestrutura')
    const btn_prevFunc = document.querySelector('#prev-func')
    const btn_nextFunc = document.querySelector('#next-func')

    function ativarFuncionalidade(index) {
        seletorFuncionalidade.forEach(item => {
            item.classList.remove('active')
        })

        desc_funcionalidades.forEach(item => {
            item.classList.remove('active')
        })

        desc_funcionalidades[index].parentElement.parentElement.classList.add('active')
        seletorFuncionalidade[index].classList.add('active')
        desc_funcionalidades[index].classList.add('active')
        btn_prevFunc.setAttribute('data-value', index)
        btn_nextFunc.setAttribute('data-value', index)

        if (desc_funcionalidades[index - 1] !== undefined) {
            btn_prevFunc.classList.add('active')
        } else {
            btn_prevFunc.classList.remove('active')
        }

        if (desc_funcionalidades[index + 1] !== undefined) {
            btn_nextFunc.classList.add('active')
        } else {
            btn_nextFunc.classList.remove('active')
        }

        document.body.classList.add('no-scroll')
    }

    seletorFuncionalidade.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (desc_funcionalidades[index] !== undefined) {
                ativarFuncionalidade(index)
            }
        })
    })

    btn_prevFunc.addEventListener('click', () => {
        let btn_prevFuncID = parseInt(btn_prevFunc.getAttribute('data-value')) - 1

        if (
            (
                desc_funcionalidades[btn_prevFuncID] !== undefined
            )
        ) {
            ativarFuncionalidade(btn_prevFuncID)
        }
    })

    btn_nextFunc.addEventListener('click', () => {
        let btn_nextFuncID = parseInt(btn_nextFunc.getAttribute('data-value')) + 1

        if (
            (
                desc_funcionalidades[btn_nextFuncID] !== undefined
            )
        ) {
            ativarFuncionalidade(btn_nextFuncID)
        }
    })
}

function closeDescricaoFuncionalidade() {
    const btn_close = document.querySelector('#close_desc_infraestrutura')

    btn_close.addEventListener('click', () => {
        document.querySelector('.descricao-infraestruturas').classList.remove('active')
        document.body.classList.remove('no-scroll')
    })
}

popups()
toggleAcordeons()
toggleMenu()
navigateMenu()
activeMenu()
openDescricaoFuncionalidade()
closeDescricaoFuncionalidade()
