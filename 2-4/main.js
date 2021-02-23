const seasons = process.argv[2];

switch(seasons) {
  case '2':
  case '3':
  case '4':
    console.log('季節は春です');
    break;
  case '5':
  case '6':
  case '7':
    console.log('季節は夏です');
    break;
  case '8':
  case '9':
  case '10':
    console.log('季節は秋です');
    break;
  case '11':
  case '12':
  case '1':
    console.log('季節は冬です');
    break;
  default:
    console.log('なにか間違えている！');
    break;
}