import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from '../AuthorQuiz';
import Enzyme , {mount,shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

let state={
    turnData:{
        books:["book 1","book 2"],
        author:{
            name: 'William Shakespeare',
            imageUrl: 'images/authors/williamshakespeare.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
        }
    },
    highLight:"none"
}

describe("Author Quiz", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<AuthorQuiz {...state} onClick={()=>{}} />, div);
    });

    describe("When no answer has been select",()=>{

        let wrapper;
        beforeAll(()=>{
            wrapper = mount(<AuthorQuiz {...state} onClick={()=>{}}/>)
        });

        it("should have no background color",()=>{
            expect(wrapper.find('div.turn.row').props().style.backgroundColor).toBe('none');
        })
    })

    describe("When wrong answer has been select",()=>{

        let wrapper;
        beforeAll(()=>{
            wrapper = mount(<AuthorQuiz {...(Object.assign({},state,{highLight:"incorrect"}))} onClick={()=>{}}/>)
        });

        it("should have red background color",()=>{
            expect(wrapper.find('div.turn.row').props().style.backgroundColor).toBe('red');
        })
    });

    describe("When correct answer has been select",()=>{

        let wrapper;
        beforeAll(()=>{
            wrapper = mount(<AuthorQuiz {...(Object.assign({},state,{highLight:"correct"}))} onClick={()=>{}}/>)
        });

        it("should have green background color",()=>{
            expect(wrapper.find('div.turn.row').props().style.backgroundColor).toBe('green');
        })
    })
});


