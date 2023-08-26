function getFileExtension(filename) {
    return filename.split('.').pop();
  }
  
  const exampleFilename = "Wsd.txt";
  const extension = getFileExtension(exampleFilename);
  console.log("File Extension:", extension);
  