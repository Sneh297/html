const ans = [];
const tree = {
  question: 'Start The Quiz',
  yes: {
    question: 'Are You Student',
    yes: {
      question: 'What Do You  Study ?',
      yes: {
        question: 'Which Field ?',
        yes: {
          question: 'Which Domain ?',
          yes: {},
          no: {},
          option: 'Data Science',
          option1: 'Development',
        },
        no: {},
        option: 'Software',
        option1: 'hardware',
      },
      no: {},
      option: 'Computer',
      option1: 'Commerce',
    },
    no: {
      question: 'What Do You Do In Your Life ?',
      yes: {
        question: 'In which Field ?',
        yes: {
          question: 'Which Tecknologies ?',
          yes: {},
          no: {},
          option: 'Fluteer',
          option1: 'react Native  ',
        },
        no: {},
        option: 'App Developemnt',
        option1: 'Web Development',
      },
      no: {},
      option: 'TechNical',
      option1: 'Non - Technical',
    },
    option: 'Yes',
    option1: 'No',
  },
  no: {},
  option: 'Yes',
  option1: 'No',
};

var h1 = document.getElementById('question');
let currentNode = tree;
var high = 1;
function reset() {
  currentNode = tree;
  const d = document.getElementById('ques');
  while (d.firstChild) {
    d.removeChild(d.firstChild);
  }
  const show = document.getElementById('ans');
  while (show.firstChild) show.removeChild(show.firstChild);
  while (ans.length != 0) ans.pop();
  high = 1;
  document.getElementById('ans').style.display = 'none';
}

function showAns() {
  // ans.pop();
  document.getElementById('ans').style.display = 'block';
  ans.forEach((element, index) => {
    const para = document.createElement('p');
    para.innerHTML = `Question ${index + 1} : ${
      element.question
    } <br> Selected :${element.optionSelected}`;
    document.getElementById('ans').appendChild(para);
  });
}

function answer(x) {
  high++;
  if (high === 4) {
    document.getElementById('main').style.height = '90vh';
    document.getElementById('ans').style.height = '90vh';
  }
  console.log(high);
  if (x == 1) {
    ans.push({
      question: currentNode.question,
      optionSelected: currentNode.option,
    });
    if (currentNode.yes.yes) {
      currentNode = currentNode.yes;
      create();
    } else {
      const para = document.createElement('p');
      para.innerText = 'Thanks For Coming';
      document.getElementById('ques').appendChild(para);
    }
  } else if (x == 0) {
    ans.push({
      question: currentNode.question,
      optionSelected: currentNode.option1,
    });
    if (currentNode.no.no) {
      currentNode = currentNode.no;
      create();
    } else {
      const para = document.createElement('p');
      para.innerText = 'Thanks For Coming';
      document.getElementById('ques').appendChild(para);
    }
  }
}
function create() {
  const para = document.createElement('p');
  const btnYes = document.createElement('button');
  const btnNo = document.createElement('button');
  btnYes.innerText = currentNode.option;
  btnNo.innerText = currentNode.option1;
  btnYes.onclick = () => {
    answer(1);
  };

  btnNo.onclick = () => {
    answer(0);
  };
  btnYes.className = 'btn';
  btnNo.className = 'btn';
  para.innerText = currentNode.question;
  document.getElementById('ques').appendChild(para);
  document.getElementById('ques').appendChild(btnYes);
  document.getElementById('ques').appendChild(btnNo);
}
