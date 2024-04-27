console.log("Rodando")

const btn_Header = document.querySelector('.header-cadastro')
const btn_Main = document.querySelector('.criar-btn')
const btn_Login = document.querySelector('.btn-login')
const modal_Login = document.querySelector('.modal-login')
const modal_Cadastro = document.querySelector('.modal-cadastro')
const close_Cadastro = document.querySelector('.close-modal-cadastro')
const close_Login = document.querySelector('.close-modal-login')
const btn_Cadastro = document.querySelector('.criar-conta-btn')
const btn_Logar = document.querySelector('.logar-conta-btn')

const toast = document.querySelector('.toast')
const toastContent = document.querySelector('.toast-content')

// localStorage.email = 'adm_email'
// localStorage.user = 'adm_user'
// localStorage.senha = 'adm_senha'
// localStorage.cell = 'adm_cell'

function Cadastrar() {
    const email_Cadastro = document.querySelector('#email-cadastro')
    const user_Cadastro = document.querySelector('#user-cadastro')
    const senha_Cadastro = document.querySelector('#senha-cadastro')
    const cell_Cadastro = document.querySelector('#cell-cadastro')

    const email = email_Cadastro.value
    const user = user_Cadastro.value
    const senha = senha_Cadastro.value
    const cell = cell_Cadastro.value

    if(email_Cadastro.value == '' || user_Cadastro.value == '' || senha_Cadastro.value == '') {
        toast.classList.add('anim')
        toastContent.textContent = 'Preencha os campos obrigatórios!'

        setTimeout(()=> {
            toast.classList.remove('anim')
        }, 5500)
    }

    if(email_Cadastro.value !== '' && user_Cadastro.value !== '' && senha_Cadastro.value !== '') {
        localStorage.email = email
        localStorage.user = user
        localStorage.senha = senha
        localStorage.cell = cell

        console.log('EMAIL: ' + localStorage.email)
        console.log('USER: ' + localStorage.user)
        console.log('SENHA: ' + localStorage.senha)
        console.log('CELL: ' + localStorage.cell)

        toast.classList.add('anim')
        toastContent.textContent = 'Conta criada com sucesso!'

        setTimeout(()=> {
            toast.classList.remove('anim')
        }, 5500)
    }
}

function Login() {
    const user_Login = document.querySelector('#user-login')
    const user_Senha = document.querySelector('#senha-login')
    

    if(user_Login.value == localStorage.user && user_Senha.value == localStorage.senha) {
        toast.classList.add('anim')
        toastContent.textContent = 'Login feito com sucesso!'

        setTimeout(()=> {
            toast.classList.remove('anim')
        }, 5500)
    }

    if(user_Login.value !== localStorage.user) {
        toast.classList.add('anim')
        toastContent.textContent = 'Usuário incorreto!'

        setTimeout(()=> {
            toast.classList.remove('anim')
        }, 5500)
    }

    if(user_Senha.value !== localStorage.senha) {
        toast.classList.add('anim')
        toastContent.textContent = 'Senha incorreta!'

        setTimeout(()=> {
            toast.classList.remove('anim')
        }, 5500)
    }
}

btn_Header.addEventListener('click', ()=> {
    modal_Cadastro.classList.remove('hidden')
})

btn_Main.addEventListener('click', ()=> {
    modal_Cadastro.classList.remove('hidden')
})

btn_Login.addEventListener('click', ()=> {
    modal_Login.classList.remove('hidden')
})

close_Cadastro.addEventListener('click', ()=> {
    modal_Cadastro.classList.add('hidden')
})

close_Login.addEventListener('click', ()=> {
    modal_Login.classList.add('hidden')
})


btn_Cadastro.addEventListener('click', ()=> {
    Cadastrar()
})

btn_Logar.addEventListener('click', ()=> {
    Login()
})





