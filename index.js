const task = document.getElementById('task')
const taskBtn = document.getElementById('taskbtn')
const Dom = document.querySelector('.Dom')


taskBtn.addEventListener('click', function(){
    let taskvalue = task.value
    let taskli = create(taskvalue)
    Dom.appendChild(taskli)
    task.value = ''
   
})


function create(value){
    let newDiv = document.createElement('div')
    newDiv.classList = 'item'

    let p = document.createElement('p')
    p.innerText = value

    // close newDiv item
    let span = document.createElement('span')
    span.classList = 'editicon'
    span.innerHTML = '<i class="fa fa-times-circle"></i>'
    span.addEventListener('click', function(){
        Dom.removeChild(newDiv)
    })

    let panel = taskControlar(newDiv)
    panel.style.visibility = 'hidden'
    newDiv.appendChild(panel)
    
    newDiv.onmouseenter = function(){
        panel.style.visibility = 'visible'
    }
    newDiv.onmouseleave = function(){
        panel.style.visibility = 'hidden'
    }

    newDiv.appendChild(span)
    newDiv.appendChild(p)

    return newDiv
}

//add a Taskcontolar
function taskControlar(parent){
    let controlClass = document.createElement('strong')
    controlClass.classList = 'controlPanel'
    
    //Color Edit function
    let coloredit = coloreditbtn(parent)
    controlClass.appendChild(coloredit)

    // Color Style box
    let colorbox = Color(parent)
    controlClass.appendChild(colorbox)
     
    return controlClass
}
   // Color Style box -------------Start

function Color(parent){
    const colors = ['salmon', 'mediumspringgreen', 'tomato', 'gainsboro', 'darkgoldenrod', 'cadetblue']

    let colordiv = document.createElement('div')
    colordiv.classList = 'colorStyle'

    colors.forEach(singleColor => {
        let div = document.createElement('div')
        div.classList = 'colorpallte'
        div.style.background = singleColor

        div.addEventListener('click', function(){
           parent.style.background = singleColor
        })
 

        colordiv.appendChild(div)

    })
    
    return colordiv
}
   // Color Style box ---------------End

   //Color Edit function ---------------start

function coloreditbtn(parent){

    let editColor = document.createElement('span')
    editColor.classList = 'closeColoricon'
    editColor.innerHTML = '<i class="fa fa-edit"></div>'

    editColor.addEventListener('click', function(){
        let p = parent.querySelector('p')
        let textara = document.createElement('textarea')
        textara.classList = 'textarea'
        textara.style.width = parent.offsetWidth + 'px'
        textara.style.height = parent.offsetHeight + 'px'
        textara.innerText = p.innerText
        
        textara.onkeypress = function(e){

            e.stopPropagation()

            if(e.key === 'Enter'){
                if(this.value){
                    p.textContent = this.value
                    parent.removeChild(this)
                    
                }else{
                    alert('please put some text')
                }

            }
        }

        parent.appendChild(textara)
    })
    return editColor

}
 //Color Edit function ----------------stop