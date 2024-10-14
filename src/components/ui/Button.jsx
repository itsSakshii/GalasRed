import PropTypes from "prop-types";

export default function Button({ text }) {
  return (
    <button className="btn font-medium tracking-wide text-black capitalize 
      transition-colors duration-300 transform bg-teal-400 rounded-xl 
      hover:bg-teal-300 focus:outline-none inline-block 
      focus:ring-4 focus:ring-white focus:ring-opacity-100 
      focus:ring-offset-2 focus:ring-offset-teal-400 
      active:ring-white active:ring-offset-2 
      px-4 py-2">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
