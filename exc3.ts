class ProdutoEletronico {
 
    public year : number
    public cellphoneType  : string
    public brand  : string
}

const telephone : ProdutoEletronico = new ProdutoEletronico();
telephone.year = 2023
telephone.cellphoneType = 'iphone12'
telephone.brand = 'iphone'

console.log('\nManufacturing year: ' + telephone.year)
console.log(`The cellphoneType is  ${telephone.cellphoneType}`)
console.log(`the cellphone brand is ${telephone.brand}\n\n`)