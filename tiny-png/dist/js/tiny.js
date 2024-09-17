import Counter from "./counter.js";
const counter = new Counter();

const initApp = () =>{
    const dropArea = document.querySelector(".droparea");

    const active = () => dropArea.classList.add('green-border');

    const inActive = () => dropArea.classList.remove('green-border');
    const prevents = (e) => e.preventDefault();

    ["dragover","drop"].forEach(eveName => {
        dropArea.addEventListener(eveName, prevents);
    });

    ["dragenter","dragover"].forEach(eveName => {
        dropArea.addEventListener(eveName,active);
    });

    ["dragleave", "drop"].forEach(eveName =>{
        dropArea.addEventListener(eveName,inActive)
    }); 

    dropArea.addEventListener("drop", function handleDrop(e){
      const dt = e.dataTransfer;
      const files = dt.files;
      const fileArray = [...files];
     if(fileArray.length > 20){
      return alert("Too Many Files!");
     }
     handleFiles(fileArray);
    
  });
  

}
document.addEventListener("DOMContentLoaded", initApp);



const handleFiles = (fileArray) => {
  fileArray.forEach(file =>{
    const fileID = counter.getValue();
    counter.incrementValue();
    if(((file.size / 1024) / 1024) > 4){
      return alert("File Over 4 MB");
    }
    createResult(file,fileID);
    uploadFile(file, fileID);
  });
}

const createResult = (file, fileID) =>{
    const originalSizeString = getFileSizeString(file.size);

    const p1 = document.createElement('p');
    p1.className = 'results__title';
    p1.textContent = file.name;

    const p2 = document.createElement('p');
    p2.className = 'results__size';
    p2.textContent = originalSizeString;

    const divOne = document.createElement('div');
    divOne.appendChild(p1);
    divOne.appendChild(p2);

    const progress = document.createElement('progress');
    progress.id = `progress_${file.name}_${fileID}`;
    progress.className = 'results__bar';
    progress.max = 10;
    progress.value = 0;

    const p3 = document.createElement('p');
    p3.id = `new_size_${file.name}_${fileID}`;
    p3.className = 'results__size';

    const p4 = document.createElement('p');
    p4.id = `download_${file.name}_${fileID}`;
    p4.className = 'results__download';

    const p5 = document.createElement('p');
    p5.id = `saved_${file.name}_${fileID}`;
    p5.className = 'results__saved';

    const divDL = document.createElement('div');
    divDL.className = 'divDL';
    divDL.appendChild(p4);
    divDL.appendChild(p5);

    const divTwo = document.createElement('div');
    divTwo.appendChild(p3);
    divTwo.appendChild(divDL);

    const li = document.createElement('li');
    li.appendChild(divOne);
    li.appendChild(progress);
    li.appendChild(divTwo);

    document.querySelector('.results__list').appendChild(li);
    displayResults();


}

const getFileSizeString = (filesize) =>{
  const sizeInKB = parseFloat(filesize) / 1024;
  const sizeInMB = ((parseFloat(filesize)/ 1024)/ 1024);
  return sizeInKB > 1024 ? `${sizeInMB.toFixed(1)} MB` : `${sizeInKB.toFixed(1)}KB`;
}

const displayResults = ()=>{
  const results = document.querySelector('.results');
  if(results.classList.contains('none')){
    results.classList.remove('none');
    results.classList.add('block');
  }
}

const uploadFile = (file, fileID)=>{
  const reader = new FileReader();
  reader.addEventListener('loadend',async (e) =>{
    const filename = file.name;
    const base64String = e.target.result;
    const extention = (filename).split('.').pop();
    const name  = filename.slice(0, filename.length -(extention.length + 1));
    const body = { base64String, name, extention };
    const url = './.netlify/functions/compress_files';

    try{
      const fileStream = await fetch(url,{
        method : 'POST',
        body: JSON.stringify(body),
        isBase64Encoded: true
      })
     const imgJson = await fileStream.json();
      if(imgJson.error) return handleFileError(filename,fileID);
      updateProgressBar(file,fileID,imgJson);
    } catch (err){
      console.error(err);
    }


  });

  reader.readAsDataURL(file);
}

const handleFileError = (filename,fileID)=>{
  const progress = document.getElementById(`progress_${filename}_${fileID}`);
  progress.value = 10;
  progress.classList.add('error');
}

const updateProgressBar = (file, fileID,imgJson) =>{
  const progress = document.getElementById(`progress_${file.name}_${fileID}`);
  const addProgress = setInterval(()=>{
    progress.value +=1;
    if(progress.value ==10){
      clearInterval(addProgress);
      progress.classList.add('finished');
      populateResult(file, fileID,imgJson);
    }
  },50);
}

const populateResult = (file, fileID,imgJson)=>{
  const newFilesSizeString = getFileSizeString(imgJson.filesize);
  const persentSaved = getPercentSaved(file.size,imgJson.filesize);

  const newSize = document.getElementById(`new_size_${file.name}_${fileID}`);
  newSize.textContent  = newFilesSizeString;

  const download = document.getElementById(`download_${file.name}_${fileID}`);
  const link = createDownloadLink(imgJson)
  download.appendChild(link);

  const saved = document.getElementById(`saved_${file.name}_${fileID}`);
  saved.textContent = `-${Math.round(persentSaved)}%`;
}


const getPercentSaved = (originalSizeString,newFilesSizeString)=>{
  const originalFs = parseFloat(originalSizeString);
  const newFS = parseFloat(newFilesSizeString);
  return ((originalFs - newFS) / originalFs)*100;
}

const createDownloadLink = (imgJson) =>{
  const extention = (imgJson.filename).spilt('.').pop();
  const link = document.createElement('a');
  link.href = `data:image/${extention};base64,&{imgjson.base64CompString}`;
  link.download = imgJson.filename;
  link.textContent =  'download';
  return link;
}