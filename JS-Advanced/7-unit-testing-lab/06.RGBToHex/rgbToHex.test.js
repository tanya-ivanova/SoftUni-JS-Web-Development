const {expect} = require('chai');
const {rgbToHexColor} = require('./rgbToHex');

describe('Testing rgbToHex function', () => {
    it('works with white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('works with black colour', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('works with random colour', () => {
        expect(rgbToHexColor(34, 56, 91)).to.equal('#22385B');
    });

    it('returns undefined for upper out-of-range params', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('returns undefined for lower out-of-range params', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined if invalid type params', () => {
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
    });

    it('returns undefined if params are missing', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('works with 15, 15, 15', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    });

    it('returns undefined with float numbers', () => {
        expect(rgbToHexColor(1.1, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1.1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, 1.1)).to.be.undefined;
    });

});
