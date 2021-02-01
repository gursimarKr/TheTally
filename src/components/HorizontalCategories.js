import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import HorizontalCategoriesStyles from '../components/categories.module.css'
import Posts from './Posts';
// list of items
const list = [
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> },
    { name: <Posts/> }
  ];
  
  // One item component
  // selected prop will be passed
  const MenuItem = ({ text, selected }) => {
    return (
      <div
        className={HorizontalCategoriesStyles.menuItem}
      >
        {text}
      </div>
    );
  };
  
  // All items component
  // Important! add unique key
  export const Menu = (list) => list.map(el => {
    const { name } = el;
  
    return (
      <MenuItem
        text={name}
        key={name}
      />
    );
  });
  
  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  
  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
class HorizontalCategories extends Component {
    state = {
        selected: 0
      };
      
      onSelect = key => {
        this.setState({ selected: key });
      }
    
    render() {
        const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);
        return (
            <div>
                <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
            </div>
        )
    }
}
export default HorizontalCategories