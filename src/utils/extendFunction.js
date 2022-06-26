

export default class ExtendFunction {
    romanize(num) {
        if (isNaN(num))
            return NaN;
        var digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    };
    doesImageExist = (url) =>
        new Promise((resolve) => {
            const img = new Image();

            img.src = url;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
        });
    async checkImage(url){
        let check = await this.doesImageExist(url)
        console.log(check);
        return check ? url : 'https://www.langf.vn/assets/images/default-cover.png'
    }
}