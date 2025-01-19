class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = 0;
    }
    rgbToHex(s) {
        // Convert each RGB component to a two-digit hexadecimal string
        let toHex = s.toString(16).padStart(2, '0');

        // Combine the hex values into a single hex color string
        return toHex;
    }
    hex() {
        this.rOct = this.rgbToHex(this.r);
        this.gOct = this.rgbToHex(this.g);
        this.bOct = this.rgbToHex(this.b);
        this.hex = `#${this.rOct}${this.gOct}${this.bOct}`
        return this.hex;
    }

    rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }

    rgba(a) {
        this.a = a;
        return `rgb(${this.r},${this.g},${this.b},${this.a})`;
    }


}

module.exports = { Color }