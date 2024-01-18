import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary capitalize btn-block"
      disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-ring"></span>
          Sending...
        </>
      ) : (
           text  || "Submit"
      )}
    </button>
  );
};
export default SubmitBtn;
