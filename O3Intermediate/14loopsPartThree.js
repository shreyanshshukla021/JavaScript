const names = ["Youtube","Facebook","Instagram","Netflix","Amazon"];

// For of loop is generally used for array


for(const n of names) {
    console.log(n);
};


const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook" ,
    nf:  "Netflix",
}



// For in loop is generally used for object

for(const n in symbols) {
    console.log(n);
}


// For accesing the values for the object == objectName[n]

for(const n in symbols) {
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}