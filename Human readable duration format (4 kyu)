function formatDuration (seconds) {
  const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
  const container = [];

  if (seconds === 0) {
    return 'now';
    }
  
  for (let key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      container.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return container.length > 1 ? container.join(', ').replace(/,([^,]*)$/,' and'+'$1') : container[0]
}
