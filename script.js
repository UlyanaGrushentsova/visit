const palindrom=str=> {
str=str.toLowerCase()
return str === str.split('').reverse('').join('')
}
const str="Довод"
const isPalindrom=palindrom(str)
if (isPalindrom === true) { 
  console.log(`Слово ${str} является полиндромом`)
}
else {
  console.log(`Слово ${str} не является полиндромом`)
}
