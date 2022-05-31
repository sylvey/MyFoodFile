import React from 'react';
import renderer from 'react-test-renderer';
import MapScreen from '../../screens/Map';
import reducer, {addQuestion} from '../../redux/SheetSlice';
import DetailItem from '../../screens/Detail/components/Item';
import DetailData from '../../hardData/DetailData';



test('MapScreen', ()=>{
    const tree = renderer.create(<MapScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Redux Initial state', ()=>{
    expect(reducer(undefined, {})).toEqual([])
})

test('should handle a question being added to an empty list', () => {
  const previousState = []
  expect(reducer(previousState, addQuestion())).toHaveLength(1)
})

test('DetailItem', ()=>{
    const tree = renderer.create(<DetailItem item={DetailData}/>).toJSON();
    expect(tree).toMatchSnapshot();
});








// describe('<BottomTabs />', ()=>{
//     it('has 1 child', ()=>{
//         const tree = renderer.create(<BottomTabs />).toJSON();
//         expect(tree.children.length).toBe(5);
//     })
// })