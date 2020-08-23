
const get = (number) => {

    var result = document.getElementById("result");

    result.value = result.value + number.value

};


const calc = () =>{

    var result = document.getElementById("result");

    //new Functionで任意の文字列を関数として扱う
    //ここでは、result.valueの文字列を関数とし、それをreturnとして返す
    //Functionの[F]は大文字、関数を使用する場合は最後に()をつける必要がある
    result.value = new Function("return " + result.value)();

}

