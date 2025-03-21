const objs = document.getElementsByTagName('div')

for (o of objs) {
    console.log(o.innerHTML = 'Curso')
}

for (o in objs) {
    console.log(objs[o].innerHTML)
}