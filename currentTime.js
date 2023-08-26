function getCurrentDayAndTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
  
    const dayOfWeek = daysOfWeek[now.getDay()];
    let hours = now.getHours();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    return `Today is : ${dayOfWeek}.\nCurrent time is : ${hours} ${amOrPm} : ${minutes} : ${seconds}`;
  }
  
  console.log(getCurrentDayAndTime());
  