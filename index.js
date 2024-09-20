//r
let input=document.getElementById('input');
let btn=document.getElementById('btn');
let showPass=document.getElementById('showPass')
function MakingRandom(input_value,AllChaset){
    let i;
    let RandomPasswod=''
    for(i=0;i<=input_value;i++){
        let RandomIndex=Math.round(Math.random()*AllChaset.length)
        let RandomChar=AllChaset[RandomIndex]
        RandomPasswod+=RandomChar;
        console.log(RandomPasswod)
        showPass.innerText=RandomPasswod;
    }
}

function generating_password(){
    let input_value=document.getElementById('input').value
    let  AllChaset=`abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\\]^_{|}~\`€£¥₹±÷×∑√π©®™§°¶`;
    MakingRandom(input_value,AllChaset);
    
}