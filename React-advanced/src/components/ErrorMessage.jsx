function ErrorMessage({ message }) {
    return (
      <div className="error">
        <p>⚠️ {message || "Something went wrong. Please try again."}</p>
      </div>
    );
  }
  
  export default ErrorMessage;