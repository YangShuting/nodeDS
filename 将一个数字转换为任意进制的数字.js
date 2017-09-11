// 将任意进制的数字转换为十进制的数字：parseInt()
// 将10进制的数字转换为二进制，八进制，或者十进制的方法：152.toString(16)

// 将数字转换为 2~9进制的数字
// 算法思想：
// 01. 最高位为 n % b, 将此位压入栈
// 02. 使用 n / b 代替 n
// 03. 重复步骤1和2，直到n等于0，且没有余数
// 04. 持续将栈内元素排空，直到栈为空，依次将这些元素排列，就得到转换后的数字的字符串的形式。
//此算法只针对 2~9 为基数的情况

function mulBase(num, base){
    var s= new Stack()
    do{
        s.push(num%base);
        num = Math.floor(num /= base);
    }
    while (num > 0);
    var converted = "";
    while(s.length() > 0){
        converted += s.pop();
    }
    return converted;
}
