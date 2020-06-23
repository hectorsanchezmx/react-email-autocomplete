import React, { useState } from "react";
import { Layout, Row, Col, Tag } from 'antd';
import { Suggestions } from './lib/Suggestions';

import styles from './EmailInput.styles';

export const EmailInput = ({ options, filterOptions, tags, selectTag, removeTag }) => {
  const [hoveredTag, setHoveredTag] = useState(null);

  const handleSelect = async(value) => {
    const selectedOption = options.find(option=>value === option.value)
    selectTag(selectedOption)
  }

  const isOnHover = (tag) => {
    return hoveredTag === tag;
  }

  const handleRemove = (tag) => {
    removeTag(tag)
  }

  const renderTag = (tag) => {
    const isHovered = isOnHover(tag);
    return (
      isHovered ? (
        <Tag
          key={tag}
          closable={true}
          onClose={() => handleRemove(tag)}
        >
        <span>
          {tag}
        </span>
      </Tag>
      ) : (
        <div style={styles.Tag}>{tag}</div>
      ))
}

  return (
    <div style={styles.InputContainer}>
      <Row align="top"> 
        <Col span={2}>
          <div style={styles.Label}>To:</div>
        </Col>
        <Col span={20}>
          <div style={styles.InputOutline}>
            <Row> 
              {tags && tags.length > 0 && (
                <Col>
                  <Row align="middle"> 
                  {tags.map((tag, index)=>{
                    return (
                      <div 
                        onMouseEnter={() => setHoveredTag(tag)} 
                        onMouseLeave={() => setHoveredTag('')}>
                        {renderTag(tag)}
                      </div>
                    )})}
                  </Row> 
                </Col>
              )}
              <Col flex="1">
                <Suggestions 
                  onSelect={handleSelect}
                  options={options} 
                  filterOptions={filterOptions}
                />
              </Col>
            </Row>
          </div>
        </Col>

      </Row>
    </div>
  )
}