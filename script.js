
const firstinput= document.querySelector(".input-first");
const lastinput= document.querySelector(".input-last");
const select= document.querySelector("select");
const num= document.querySelector(".input-num");
const button= document.querySelector("button");
const scoreboard=document.querySelector(".scoreboard")

button.addEventListener('click',(e)=>{
  e.preventDefault();
    const fullName=firstinput.value+" "+lastinput.value
    const name =document.createElement('span')
    name.append(fullName)
    const country=document.createElement('span')
    country.append(select.value)
    const score=document.createElement('span')
    score.append(num.value)
    const deleted=document.createElement('button')
    deleted.textContent='delete'
    const plusfive=document.createElement('button')
    plusfive.innerText='+5'
     const minusfive=document.createElement('button')
    minusfive.innerText='-5'
    const scorecard=document.createElement('p')
    scorecard.classList.add('displayscore')
    scorecard.append(name,country,score,deleted,plusfive,minusfive)
deleted.addEventListener('click', () => {
        scorecard.remove();
    });

       plusfive.addEventListener('click', () => {
        score.textContent = Number(score.textContent) + 5;
    });
      minusfive.addEventListener('click', () => {
        let reversescor = Number(score.textContent);
    if (reversescor > 0) {
      score.textContent = Number(score.textContent) -5;
    }
    else{
      score.textContent = 0;

    }
    });

    scoreboard.append(scorecard)
    
})