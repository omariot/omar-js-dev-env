import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say Hello World', ( done ) => {
        const index = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'UTF-8');                
        const { JSDOM } = jsdom;
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Hello World');
        done();
        dom.window.close();
    });
});