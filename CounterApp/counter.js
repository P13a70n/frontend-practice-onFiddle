let count = 0;
// update of render the count in count para
function updateCount(){
  document.getElementById("count").innerHTML = count;
}
//increase the count
function addCount(){
  count++;
  updateCount();
}
//decrease the count
function subtractCount(){
  count--;
  updateCount();
}
//reset the count
function resetCount(){
  count = 0;
  updateCount();
}
//save the count
function saveCount(){
  localStorage.setItem("count",count);
}
//load the count
function loadCount(){
  let saved = localStorage.getItem("count");
  if(saved != null){
    count = Number(saved);
  }
  updateCount();
}




