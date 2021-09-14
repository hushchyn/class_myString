class MyString{
    reverse(str){
        return str.split("").reverse().join("")
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1)
    }
    ucWords(param1){
        let str = param1.split(" ",)
        let result = ""
        for (let elements of str){
           result += " " + elements.charAt(0).toUpperCase() + elements.substr(1)
        }
        return result
    }
}

let x = new MyString()
console.log(x.reverse('Ivan'));
console.log(x.ucFirst('arsenal'));
console.log(x.ucWords('arsenal arsenal arsenal arsenal'));
