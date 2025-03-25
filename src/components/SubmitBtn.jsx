import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <button className="btn btn-primary btn-block" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-ring loading-lg"></span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
