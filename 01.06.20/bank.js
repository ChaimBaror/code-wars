

let students = [
    { name : 'ariel', age:35, class:'angular'},
    { name : 'yakov', age:33, class:'angular 2'},
    { name : 'asher', age:44, class:'angular 2'},
    { name : 'shuli', age:55, class:'angular 3'},
    { name : 'avi', age:6, class:'angular 4'},
];
console.log(students)
function render(temp,data){
    let h=''
    let r = /\[(.*)\]/g;
    let propertiesInTemplate = temp.match(r)


    for (let i = 0; i < propertiesInTemplate.length; i++) {
        let p = propertiesInTemplate[i];
        p = p.replace('[', '').replace(']', '')
        propertiesInTemplate[i] = p

        console.log(temp)
        data.forEach(studentItem => {
            let itemHtml = temp
            propertiesInTemplate.forEach(p =>{
                let propValue = studentItem[p]
                itemHtml = itemHtml.replace(`[${p}]`, propValue)
            })
            h += itemHtml
        });
        return h   
    } 
}

let myTemplate = document.getElementById('template_student').innerHTML
    
let myList = document.getElementById('myList')
myList.innerHTML = render(myTemplate, students)