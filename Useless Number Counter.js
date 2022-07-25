let all = [];


function input(){
    let text = document.getElementById('input').value
    let numbers = [];    
    for (let i = 0; i < text.length; i++){
        if (isNaN(text.charAt(i)) || text.charAt(i) == " " ){
        } else {
          numbers.push(text.charAt(i))
        }
    }
    all.push(numbers);
    document.getElementById('output').appendChild(document.createTextNode(numbers))
    document.getElementById('output').appendChild(document.createElement("br"))
    
    
    document.getElementById('input').value = "";
  console.log(all)
};


function sym() {
    let calc = all;
      while (calc.length >= 2){
        let a = calc[0]
        let b = calc[1]
        let answ = []  
          for (let j = 0; j < a.length; j++){
            if (b.indexOf(a[j]) == -1 && answ.indexOf(a[j]) == -1){
              answ.push(a[j])
            };
          }
          for (let k = 0; k < b.length; k++){
            if (a.indexOf(b[k]) == -1 && answ.indexOf(b[k]) == -1){
              answ.push(b[k])
            };
          }
        calc.splice(0, 2)
        calc.unshift(answ);
        for (let i = 0; i < calc.length; i++){
          document.getElementById('calculation').appendChild(document.createTextNode(calc[i]))
          if(i != calc.length - 1){
          document.getElementById('calculation').appendChild(document.createTextNode(" △ "))
          };
        };
        document.getElementById('calculation').appendChild(document.createElement("br"))
      
      };
    alert(calc)
    };
    