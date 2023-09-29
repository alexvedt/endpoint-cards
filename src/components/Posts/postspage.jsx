import PropTypes from "prop-types";

const url = window.location.pathname; 
const id = url.substring(url.lastIndexOf('/') + 1);
console.log(url, id, "url, id")

function Posts() {
    return (
      <>
     <h1>11111</h1>
      </>
    );
  }
  
  export default Posts;
  

  Posts.propTypes = {
    people: PropTypes.array.isRequired,
  };
  