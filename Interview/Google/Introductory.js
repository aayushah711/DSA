/**
Input:
12 solar panel activated
13 low battery warning
14 tire one: low air pressure
15 solar panel activated
15 low battery warning
23 solar panel activated
37 solar panel activated

Output:
12 solar panel activated
13 low battery warning
14 tire one: low air pressure
23 solar panel activated
37 solar panel activated
*/

// eg. arr = [[12, "solar panel activated"],[22]

function shootMessage(arr) {
  const messagesArr = {};
  for (let i = 0; i < arr.length; i++) {
    const [timestamp, message] = arr[i];
    if (message in messagesArr) {
      const lastTimestamp = messagesArr[message];
      const diff = timestamp - lastTimestamp;
      if (diff <= 10) {
        continue;
      }
    }
    console.log(`${timestamp} ${message}`);
    messagesArr[message] = timestamp;
  }
}

/**
Input:
12 solar panel activated
13 low battery warning
14 tire one: low air pressure
15 solar panel activated
15 low battery warning
23 solar panel activated
37 solar panel activated
<no messages for another 30 seconds>

15-12 = 3 -> delete
23-15 = 8 -> delete
37 - 23 = 14 -> keep

Output:
14 tire one: low air pressure
37 solar panel activated
*/

/**
async function* foo() {
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
}

let str = '';

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

await generate();
8?

hm = {
mesage1: [23, 37, 50],
mesage2
}

*/

function shootMessage(arr) {
  const messagesArr = {};
  for (let i = 0; i < arr.length; i++) {
    const [timestamp, message] = arr[i];
    if (message in messagesArr) {
      messagesArr[message].push(timestamp);
    } else {
      messagesArr[message] = [timestamp];
    }
  }

  for (let key in messagesArr) {
    const msgs = messagesArr[key];
    logMessage(key, msgs);
  }

  function logMessage(message, msgs) {
    if (msgs.length === 1) {
      console.log(message);
      return;
    }
    let prevTimestamp = msgs[0];
    for (let i = 1; i < msgs.length; i++) {
      let currTimestamp = msgs[i];
      if (currTimestamp - prevTimestamp > 10) {
        console.log(message);
      } else {
        prevTimestamp = currTimestamp;
      }
    }
  }
}

// now
shootMessage([12, "solar panel activated"]); // -> '12 solar panel activated'
shootMessage([15, "solar panel activated"]); //-> '15 solar panel activated'

// goal
shootMessage([12, "solar panel activated"]);
shootMessage([15, "solar panel activated"]);
// -> logs nothing
