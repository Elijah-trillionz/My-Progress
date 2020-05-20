// This is my first js to do list
// I intend to use HTML DOM on this web app, 
// and gladly it is my first time to use DOM.
// Created by Elijah Trillionz (Twitter @elijahtrillionz)

// this app does not store data, as it is yet to be complete

const input = document.getElementById('input');
const para = document.getElementById('defPara');
const content = document.querySelector('.content');
const button = document.getElementById('button');
const modal = document.querySelector('.modal');
  modal.style.display = 'none';
const inputButton = document.querySelector('.inputClick');
const defaultPara = document.querySelector('.default');

//make the modal appear on button click
function inputClick() {
	modal.style.display = 'flex';
	inputButton.style.display = 'none';
  input.setAttribute('autofocus', 'true');
}


//empty input
function disabledFunction() {
  if (input.value !== '') {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'true');
  }
}
function createNewElement() {
  defaultPara.style.display = 'none';
    // creating a .span div element
  const span = document.createElement('div');
  span.setAttribute('class', 'span');
  const todoInput = document.createTextNode(input.value);
  span.appendChild(todoInput);
  //   // // creating a paragraph
  const newPara = document.createElement('p'); 
  newPara.appendChild(span);
  content.appendChild(newPara);
  input.value = '';
  disabledFunction();
    
  // // creating the star button
  const star = document.createElement('i');
  star.setAttribute('class', 'far fa-star');
  newPara.appendChild(star);
    
  // //toggle the star button
  star.addEventListener('click', function() {
    if (!star.setAttribute('class', 'far fa-star')) {
    	 star.setAttribute('class', 'fa fa-star');
    } else if (!star.setAttribute('class', 'fa fa-star')) {
    		star.setAttribute('class', 'far fa-star');
    	}
    })

  //   //create radio button
  const radBtn = document.createElement('i');
  newPara.insertBefore(radBtn, span);
  radBtn.setAttribute('class', 'far fa-circle');

  //   //toggle the radio button
  //   //make line-through on radio click
  radBtn.addEventListener('click', function() {
    if (span.style.textDecorationLine !== 'line-through') { 
      span.style.textDecorationLine = 'line-through';
      span.style.textDecorationColor = 'grey';
      span.style.color = 'grey';
      radBtn.setAttribute('class', 'fa fa-check-circle');
    } else {
      span.style.textDecoration = 'none';
      span.style.color = 'white';
      radBtn.setAttribute('class', 'far fa-circle'); 
    }
  })
 
  //   // cncl button ondouble click
  newPara.addEventListener('dblclick', function() {return newPara.remove(), radBtn.remove()});
}
// things to be added in the coming days
/**
 * Storage,
 * Design for PC,
 * toggling important tasks and saving them,
 * Light theme,
 * tasks' alphabetical order
 */