/*
Crie uma classe cliente e apresente os atributos e métodos
 referentes a esta classe, em seguida crie um objeto cliente,
  defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/
class Client {
  public name : string
  public cpf : string
  public age : number

}
const client = new Client()

client.name = 'João'
client.cpf = '133-333-333.00'
client.age = 29

console.log(`cliente : ${client.name}`);
console.log(`CPF: ${client.cpf}`);
console.log(` idade: ${client.age}`);