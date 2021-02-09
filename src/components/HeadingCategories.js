import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import headingCategoriesStyles from '../components/headingCategories.module.css'
import HeadingPost from './HeadingPost';
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

// list of items
const list = [
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> },
    { name: <HeadingPost/> }
  ];
  
  // One item component
  // selected prop will be passed
  const MenuItem = ({ text, selected }) => {
    return (
      <div
        className={headingCategoriesStyles.menuItem}
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
  
  
  const ArrowLeft = Arrow({ text: <FaArrowLeft/>, className: headingCategoriesStyles.arrowprev });
  const ArrowRight = Arrow({ text: <FaArrowRight/>, className: headingCategoriesStyles.arrownext });
class HeadingCategories extends Component {
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
            <div className={headingCategoriesStyles.categoryBox}>
                <ScrollMenu style={{paddingTop:'20%'}}
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
export default HeadingCategories