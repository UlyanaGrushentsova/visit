const palindrom=str=> {
    str=str.tolowercase()
    return str === str.split('').reverse('').join('')


}
const str="Довод"
const isPalindrom=palindrom(str)
console.log(isPalindrom)

