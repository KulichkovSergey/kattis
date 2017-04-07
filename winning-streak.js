let line;

while (line = readline()) {
    let nums = line.split(' ');
    print(solve(parseInt(nums[0]), parseFloat(nums[1])));
}

function solve(n, p) {
  let w = [1];
  
  for (let i = 1; i <= n; i++) {
    w[i] = w[i - 1] * p;
  }
  
  let f = [];
  
  for (let j = 0; j <= n; j++) {
    f[j] = [];
	
    for (let k = 0; k <= n; k++) {
      if (k >= j) {
        f[j][k] = 1;
        continue;
      }
	  
      if (k + 1 === j) {
        f[j][k] = 1 - w[j];
        continue;
      }
	  
      f[j][k] = f[j - 1][k];
	  
      if (j - k - 2 >= 0) {
        f[j][k] -= f[j - k - 2][k] * (1 - p) * w[k + 1];
      }
    }
  }
  
  let res = 0;
  
  for (let l = 1, temp = f[n]; l <= n; l++) {
    res += l * (temp[l] - temp[l - 1]);
  }
  
  return res;
}