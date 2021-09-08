const timer = document.querySelector('.timer');

const future = new Date('Jan 1, 2030 00:00:00').getTime()

 const update = setInterval(() => {
  setTimer()
 }, 1000)

 const setTimer = () =>{
  const today = new Date().getTime();
  const diff = future - today;
  
  
  const days = Math.floor(diff / (1000*60*60*24))
  let r1 = (diff % (1000*60*60*24));5
  const hours = Math.floor(r1 / (1000*60*60))
  let r2 = (r1 % (1000*60*60));
  const minutes = Math.floor(r2 / (1000*60))
  let r3 = (r2 % (1000*60));
  const seconds = Math.floor(r3/1000);


  getTimer(days, hours, minutes, seconds)
 }

 const getTimer = (d, h, m, s) => {
   const output =
   `
    <div class = "days">
      <h4><span>${d} </span>days</h4>    
    </div>
    <div class = "hrs">
      <h4><span>${h} </span>hours</h4>    
    </div>
    <div class = "mins">
      <h4><span>${m} </span>minutes</h4>    
    </div>
    <div class = "secs">
      <h4><span>${s} </span>seconds</h4>    
    </div>
   `
   timer.innerHTML = output
 }


