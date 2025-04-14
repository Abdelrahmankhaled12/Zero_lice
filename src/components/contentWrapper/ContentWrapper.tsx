import './style.scss'; // Importing the SCSS file for styling

// Defining the type for the component props
interface ContentWrapperProps {
  children: React.ReactNode; // The children prop can be any valid React node
}

// ContentWrapper component definition
const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className='contentWrapper'>
      {children} {/* Rendering the children components passed to this component */}
    </div>
  );
};

export default ContentWrapper; // Exporting the ContentWrapper component
