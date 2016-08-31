function unisub(var destination) {
    var unicodesubchars = ["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"];
    var originaltext = window.getSelection().toString();
    var subbedtext = originaltext;
    var left = "";
    var right = "";
    for (int i=0; i<originaltext.length; i++) {
        switch (originaltext[i]) {
            case "0":
                left = subbedtext.slice(0,i-1);
                right = subbedtext.slice(i);
                subbedtext = left + unicodesubchars[0] + right;
                break;
            case "1":
                left = subbedtext.slice(0,i-1);
                right = subbedtext.slice(i);
                subbedtext = left + unicodesubchars[1] + right;
                break;
            case "2":
                left = subbedtext.slice(0,i-1);
                right = subbedtext.slice(i);
                subbedtext = left + unicodesubchars[2] + right;
                break;
            case "3":
                left = subbedtext.slice(0,i-1);
                right = subbedtext.slice(i);
                subbedtext = left + unicodesubchars[3] + right;
                break;
            case "4":
                left = subbedtext.slice(0,i-1);
                right = subbedtext.slice(i);
                subbedtext = left + unicodesubchars[4] + right;
                break;
            case "5":
                left = subbedtext.slice(0,i-1);
                right = subbedtext.slice(i);
                subbedtext = left + unicodesubchars[5] + right;
                break;
            default:
                break;
        }
    }
}
