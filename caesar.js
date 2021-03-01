function caesar(str, shift) {
  const encry = [];

  const encryLowerCase = (code) => {
    let newCode = code + shift;

    if (newCode > 122) {
      newCode -= 26
    } else if (newCode < 97) {
      newCode += 26
    }
    encry.push(String.fromCharCode(newCode));
  }

  const encryUpperCase = (code) => {
    let newCode = code + shift;

    if (newCode > 90) {
      newCode -= 26
    } else if (newCode < 65) {
      newCode += 26
    }
    encry.push(String.fromCharCode(newCode));
  }

  for (i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)
    if (code >= 97 && code <=122) {
      encryLowerCase(code);
    } else if (code >= 65 && code <= 90){
      encryUpperCase(code);
    } else {
      encry.push(String.fromCharCode(code));
    }
  }
  return encry.join('');
}

module.exports = caesar
