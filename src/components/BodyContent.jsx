import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';


function BodyContent(props) {
  let title = props.title ? `${props.title.slice(0, 20)}...` : "Title";
  let description = props.description ? `${props.description.slice(0, 60)}...` : "Description";
  return (
    <div className={props.boxClass}>
      <Image src={props.image} className={props.imageClass} />
      {props.title ?
        <a><strong>{title}</strong></a>
        : ""
      }
      <p className=' p-4'> {description}</p>

    </div>
  );
}

const { string } = PropTypes

BodyContent.propTypes = {
  // linkUrl: PropTypes.string.isRequired,
  image: string.isRequired,
  imageClass: string,
  // imageAlt: PropTypes.string,
  boxClass: string,
  title: string,
  counting: string,
  description: string
};
BodyContent.defaultProps = {
  // imageAlt:'',
  image: '',
  imageClass: '',
  // linkUrl: '',
  boxClass: '',
  title: '',
  counting: '',
}

export default BodyContent;
