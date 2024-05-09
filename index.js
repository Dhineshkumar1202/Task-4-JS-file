// Using for loop
console.log("Using for loop:");
const resume = {
  "name": "DhineshKumar",
  "title": "Fullstack developer",
 
};

for (let key in resume) {
  if (Array.isArray(resume[key])) {
    for (let i = 0; i < resume[key].length; i++) {
      console.log(resume[key][i]);
    }
  } else if (typeof resume[key] === 'object') {
    for (let subKey in resume[key]) {
      console.log(resume[key][subKey]);
    }
  } else {
    console.log(resume[key]);
  }
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let key of Object.keys(resume)) {
  if (Array.isArray(resume[key])) {
    for (let item of resume[key]) {
      console.log(item);
    }
  } else if (typeof resume[key] === 'object') {
    for (let subKey of Object.keys(resume[key])) {
      console.log(resume[key][subKey]);
    }
  } else {
    console.log(resume[key]);
  }
}

// Using forEach loop 
console.log("\nUsing forEach loop:");
Object.keys(resume).forEach(key => {
  if (Array.isArray(resume[key])) {
    resume[key].forEach(item => {
      console.log(item);
    });
  } else if (typeof resume[key] === 'object') {
    Object.keys(resume[key]).forEach(subKey => {
      console.log(resume[key][subKey]);
    });
  } else {
    console.log(resume[key]);
  }
});
