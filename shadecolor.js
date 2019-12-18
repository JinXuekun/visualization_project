 String.prototype.colorRgb = function(){
        var sColor = this.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i=1; i<4; i+=1) {
                    sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i=1; i<7; i+=2) {
                sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));
            }
            return "RGB(" + sColorChange.join(",") + ")";
        }
        return sColor;
    };

 function ShadeColor(colorMAX,num){
 
        var colorMAX=colorMAX.toLowerCase();
        var RegHex = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if(RegHex.test(colorMAX)&&/^rgb/.test(colorMAX)){
            colorMAX="rgb(221,221,221)"
        }
        if(RegHex.test(colorMAX)){
            colorMAX=colorMAX.colorRgb()
        }
        colorMAX=colorMAX.slice(4,-1).split(",")
        
        var colors= [];

        var red = colorMAX[0]-0,green = colorMAX[1]-0, blue = colorMAX[2]-0;
        var level = num;
        while(level--) {
            colors.push( 'rgb('+red +','+green+','+blue+')');
            red += 1;
            green += 1;
            blue += 1;
        }
        return colors;
    }