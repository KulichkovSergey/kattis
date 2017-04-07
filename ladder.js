let line;

while (line = readline()) {
    let nums = line.split(' ');

    if (nums.length === 2){
        let a = parseInt(nums[0]);
        let b = parseFloat(nums[1]);

        print(parseInt(Math.ceil(a / Math.sin(b * Math.PI / 180))));
    }
}