let numbersToTest = [];
for(i = 100; i < 999;  i += 1) {
    let str = i.toString();
    let split = str.split("");
    let a = parseInt(split[0]);
    let b = parseInt(split[1]);
    let c = parseInt(split[2]);
    let combo1 = [a,b,c];
    let combo3 = [0,a,c];
    if(a != b &&
       a != c &&
       b != c){
    numbersToTest.push(combo1);
  }
    if(b == 0 &&
      a !== c &&
      c !== 0){
      numbersToTest.push(combo3);
    }
  }
  let testArr2 = [];
    for (var i = 0; i < numbersToTest.length; i++) {
      let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
      let numbersJoin = numbersToTest[i].join("");
      let number = parseInt(numbersJoin);
      if (number % 2 == 0) {
        testArr1[1] = numbersToTest[i][0];
        testArr1[2] = numbersToTest[i][1];
        testArr1[3] = numbersToTest[i][2];
        testArr2.push(testArr1);
      }
    }
    let testArr3 = [];
      for (var i = 0; i < numbersToTest.length; i++) {
        let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
        let numbersJoin = numbersToTest[i].join("");
        let number = parseInt(numbersJoin);
        if (number % 3 == 0) {
          testArr1[2] = numbersToTest[i][0];
          testArr1[3] = numbersToTest[i][1];
          testArr1[4] = numbersToTest[i][2];
          testArr3.push(testArr1);
        }
      }
      let testArr4 = [];
        for (var i = 0; i < numbersToTest.length; i++) {
          let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
          let numbersJoin = numbersToTest[i].join("");
          let number = parseInt(numbersJoin);
          if (number % 5 == 0) {
            testArr1[3] = numbersToTest[i][0];
            testArr1[4] = numbersToTest[i][1];
            testArr1[5] = numbersToTest[i][2];
            testArr4.push(testArr1);
          }
        }
        let testArr5 = [];
        for (var i = 0; i < numbersToTest.length; i++) {
          let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
          let numbersJoin = numbersToTest[i].join("");
          let number = parseInt(numbersJoin);
          if (number % 7 == 0) {
            testArr1[4] = numbersToTest[i][0];
            testArr1[5] = numbersToTest[i][1];
            testArr1[6] = numbersToTest[i][2];
            testArr5.push(testArr1);
          }
        }
        let testArr6 = [];
        for (var i = 0; i < numbersToTest.length; i++) {
          let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
          let numbersJoin = numbersToTest[i].join("");
          let number = parseInt(numbersJoin);
          if (number % 11 == 0) {
            testArr1[5] = numbersToTest[i][0];
            testArr1[6] = numbersToTest[i][1];
            testArr1[7] = numbersToTest[i][2];
            testArr6.push(testArr1);
          }
        }
        let testArr7 = [];
        for (var i = 0; i < numbersToTest.length; i++) {
          let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
          let numbersJoin = numbersToTest[i].join("");
          let number = parseInt(numbersJoin);
          if (number % 13 == 0) {
            testArr1[6] = numbersToTest[i][0];
            testArr1[7] = numbersToTest[i][1];
            testArr1[8] = numbersToTest[i][2];
            testArr7.push(testArr1);
          }
        }
        let testArr8 = [];
        for (var i = 0; i < numbersToTest.length; i++) {
          let testArr1 = ["x","x","x","x","x","x","x","x","x","x"];
          let numbersJoin = numbersToTest[i].join("");
          let number = parseInt(numbersJoin);
          if (number % 17 == 0) {
            testArr1[7] = numbersToTest[i][0];
            testArr1[8] = numbersToTest[i][1];
            testArr1[9] = numbersToTest[i][2];
            testArr8.push(testArr1);
          }
        }
        let finalArr9 = [];
          for (var i = 0; i < testArr2.length; i++) {
            for (var k = 0; k < testArr3.length; k++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              if(testArr2[i][2] == testArr3[k][2] &&
                 testArr2[i][3] == testArr3[k][3]){
                   tempArr[1] = testArr2[i][1];
                   tempArr[2] = testArr2[i][2];
                   tempArr[3] = testArr2[i][3];
                   tempArr[4] = testArr3[k][4];
                   finalArr9.push(tempArr);
                 }
            }
          }
          let finalArr10 = [];
          for (var i = 0; i < finalArr9.length; i++) {
            for (var k = 0; k < testArr4.length; k++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              if(finalArr9[i][3] == testArr4[k][3] &&
                 finalArr9[i][4] == testArr4[k][4]){
                   tempArr[1] = finalArr9[i][1];
                   tempArr[2] = finalArr9[i][2];
                   tempArr[3] = finalArr9[i][3];
                   tempArr[4] = finalArr9[i][4];
                   tempArr[5] = testArr4[k][5];
                   finalArr10.push(tempArr);
                 }
            }
          }
          let finalArr11 = [];
          for (var i = 0; i < finalArr10.length; i++) {
            for (var k = 0; k < testArr5.length; k++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              if(finalArr10[i][4] == testArr5[k][4] &&
                 finalArr10[i][5] == testArr5[k][5]){
                   tempArr[1] = finalArr10[i][1];
                   tempArr[2] = finalArr10[i][2];
                   tempArr[3] = finalArr10[i][3];
                   tempArr[4] = finalArr10[i][4];
                   tempArr[5] = finalArr10[i][5];
                   tempArr[6] = testArr5[k][6];
                   finalArr11.push(tempArr);
                 }
            }
          }
          let finalArr12 = [];
          for (var i = 0; i < finalArr11.length; i++) {
            for (var k = 0; k < testArr6.length; k++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              if(finalArr11[i][5] == testArr6[k][5] &&
                 finalArr11[i][6] == testArr6[k][6]){
                   tempArr[1] = finalArr11[i][1];
                   tempArr[2] = finalArr11[i][2];
                   tempArr[3] = finalArr11[i][3];
                   tempArr[4] = finalArr11[i][4];
                   tempArr[5] = finalArr11[i][5];
                   tempArr[6] = finalArr11[i][6];
                   tempArr[7] = testArr6[k][7];
                   finalArr12.push(tempArr);
                 }
            }
          }
          let finalArr13 = [];
          for (var i = 0; i < finalArr12.length; i++) {
            for (var k = 0; k < testArr7.length; k++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              if(finalArr12[i][6] == testArr7[k][6] &&
                 finalArr12[i][7] == testArr7[k][7]){
                   tempArr[1] = finalArr12[i][1];
                   tempArr[2] = finalArr12[i][2];
                   tempArr[3] = finalArr12[i][3];
                   tempArr[4] = finalArr12[i][4];
                   tempArr[5] = finalArr12[i][5];
                   tempArr[6] = finalArr12[i][6];
                   tempArr[7] = finalArr12[i][7];
                   tempArr[8] = testArr7[k][8];
                   finalArr13.push(tempArr);
                 }
            }
          }
          let finalArr14 = [];
          for (var i = 0; i < finalArr13.length; i++) {
            for (var k = 0; k < testArr8.length; k++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              if(finalArr13[i][7] == testArr8[k][7] &&
                 finalArr13[i][8] == testArr8[k][8]){
                   tempArr[1] = finalArr13[i][1];
                   tempArr[2] = finalArr13[i][2];
                   tempArr[3] = finalArr13[i][3];
                   tempArr[4] = finalArr13[i][4];
                   tempArr[5] = finalArr13[i][5];
                   tempArr[6] = finalArr13[i][6];
                   tempArr[7] = finalArr13[i][7];
                   tempArr[8] = finalArr13[i][8];
                   tempArr[9] = testArr8[k][9];
                   finalArr14.push(tempArr);
                 }
            }
          }
          let finalArr15 = [];
            for (var i = 0; i < finalArr14.length; i++) {
              let tempArr = ["x","x","x","x","x","x","x","x","x","x"];
              tempArr[1] = finalArr14[i][1];
              tempArr[2] = finalArr14[i][2];
              tempArr[3] = finalArr14[i][3];
              tempArr[4] = finalArr14[i][4];
              tempArr[5] = finalArr14[i][5];
              tempArr[6] = finalArr14[i][6];
              tempArr[7] = finalArr14[i][7];
              tempArr[8] = finalArr14[i][8];
              tempArr[9] = finalArr14[i][9];
              if (finalArr14[i].includes(0)==false){
                tempArr[0] = 0;
              }
              else if (finalArr14[i].includes(1)==false){
                tempArr[0] = 1;
              }
              else if (finalArr14[i].includes(2)==false){
                tempArr[0] = 2;
              }
              else if (finalArr14[i].includes(3)==false){
                tempArr[0] = 3;
              }
              else if (finalArr14[i].includes(4)==false){
                tempArr[0] = 4;
              }
              else if (finalArr14[i].includes(5)==false){
                tempArr[0] = 5;
              }
              else if (finalArr14[i].includes(6)==false){
                tempArr[0] = 6;
              }
              else if (finalArr14[i].includes(7)==false){
                tempArr[0] = 7;
              }
              else if (finalArr14[i].includes(8)==false){
                tempArr[0] = 8;
              }
              else if (finalArr14[i].includes(9)==false){
                tempArr[0] = 9;
              }
              if(tempArr[0] !== 0){
              finalArr15.push(tempArr);
            }
            }
            let finalArr16 = [];
              for (var i = 0; i < finalArr15.length; i++) {
                if(
                  finalArr15[i].includes(0) == true &&
                  finalArr15[i].includes(1) == true &&
                  finalArr15[i].includes(2) == true &&
                  finalArr15[i].includes(3) == true &&
                  finalArr15[i].includes(4) == true &&
                  finalArr15[i].includes(5) == true &&
                  finalArr15[i].includes(6) == true &&
                  finalArr15[i].includes(7) == true &&
                  finalArr15[i].includes(8) == true &&
                  finalArr15[i].includes(9) == true
                ){
                  finalArr16.push(finalArr15[i].join(',').replace(/,/g,''));
                }

              }
            let finalArr17 = finalArr16.map((x) => parseInt(x, 10)).sort()
   return finalArr17                                            
