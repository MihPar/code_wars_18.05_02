var cubeChecker = function(volume, side){
  if(volume > 0 && side > 0) {
    return volume === side**3
  } else {
    return false
  }
};