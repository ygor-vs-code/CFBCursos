let colocacao = 6

switch (colocacao) {
    case 1: 
        console.log('Primeiro Lugar')
        break
    case 2: 
        console.log('Segundo Lugar')
        break
    case 3:
        console.log('Terceiro Lugar')
        break
    case 4: case 5: case 6:
        console.log('Premio de Participação')
    default:
        console.log('Não Subiu ao podio')
        break
}