import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';


describe("it should render successfylly",()=>{
    
    beforeAll(()=>{
        expect(false).not.toBeTruthy();
    })

    it("should be correct",()=>{
        expect(11+3).toBe(14);
    });

    it("should render",()=>{
        const root = document.createElement('div');
        ReactDOM.render(<Form />,root);
    });

    it("should contain form tag",()=>{
        const result =<Form />
        expect(result.props.children).toContain('form');
    })

    test("just testing",()=>{
        expect(false).not.toBeTruthy();
    })

});