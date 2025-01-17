const TermsAndConditions = () => {
  return (
    <div
      className="container"
      style={{
        background: "white",
        padding: "20px",
        maxWidth: "800px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Terms and Conditions
      </h1>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        Welcome to our Quiz App! By using our app, you agree to comply with the
        following terms and conditions. Please read them carefully.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>
        1. Acceptance of Terms
      </h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        By accessing or using the quiz app, you agree to be bound by these
        terms. If you do not agree, you may not use the app.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>2. User Accounts</h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        Users may be required to create an account to participate in quizzes.
        You are responsible for keeping your account information secure.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>3. Quiz Content</h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        All quiz questions and answers are for educational purposes only. We do
        not guarantee the accuracy or completeness of any content.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>
        4. Prohibited Activities
      </h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        Users are prohibited from cheating, hacking, or attempting to exploit
        the app in any way.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>5. Termination</h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        We reserve the right to suspend or terminate accounts that violate our
        terms or engage in unlawful behavior.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>
        6. Limitation of Liability
      </h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        We are not liable for any damages resulting from the use or inability to
        use the app, including any errors or interruptions in service.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>7. Changes to Terms</h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        We reserve the right to modify these terms at any time. Your continued
        use of the app indicates acceptance of any changes.
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>8. Contact Us</h2>
      <p style={{ lineHeight: "1.6", color: "#666" }}>
        If you have any questions or concerns about these terms, please contact
        us at support@quizapp.com.
      </p>
    </div>
  );
};

export default TermsAndConditions;
