const size = (num) => Math.floor((Math.random() * num) + 1);
const arrLength = size(50);
const chunk = size(10);
const arr = Array.from({length: arrLength}, (_, i) => i + 1);
const doChunk = () =>
    console.log(Array.from({ length: Math.ceil(arrLength / chunk) }, (_v, i) =>
    arr.slice(i * chunk, i * chunk + chunk))
);

(function(){
    arr.length >= chunk ? doChunk() : console.log('invalid chunk size, please refresh'); 
})();
