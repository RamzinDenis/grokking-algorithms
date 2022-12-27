function stringSequence(str1, str2) {
  const dp = Array.from(Array(str1.length + 1).fill(0), () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        dp[i + 1][j + 1] += dp[i + 1][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp;
}

/* 
 
dp[0][]

   F I S H
 F 1 1 1 1
 O 1 1 1 1
 S 1 1 2 2
 S 1 1 2 2
 H 1 1 

*/

/*  FIS FOSS  

Можем посмотреть выбрать большую последотельность между FIS FOS и  FI FOSS

*/

console.log(stringSequence("fish", "fosh"));
